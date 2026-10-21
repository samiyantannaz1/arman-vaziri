"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function GoldenGlow() {
  const { scrollYProgress } = useScroll();

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
  );
}