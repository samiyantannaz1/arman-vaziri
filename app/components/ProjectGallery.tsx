
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import type {
  GalleryBlock,
  GalleryImage as GalleryImageType,
} from "@/app/data/projectItem/types";

interface ProjectGalleryProps {
  gallery: GalleryBlock[];
  projectSlug: string;
}


function getImageSrc(projectSlug: string, imageName: string) {
  // Existing projects — keep their current paths
  const projectFolders: Record<string, string> = {
    "bloome-hose": "project1",
    "ethra-restaurant": "project2",
    "aequor-villa": "project4",
    "dusky-rose": "project3",
    "birds-island": "project5",
    "the-art-of-living": "project6",
    "creen-towers": "project7",
    "quiet-dimension": "project8",
    "velora-residence": "project9",
    "human-form-space": "project10",
    "aurelia-terraces": "project11",
    "centered-living": "project12",
    "silterra-villa": "project13",
    "inner-balance": "project14",
    "ember-house": "project15",
    "echoes-of-earth": "project16",
    "oasis-line": "project17",
    "symphony-of-space": "project18",
    "aria-residence": "project19",
    "stone-light": "project20",
    "pool-oasis": "project21",
  };

  // New apartment projects — actual image folder names
  const apartmentFolders: Record<string, string> = {
    "aesthetic-abode": "aesthetic-abode",
    "aesthetic-pleasure": "aesthetic-peleasure",
    "bohemian-chic": "bohemian-chic",
    "levitating-beauty-for": "levitating-beauty-for",
    "luxe-living-concepts": "luxe-living-consepts",
    "velvet-vibe": "velvet-vibe",
  };

  if (apartmentFolders[projectSlug]) {
    return `/images/projects/apartments/${apartmentFolders[projectSlug]}/${imageName}.png`;
  }

  if (projectFolders[projectSlug]) {
    return `/images/projects/${projectSlug}/${projectFolders[projectSlug]}/${imageName}.png`;
  }

  return `/images/projects/${projectSlug}/${imageName}.png`;
}


