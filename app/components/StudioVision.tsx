"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function StudioVision() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // تصویر از حالت چرخیده به حالت صاف می‌رسد
  const rotate = useTransform(scrollYProgress, [0, 0.45], [90, 0]);

  // کمی حرکت عمودی برای طبیعی‌تر شدن انیمیشن
  const y = useTransform(scrollYProgress, [0, 0.5], [80, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 overflow-hidden px-5 py-28 md:px-10 md:py-40"
    >
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-20 md:grid-cols-2 md:gap-24">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="order-2 md:order-1"
        >
          <p className="mb-8 text-[11px] uppercase tracking-[0.35em] text-[#c9a46a]/70">
            Philosophy
          </p>

          <h2 className="max-w-[520px] text-4xl font-light leading-[1.15] tracking-[-0.03em] text-white md:text-5xl lg:text-6xl">
            10 years experience
            <br />
            <span className="text-white/45">
              in combination with
            </span>
            <br />
            a distinct vision
          </h2>

          <div className="mt-12 max-w-[500px] space-y-6 text-sm font-light leading-7 text-white/55 md:text-[15px]">
            <p>
              Our approach goes beyond creating beautiful spaces.
              We design environments that reflect the character,
              lifestyle, and aspirations of the people who inhabit them.
            </p>

            <p>
              We believe architecture is not only about form and function.
              It is about creating a meaningful relationship between people
              and the spaces around them.
            </p>

            <p>
              Every project begins with understanding — the context,
              the individual, and the way a space is meant to be experienced.
            </p>

            <p>
              At Arman Vaziri Studio, design is a process of discovering
              balance between material, light, proportion, and human experience.
            </p>
          </div>
        </motion.div>

        {/* IMAGE */}
        <div className="order-1 flex justify-center md:order-2 md:justify-end">
          <motion.div
  style={{
    rotate,
    y,
  }}
  className="relative w-[78%] max-w-[420px] md:w-[85%]"
>
  {/* GOLD DIAGONAL LINE */}
  <div className="pointer-events-none absolute bottom-[280px] -left-[65%] z-0 h-px w-[230%] rotate-[-40deg] bg-[#c9a46a]/70" />

  {/* IMAGE */}
  <div className="relative z-10 aspect-[3/4] overflow-hidden">
    <Image
      src="/images/arman.jpg"
      alt="Arman Vaziri Studio"
      fill
      sizes="(max-width: 768px) 80vw, 420px"
      className="object-cover"
    />
  </div>
</motion.div>
        </div>

      </div>
    </section>
  );
}