



"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { projects } from "../data/Projects";
import BorderDrawButton from "./BorderDrawButton";
import ProjectItem from "./ProjectItem";
import ProjectsMarquee from "@/app/projects/ProjectsMarquee";

export default function Projects() {
  const { scrollYProgress } = useScroll();

  /*
   * پس از ورود به بخش پروژه‌ها،
   * بک‌گراند از شفاف به مشکی عمیق می‌رود.
   */
  const backgroundOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.14, 0.22],
    [0, 0.55, 1]
  );

  /*
   * نور طلایی با اسکرول حرکت می‌کند.
   */
  const goldX = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["45%", "65%", "35%", "70%", "50%"]
  );

  const goldY = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["105%", "80%", "65%", "85%", "60%"]
  );

  const goldScale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.45, 0.7, 1],
    [0.7, 1, 0.85, 1.1, 0.9]
  );

  const goldOpacity = useTransform(
    scrollYProgress,
    [0.08, 0.16, 0.3, 0.7, 1],
    [0, 0.55, 0.7, 0.48, 0.6]
  );

  return (
    <section
      id="projects"
      className="projects-section relative overflow-hidden bg-transparent text-white"
    >
      {/* BLACK BACKGROUND */}

      <motion.div
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          opacity: backgroundOpacity,
          backgroundColor: "#1c1c1c",
        }}
      />

      {/* GOLDEN AMBIENT LIGHT */}

      <motion.div
        className="pointer-events-none fixed z-[1] h-[55vw] w-[55vw] max-h-[750px] max-w-[750px] rounded-full"
        style={{
          left: goldX,
          top: goldY,
          x: "-50%",
          y: "-50%",
          scale: goldScale,
          opacity: goldOpacity,
          background:
            "radial-gradient(circle, rgba(201,164,106,0.30) 0%, rgba(201,164,106,0.12) 30%, rgba(201,164,106,0.035) 55%, transparent 72%)",
          filter: "blur(45px)",
        }}
      />

      {/* DIAGONAL GOLD LINES */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -left-[30%] top-[8%] h-px w-[160%] rotate-[32deg] bg-[#c9a46a]/45" />
        <div className="absolute -left-[30%] top-[31%] h-px w-[160%] rotate-[32deg] bg-[#c9a46a]/35" />
        <div className="absolute -left-[30%] top-[54%] h-px w-[160%] rotate-[32deg] bg-[#c9a46a]/45" />
        <div className="absolute -left-[30%] top-[77%] h-px w-[160%] rotate-[32deg] bg-[#c9a46a]/35" />
      </div>

      {/* PROJECTS MARQUEE */}

      <div className="relative z-10">
  
      </div>

      {/* SECTION INTRO */}

      <div className="relative z-10 px-5 pb-10 pt-20 md:px-10 md:pb-20 md:pt-32">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex items-end justify-between"
        >
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-white/40">
              Selected work
            </p>

        
        <h2 className="text-[clamp(1.2rem,3.5vw,3.5rem)] font-light uppercase leading-[0.9] tracking-[-0.05em] mx-[100px]">
        Projects
            </h2>
          </div>

          <span className="hidden pb-2 text-[10px] uppercase tracking-[0.3em] text-white/40 md:block">
            01 — 08
          </span>
        </motion.div>
      </div>

      {/* PROJECTS */}

 {/* PROJECTS */}
{/* PROJECTS */}
<div className="relative z-10">
  {projects.map((project, index) => (
    <div key={project.slug}>
      <ProjectItem project={project} index={index} />

      {(index + 1) % 2 === 0 &&
        index < projects.length - 1 && (
          <div className="relative z-0 my-12 md:my-20">
            <ProjectsMarquee />
          </div>
        )}
    </div>
  ))}
</div>
      {/* MORE PROJECTS */}

      <div className="relative z-10 flex justify-center px-5 pb-32 pt-10 md:pb-48">
        <BorderDrawButton href="/projects">
          More projects
        </BorderDrawButton>
      </div>
    </section>
  );
}
