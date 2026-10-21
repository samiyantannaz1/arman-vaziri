


"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { Project } from "../data/Projects";

interface ProjectItemProps {
  project: Project;
  index: number;
}

function ProjectInfo({
  project,
  side = false,
}: {
  project: Project;
  side?: boolean;
}) {
  const titleParts = project.title.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.8 }}
      className={
        side
          ? "w-full shrink-0 md:w-[220px] lg:w-[280px]"
          : "w-full"
      }
    >
      <Link
        href={`/projects/${project.slug}`}
        className="group/title block"
        aria-label={`View ${project.title} project`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col leading-[0.9]">
            <span className="text-[clamp(1.8rem,3.2vw,3.2rem)] font-normal tracking-[-0.04em] text-white transition-colors duration-300 group-hover/title:text-[#c9a46a]">
              {titleParts[0]}
            </span>

            {titleParts[1] && (
              <span className="mt-1 text-[clamp(1.45rem,2.6vw,2.6rem)] font-extralight tracking-[-0.045em] text-white/50 transition-colors duration-300 group-hover/title:text-[#c9a46a]/80">
                {titleParts.slice(1).join(" ")}
              </span>
            )}
          </div>
        </div>
      </Link>

      <div className="mt-5 flex items-center gap-5 md:mt-6">
        <span className="whitespace-nowrap text-[7px] uppercase tracking-[0.22em] text-white/45 md:text-[8px]">
          {project.location} — {project.year}
        </span>

        <motion.div
          className="group flex w-[110px] items-center md:w-[170px] lg:w-[220px]"
          whileHover="hover"
        >
          <motion.div
            variants={{
              hover: {
                width: "100%",
              },
            }}
            initial={{ width: "72%" }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="relative h-px bg-white/45"
          >
            <motion.span
              variants={{
                hover: {
                  x: 8,
                },
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute right-[-1px] top-1/2 block h-[7px] w-[7px] -translate-y-1/2 rotate-45 border-r border-t border-white/70"
            />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function FloatingImage({
  src,
  alt,
  index,
  href,
  className = "",
}: {
  src: string;
  alt: string;
  index: number;
  href: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 100%", "center 45%"],
  });

  const startRotation = index % 2 === 0 ? -7 : 6;

  const rotation = useTransform(
    scrollYProgress,
    [0, 0.4, 0.75, 1],
    [startRotation, startRotation * 0.45, startRotation * 0.12, 0]
  );

  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.86, 0.92, 0.96]
  );

  const y = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [35, 8, 0]
  );

  return (
    <div
      ref={ref}
      className={`relative ${className}`}
      style={{
        perspective: "1200px",
      }}
    >
      <motion.div
        style={{
          rotate: rotation,
          scale,
          y,
        }}
        className="origin-center"
      >
        <Link
          href={href}
          aria-label={`View ${alt} project`}
          className="group block"
        >
          <div className="relative overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.025 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="relative aspect-[16/10] w-full"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 70vw"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/10" />
            </motion.div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export default function ProjectItem({
  project,
  index,
}: ProjectItemProps) {
  const isSingle = project.homeImages.length === 1;
  const isTwo = project.homeImages.length === 2;
  const projectHref = `/projects/${project.slug}`;

  return (
    <article className="relative px-5 py-10 md:px-10 md:py-[72px]">
      {isSingle && (
        <div className="mx-auto max-w-[1500px]">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-[5vw]">
            <div className="order-2 md:order-1 md:w-[24%] md:max-w-[280px]">
              <ProjectInfo project={project} side />
            </div>

            <div className="order-1 w-full md:order-2 md:w-[60%]">
              <FloatingImage
                src={project.homeImages[0]}
                alt={project.title}
                index={index}
                href={projectHref}
              />
            </div>
          </div>
        </div>
      )}

      {isTwo && (
        <div className="mx-auto max-w-[1100px]">
          <div
            className={
              index % 2 === 0
                ? "grid grid-cols-1 gap-5 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-7"
                : "grid grid-cols-1 gap-5 md:grid-cols-[0.85fr_1.15fr] md:items-end md:gap-7"
            }
          >
            <FloatingImage
              src={project.homeImages[0]}
              alt={project.title}
              index={index}
              href={projectHref}
              className="w-full"
            />

            <FloatingImage
              src={project.homeImages[1]}
              alt={project.title}
              index={index + 1}
              href={projectHref}
              className="w-full"
            />
          </div>

          <div className="mt-7 md:ml-[12%] md:mt-9 md:w-[70%]">
            <ProjectInfo project={project} />
          </div>
        </div>
      )}
    </article>
  );
}