export default function ProjectGallery({
  gallery,
  projectSlug,
}: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const allImages = gallery.flatMap((block) =>
    getColumns(block.images).flat()
  );

  const openImage = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    const imageElement = target.closest("img");

    if (!imageElement) return;

    const index = allImages.findIndex(
      (image) => image.name === imageElement.alt
    );

    if (index !== -1) {
      setIsZoomed(false);
      setActiveIndex(index);
    }
  };

  const closeGallery = () => {
    setActiveIndex(null);
    setIsZoomed(false);
  };

  const showPrevious = () => {
    setIsZoomed(false);

    setActiveIndex((current) =>
      current === null
        ? null
        : (current - 1 + allImages.length) % allImages.length
    );
  };

  const showNext = () => {
    setIsZoomed(false);

    setActiveIndex((current) =>
      current === null
        ? null
        : (current + 1) % allImages.length
    );
  };

  useEffect(() => {
    if (activeIndex === null) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeGallery();
      }

      if (event.key === "ArrowLeft") {
        setIsZoomed(false);
        setActiveIndex((current) =>
          current === null
            ? null
            : (current - 1 + allImages.length) % allImages.length
        );
      }

      if (event.key === "ArrowRight") {
        setIsZoomed(false);
        setActiveIndex((current) =>
          current === null
            ? null
            : (current + 1) % allImages.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeIndex, allImages.length]);

  return (
    <>
      <section
        onClick={openImage}
        className="bg-[#0d0d0d] px-6 py-24 md:px-10 lg:px-16"
      >
        <div className="mx-auto max-w-[1050px]">
          <div className="mb-16">
            <span className="text-xs tracking-[0.35em] text-white/40">
              GALLERY
            </span>
          </div>

          <div className="space-y-5">
            {gallery.map((block, index) => (
              <GalleryBlockView
                key={index}
                block={block}
                projectSlug={projectSlug}
              />
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {activeIndex !== null && allImages[activeIndex] && (
          <motion.div
            key="gallery-lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={closeGallery}
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#080808]/95 p-4 sm:p-8"
            role="dialog"
            aria-modal="true"
            aria-label="Project image gallery"
          >
            <button
              type="button"
              onClick={(event) => {
                event.stopPropagation();
                closeGallery();
              }}
              aria-label="Close gallery"
              className="absolute right-5 top-5 z-30 flex h-11 w-11 items-center justify-center border border-white/20 text-2xl text-white transition-colors hover:border-[#B89A63] hover:text-[#B89A63]"
            >
              ×
            </button>

            {allImages.length > 1 && (
              <button
                type="button"
                aria-label="Previous image"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
                className="absolute left-3 z-30 flex h-12 w-12 items-center justify-center border border-white/20 bg-black/50 text-white transition-colors hover:border-[#B89A63] hover:text-[#B89A63] sm:left-8 sm:h-14 sm:w-14"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path
                    d="M15 4L7 12L15 20"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </button>
            )}

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              onClick={(event) => event.stopPropagation()}
              className="relative h-[75vh] w-full max-w-6xl"
            >
              <Image
                src={getImageSrc(
                  projectSlug,
                  allImages[activeIndex].name
                )}
                alt={allImages[activeIndex].name}
                fill
                priority
                sizes="100vw"
                onClick={(event) => {
                  event.stopPropagation();
                  setIsZoomed((previous) => !previous);
                }}
                className={`object-contain transition-transform duration-500 ease-in-out ${
                  isZoomed
                    ? "scale-[2] cursor-zoom-out"
                    : "scale-100 cursor-zoom-in"
                }`}
              />
            </motion.div>

            {allImages.length > 1 && (
              <button
                type="button"
                aria-label="Next image"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
                className="absolute right-3 z-30 flex h-12 w-12 items-center justify-center border border-white/20 bg-black/50 text-white transition-colors hover:border-[#B89A63] hover:text-[#B89A63] sm:right-8 sm:h-14 sm:w-14"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-7 w-7"
                  aria-hidden="true"
                >
                  <path
                    d="M9 4L17 12L9 20"
                    stroke="currentColor"
                    strokeWidth="1.2"
                  />
                </svg>
              </button>
            )}

            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] tracking-[0.2em] text-white/40">
              {isZoomed
                ? "CLICK IMAGE TO ZOOM OUT"
                : "CLICK IMAGE TO ZOOM IN"}
            </div>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-xs tracking-[0.25em] text-white/60">
              {String(activeIndex + 1).padStart(2, "0")} /{" "}
              {String(allImages.length).padStart(2, "0")}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function GalleryBlockView({
  block,
  projectSlug,
}: {
  block: GalleryBlock;
  projectSlug: string;
}) {
  const columns = getColumns(block.images);
  const gap = 16;

  if (columns.length === 1) {
    return (
      <GalleryImage
        image={columns[0][0]}
        projectSlug={projectSlug}
        className="w-full"
      />
    );
  }

  const isTwoSingleImages =
    columns.length === 2 &&
    columns[0].length === 1 &&
    columns[1].length === 1;

  if (isTwoSingleImages) {
    const left = columns[0][0];
    const right = columns[1][0];
    
if (
  projectSlug === "levitating-beauty-for" &&
  left.name === "e-1" &&
  right.name === "e-2"
) {
  return (
    <div
      className="grid items-stretch"
      style={{
        gridTemplateColumns: "1fr 1fr",
        gap,
      }}
    >
      <GalleryImage
        image={left}
        projectSlug={projectSlug}
        className="h-full w-full"
        imageClassName="h-full w-full object-fill"
      />

      <GalleryImage
        image={right}
        projectSlug={projectSlug}
        className="h-full w-full"
        imageClassName="h-full w-full object-fill"
      />
    </div>
  );
}


    return (
    

      <div
  className="grid items-start"
  style={{
    gridTemplateColumns: `${left.width / left.height}fr ${
      right.width / right.height
    }fr`,
    gap,
  }}
>
        <GalleryImage
          image={left}
          projectSlug={projectSlug}
          className="w-full"
        />

        <GalleryImage
          image={right}
          projectSlug={projectSlug}
          className="w-full"
        />
      </div>
    );
  }

  const isThreeImageLayout =
    columns.length === 2 &&
    columns.some((column) => column.length === 1) &&
    columns.some((column) => column.length === 2);

  if (isThreeImageLayout) {
    const singleColumn = columns.find(
      (column) => column.length === 1
    )!;

    const stackedColumn = columns.find(
      (column) => column.length === 2
    )!;

    const singleImage = singleColumn[0];
    
    const topImage = stackedColumn[0];
    const bottomImage = stackedColumn[1];
    
if (
  projectSlug === "levitating-beauty-for" &&
  singleImage.name === "c-1"
) {
  return (
    <div
      className="grid items-stretch"
      style={{
        gridTemplateColumns: "0.60fr 1fr",
        gap,
      }}
    >
      <GalleryImage
        image={singleImage}
        projectSlug={projectSlug}
        className="h-full w-full"
        imageClassName="h-full w-full object-fill"
      />

      <div className="flex flex-col" style={{ gap }}>
        <GalleryImage
          image={topImage}
          projectSlug={projectSlug}
          className="w-full"
        />

        <GalleryImage
          image={bottomImage}
          projectSlug={projectSlug}
          className="w-full"
        />
      </div>
    </div>
  );
}


 if (
  projectSlug === "aesthetic-pleasure" &&
  singleImage.name === "b-1"
) {
  return (
    <div
      className="grid items-stretch"
      style={{
        gridTemplateColumns: "0.60fr 1fr",
        gap,
      }}
    >
      <GalleryImage
        image={singleImage}
        projectSlug={projectSlug}
        className="h-full w-full"
        imageClassName="h-full w-full object-fill"
      />

      <div className="flex flex-col" style={{ gap }}>
        <GalleryImage
          image={topImage}
          projectSlug={projectSlug}
          className="w-full"
        />

        <GalleryImage
          image={bottomImage}
          projectSlug={projectSlug}
          className="w-full"
        />
      </div>
    </div>
  );
} 


if (
  projectSlug === "birds-island" &&
  singleImage.name === "b-1"
) {
  return (
    <div
      className="grid items-stretch"
      style={{
        gridTemplateColumns: "0.70fr 1fr",
        gap,
      }}
    >
      <GalleryImage
        image={singleImage}
        projectSlug={projectSlug}
        className="h-full w-full"
        imageClassName="h-full w-full object-fill"
      />

      <div className="flex flex-col" style={{ gap }}>
        <GalleryImage
          image={topImage}
          projectSlug={projectSlug}
          className="w-full"
        />

        <GalleryImage
          image={bottomImage}
          projectSlug={projectSlug}
          className="w-full"
        />
      </div>
    </div>
  );
}



    return (
      <div
        className="grid items-stretch"
        style={{
          gridTemplateColumns: "1fr 1fr",
          gap,
        }}
      >
        <GalleryImage
          image={singleImage}
          projectSlug={projectSlug}
          className="h-full w-full"
          imageClassName="h-full w-full object-fill"
        />

        <div className="flex flex-col" style={{ gap }}>
          <GalleryImage
            image={topImage}
            projectSlug={projectSlug}
            className="w-full"
          />

          <GalleryImage
            image={bottomImage}
            projectSlug={projectSlug}
            className="w-full"
          />
        </div>
      </div>
    );
  }

  const ratios = columns.map((column) =>
    column.reduce(
      (sum, image) => sum + image.height / image.width,
      0
    )
  );

  const totalRatio = ratios.reduce(
    (sum, ratio) => sum + 1 / ratio,
    0
  );

  const availableWidth = 100 - (gap / 1150) * 100;

  const widths = ratios.map(
    (ratio) => ((1 / ratio) / totalRatio) * availableWidth
  );

  return (
    <div className="flex items-start" style={{ gap }}>
      {columns.map((column, columnIndex) => (
        <div
          key={columnIndex}
          className="flex flex-col"
          style={{
            width: `${widths[columnIndex]}%`,
            gap,
          }}
        >
          {column.map((image) => (
            <GalleryImage
              key={image.name}
              image={image}
              projectSlug={projectSlug}
              className="w-full"
            />
          ))}
        </div>
      ))}
    </div>
  );
}

function getColumns(images: GalleryImageType[]) {
  const columns: GalleryImageType[][] = [];

  images.forEach((image) => {
    if (!columns[image.col - 1]) {
      columns[image.col - 1] = [];
    }

    columns[image.col - 1].push(image);
  });

  columns.forEach((column) => {
    column.sort((a, b) => a.row - b.row);
  });

  return columns;
}

function GalleryImage({
  image,
  projectSlug,
  className,
  imageClassName,
}: {
  image: GalleryImageType;
  projectSlug: string;
  className?: string;
  imageClassName?: string;
}) {
  const imageSrc = getImageSrc(projectSlug, image.name);

  return (
    <div
      className={`group relative cursor-zoom-in overflow-hidden ${
        className ?? ""
      }`}
    >
      <Image
        src={imageSrc}
        alt={image.name}
        width={image.width}
        height={image.height}
        sizes="(max-width: 768px) 100vw, 1150px"
        className={`block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.08] ${
          imageClassName ?? ""
        }`}
      />
    </div>
  );
}

