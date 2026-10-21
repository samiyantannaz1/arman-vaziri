
"use client";

import { motion } from "framer-motion";

export default function Philosophy() {
  return (
  <div className="relative z-10 mx-auto mb-20 max-w-[1200px] px-5 md:px-10">

      {/* First line */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 1,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="overflow-hidden"
      >
        <p className="text-[clamp(1.6rem,3.5vw,3.4rem)] font-light leading-[0.95] tracking-[-0.04em] text-white/90">
          We are in favor of
        </p>
      </motion.div>

      {/* Second line */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 1,
          delay: 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="overflow-hidden text-right"
      >
        <p className="text-[clamp(1.6rem,3.5vw,3.4rem)] font-light italic leading-[0.95] tracking-[-0.04em] text-[#c9a46a]">
          aesthetics in details
        </p>
      </motion.div>

      {/* Third line */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{
          duration: 1,
          delay: 0.24,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="mt-3 overflow-hidden"
      >
        <p className="text-[clamp(1.35rem,2.8vw,2.7rem)] font-light leading-[1] tracking-[-0.035em] text-white/65">
          Design, that is inspired by nature
        </p>
      </motion.div>
         {/* Bottom Line */}

    </div>
  );
}

