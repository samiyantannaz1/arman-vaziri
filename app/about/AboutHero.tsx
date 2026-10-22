
"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutHero() {
  const shouldReduceMotion = useReducedMotion();

  const duration = shouldReduceMotion ? 0 : 1.2;

  const reveal = {
    hidden: {
      opacity: 0,
      y: shouldReduceMotion ? 0 : 45,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
  };

  return (
    <section className="px-6 pb-20 pt-40 md:px-12 lg:px-20">
      {/* Breadcrumb */}
      <div className="mb-8 flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/45">
        <span>Home</span>
        <span>/</span>
        <span>About</span>
      </div>

      {/* Main title */}
      <motion.h1
        initial="hidden"
        animate="visible"
        variants={reveal}
        transition={{
          delay:7,
          duration,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="text-[clamp(26px,3.5vw,52px)] font-light uppercase leading-[1.05] tracking-[-0.035em]"
      >
        About
        <br />
        <span className="text-white/40">Arman Vaziri</span>
      </motion.h1>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
        {/* Animated image */}
        <motion.div
          initial={{
            opacity: 0,
            y: shouldReduceMotion ? 0 : 60,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration,
            delay: 2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="group relative aspect-[4/5] w-full max-w-[520px] overflow-hidden bg-[#171717]"
        >
          <motion.div
            initial={{
              scale: shouldReduceMotion ? 1 : 1.12,
            }}
            animate={{ scale: 1 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 1.8,
              delay: 3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <Image
              src="/images/arman.jpg"
              alt="Architecture by Arman Vaziri"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </motion.div>

          {/* Dark overlay */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: `
                linear-gradient(
                  to right,
                  rgba(0, 0, 0, 0.75) 0%,
                  rgba(0, 0, 0, 0.3) 25%,
                  transparent 50%,
                  rgba(0, 0, 0, 0.3) 75%,
                  rgba(0, 0, 0, 0.75) 100%
                ),
                rgba(0, 0, 0, 0.25)
              `,
            }}
          />
        </motion.div>

        {/* Animated text */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                delayChildren: 3,
                staggerChildren: 0.45,
              },
            },
          }}
      className="flex flex-col justify-center py-4 md:py-12 -translate-y-6"
        >
          <motion.span
            variants={reveal}
            className="mb-8 text-xs uppercase tracking-[0.3em] text-white/40"
          >
            Architecture & Interior Design
          </motion.span>

          <motion.h2
            variants={reveal}
            className="max-w-xl text-3xl font-light leading-[1.25] tracking-tight md:text-5xl"
          >
            Spaces shaped by
            <span className="text-white/40">
              {" "}form, material and light.
            </span>
          </motion.h2>

          <motion.div
            variants={reveal}
            className="mt-8 max-w-md space-y-5 text-sm font-light leading-7 text-white/55 md:text-base"
          >
            <p>
              Arman Vaziri explores architecture and interior design through
              thoughtful forms, carefully selected materials, and a considered
              relationship between light and space.
            </p>

            <p>
              Each project is approached with attention to detail, spatial
              balance, and the character of the place.
            </p>
          </motion.div>

          <motion.div
            variants={reveal}
            className="mt-12 border-t border-white/15 pt-5"
          >
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/40">
              Personal Approach
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
