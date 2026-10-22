
"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type ServiceItemProps = {
  number: string;
  title: string;
  image: string;
  description: string;
  imagePosition: "left" | "right";
};

const smoothEase = [0.16, 1, 0.3, 1] as const;

export default function ServiceItem({
  number,
  title,
  image,
  description,
  imagePosition,
}: ServiceItemProps) {
  const imageOnLeft = imagePosition === "left";

  return (
    <motion.article
      initial={{ opacity: 0, y: 55 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 1.5,
        ease: smoothEase,
      }}
      className="group relative border border-white/15 px-5 py-3 transition-colors duration-500 hover:border-[#b49a6c]/60 md:px-8 md:py-1"
    >
      <div
        className={`grid items-center gap-7 md:grid-cols-2 md:gap-10 ${
          imageOnLeft ? "" : "md:[&>div:first-child]:order-2"
        }`}
      >
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.4,
            delay: 0.15,
            ease: smoothEase,
          }}
          className="relative z-10"
        >
          <div className="relative aspect-[4/3] translate-y-3 overflow-hidden md:translate-y-15">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
            />
          </div>
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 1.3,
            delay: 0.25,
            ease: smoothEase,
          }}
          className="flex flex-col justify-center py-3 md:py-5"
        >
          <span className="mb-4 text-xs tracking-[0.3em] text-white/45 transition-colors duration-500 group-hover:text-[#b49a6c]">
            {number}
          </span>

          <h2 className="mb-4 text-xl font-light tracking-[0.08em] text-white transition-colors duration-500 group-hover:text-[#b49a6c] md:text-2xl">
            {title}
          </h2>

          <p className="max-w-xl text-sm leading-7 text-white/65 transition-colors duration-500 group-hover:text-white/85 md:leading-8">
            {description}
          </p>
        </motion.div>
      </div>
    </motion.article>
  );
}
