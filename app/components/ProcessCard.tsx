"use client";

import { motion } from "framer-motion";


interface ProcessCardProps {
  number: string;
  title: string;
  description: string;
}

export default function ProcessCard({
  number,
  title,
  description,
}: ProcessCardProps) {
  return (
    <>
   

      <motion.article
      whileHover="hover"
      className="group relative z-10 mx-auto w-full max-w-[320px]"
    >
      <div className="relative min-h-[280px] border border-white/[0.08] bg-white/[0.025] px-6 py-7 md:min-h-[320px] md:px-7 md:py-8">

        {/* Header */}
        <div className="flex items-start justify-between">
          
          {/* Title */}
          <motion.h3
            variants={{
              hover: {
                x: 4,
              },
            }}
            transition={{
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[1.2rem] font-light text-white/90 md:text-[1.5rem]"
          >
            {title}
          </motion.h3>

          {/* Number */}
          <motion.div
            variants={{
              hover: {
                y: -2,
                opacity: 0.55,
              },
            }}
            transition={{
              duration: 0.5,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="text-[1.3rem] font-extralight italic leading-none tracking-[-0.08em] text-[#c9a46a]/35 md:text-[1.8rem]"
          >
            {number}
          </motion.div>

        </div>

        {/* Description */}
        <div className="mt-24 md:mt-28">
          <p className="max-w-[250px] text-[13px] leading-[1.8] tracking-[0.02em] text-white/45 md:text-[15px]">
            {description}
          </p>
        </div>

      </div>
    </motion.article>
    </>
  
  
  );
}