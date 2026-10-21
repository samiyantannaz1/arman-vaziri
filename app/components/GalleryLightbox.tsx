
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface GalleryLightboxProps {
  images: string[];
  alt?: string;
}

export default function GalleryLightbox({
  images,
  alt = "Project gallery",
}: GalleryLightboxProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isOpen = activeIndex !== null;
  const hasImages = images.length > 0;

  const showPrevious = () => {
    if (activeIndex === null || !hasImages) return;

    setActiveIndex(
      (activeIndex - 1 + images.length) % images.length
    );
  };

  const showNext = () => {
    if (activeIndex === null || !hasImages) return;

    setActiveIndex((activeIndex + 1) % images.length);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveIndex(null);
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, activeIndex, images.length]);

  if (!hasImages) return null;

  return (
    <>
      {/* Gallery grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => (
          <motion.button
            key={`${src}-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            whileHover={{ scale: 1.035 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="group relative aspect-[4/3] w-full overflow-hidden bg-white/5 text-left"
            aria-label={`Open image ${index + 1}`}
          >
            <Image
              src={src}
              alt={`${alt} ${index + 1}`}
              fill
              sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/15" />

            <span className="absolute bottom-3 right-3 text-xs tracking-widest text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              {String(index + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </span>
          </motion.button>
        ))}
      </div>

      {/* Fullscreen lightbox */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            key="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#080808]/95 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Image gallery"
            onClick={() => setActiveIndex(null)}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setActiveIndex(null)}
              aria-label="Close gallery"
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center border border-white/20 text-white transition-colors hover:border-[#B89A63] hover:text-[#B89A63]"
            >
              <X size={22} />
            </button>

            {/* Previous */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                aria-label="Previous image"
                className="absolute left-3 z-20 flex h-11 w-11 items-center justify-center border border-white/20 bg-black/30 text-white transition-colors hover:border-[#B89A63] hover:text-[#B89A63] sm:left-8 sm:h-14 sm:w-14"
              >
                <ChevronLeft size={28} strokeWidth={1.2} />
              </button>
            )}

            {/* Large image */}
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="relative h-[75vh] w-full max-w-6xl"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={images[activeIndex]}
                alt={`${alt} ${activeIndex + 1}`}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </motion.div>

            {/* Next */}
            {images.length > 1 && (
              <button
                type="button"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                aria-label="Next image"
                className="absolute right-3 z-20 flex h-11 w-11 items-center justify-center border border-white/20 bg-black/30 text-white transition-colors hover:border-[#B89A63] hover:text-[#B89A63] sm:right-8 sm:h-14 sm:w-14"
              >
                <ChevronRight size={28} strokeWidth={1.2} />
              </button>
            )}

            {/* Image counter */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs tracking-[0.25em] text-white/60">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(images.length).padStart(2, "0")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
