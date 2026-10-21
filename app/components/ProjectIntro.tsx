
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

interface ProjectIntroProps {
  description: string;
  location: string;
  year: string;
  area: string;
  image: string;
  title?: string;
}

export default function ProjectIntro({
  description,
  location,
  year,
  area,
  image,
  title = "FEATURES",
}: ProjectIntroProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#0d0d0d] px-6 py-24 text-white sm:px-10 md:px-12 md:py-32 lg:px-20 lg:py-40 xl:px-24">
      <div className="mx-auto grid w-full max-w-[900px] grid-cols-1 gap-10 md:grid-cols-[1.2fr_0.8fr] md:gap-x-0 lg:grid-cols-[1.25fr_0.75fr] lg:gap-x-0">

        {/* LEFT: Project Image */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  rotate: -5,
                  y: -25,
                  x: 12,
                }
          }
          whileInView={{
            opacity: 1,
            rotate: 0,
            y: 0,
            x: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="min-w-0 md:row-span-2"
        >
          <div className="relative ml-[12px] mt-[16px] h-[280px] w-[70%] min-w-0 sm:h-[340px] md:ml-[16px] md:mt-[24px] md:h-[420px] lg:h-[500px]">

            {/* Thin gold border */}
            <div className="absolute inset-0 border border-[#B89A63]/45" />

            {/* Diagonal gold line */}
            <div className="absolute -left-1 top-16 z-10 h-px w-24 origin-left rotate-[-45deg] bg-[#B89A63]/75" />

            {/* Project Image */}
            <div className="absolute bottom-0 left-20 right-0 top-10 overflow-hidden">
              <Image
                src={image}
                alt={`${title} project`}
                fill
                sizes="(max-width: 639px) 65vw, (max-width: 1023px) 50vw, 40vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </motion.div>

        {/* RIGHT TOP: Title */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="min-w-0 md:pl-0 lg:pl-0"
        >
          <h2 className="text-2xl font-light uppercase leading-none tracking-[0.06em] md:text-3xl lg:text-4xl">
            {title}
          </h2>
        </motion.div>

        {/* RIGHT BOTTOM: Description and Details */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            delay: 0.12,
            ease: "easeOut",
          }}
          className="flex min-w-0 flex-col justify-between gap-8 md:pl-0 md:pr-8 md:pt-2 lg:pl-0 lg:pr-12 lg:pt-3"
        >
          <p className="max-w-[360px] whitespace-pre-line text-[11px] font-light leading-[1.7] text-white/70 md:text-xs lg:text-[13px]">
            {description}
          </p>

          <ul className="w-full">
            <Detail label="YEAR" value={year} />
            <Detail label="LOCATION" value={location} />
            <Detail label="SQUARE METERS" value={area} />
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function Detail({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <li className="flex items-center justify-between gap-4 border-t border-white/15 py-3 md:py-4">
      <span className="text-[9px] tracking-[0.15em] text-white/40 md:text-[10px]">
        {label}
      </span>

      <span className="text-[10px] font-light tracking-[0.05em] text-white/80 md:text-xs">
        {value}
      </span>
    </li>
  );
}
