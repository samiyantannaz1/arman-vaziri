
"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ProjectsMarquee from "./ProjectsMarquee";
type ProjectCategory = "Villas" | "Apartments" | "Commercial";

interface ProjectItem {
  title: string;
  slug: string;
  category: ProjectCategory;
  cover: string;
}

const categories = [
  "All",
  "Villas",
  "Apartments",
  "Commercial",
] as const;

const projects: ProjectItem[] = [

{
  title: "BLOOME HOUSE",
  slug: "bloome-hose",
  category: "Villas",
  cover: "/images/projects/bloome-hose/project1/cover.png",
},

  {
    title: "ETHRA RESTAURANT",
    slug: "ethra-restaurant",
    category: "Commercial",
    cover:  "/images/projects/ethra-restaurant/project2/cover.png",
  },
  {
    title: "DUSKY ROSE",
    slug: "dusky-rose",
    category: "Villas",
    cover: "/images/projects/dusky-rose/project3/newcover.png" ,
  },

  {
  title: "AEQUOR VILLA",
  slug: "aequor-villa",
  category: "Villas",
  cover: "/images/projects/aequor-villa/project4/cover.png",
},
{
  title: "BIRDS ISLAND",
  slug: "birds-island",
  category: "Commercial",
  cover: "/images/projects/birds-island/project5/cover.png",
},
{
  title: "THE ART OF LIVING",
  slug: "the-art-of-living",
  category: "Villas",
  cover: "/images/projects/the-art-of-living/project6/cover.png",
},
{
  title: "CREEN TOWERS",
  slug: "creen-towers",
  category: "Commercial",
  cover: "/images/projects/creen-towers/project7/cover.png",
},
{
  title: "QUIET DIMENSION",
  slug: "quiet-dimension",
  category: "Villas",
  cover: "/images/projects/quiet-dimension/project8/cover.png",
},
{
  title: "VELORA RESIDENCE",
  slug: "velora-residence",
  category: "Villas",
  cover: "/images/projects/velora-residence/project9/cover.png",
},
{
  title: "HUMAN FORM SPACE",
  slug: "human-form-space",
  category: "Villas",
  cover: "/images/projects/human-form-space/project10/cover.png",
},
{
  title: "AURELIA TERRACES",
  slug: "aurelia-terraces",
  category: "Commercial",
  cover: "/images/projects/aurelia-terraces/project11/cover.png",
},
{
  title: "CENTERED LIVING",
  slug: "centered-living",
  category: "Villas",
  cover: "/images/projects/centered-living/project12/cover.png",
},
{
  title: "SILTERRA VILLA",
  slug: "silterra-villa",
  category: "Villas",
  cover: "/images/projects/silterra-villa/project13/cover.png",
},
{
  title: "INNER BALANCE",
  slug: "inner-balance",
  category: "Villas",
  cover: "/images/projects/inner-balance/project14/cover.png",
},
{
  title: "EMBER HOUSE",
  slug: "ember-house",
  category: "Villas",
  cover: "/images/projects/ember-house/project15/cover.png",
},
{
  title: "ECHOES OF EARTH",
  slug: "echoes-of-earth",
  category: "Villas",
  cover: "/images/projects/echoes-of-earth/project16/cover.png",
},
{
  title: "OASIS LINE",
  slug: "oasis-line",
  category: "Villas",
  cover: "/images/projects/oasis-line/project17/cover.png",
},
{
  title: "SYMPHONY OF SPACE",
  slug: "symphony-of-space",
  category: "Villas",
  cover: "/images/projects/symphony-of-space/project18/cover.png",
},
{
  title: "ARIA RESIDENCE",
  slug: "aria-residence",
  category: "Villas",
  cover: "/images/projects/aria-residence/project19/cover.png",
},
{
  title: "STONE LIGHT",
  slug: "stone-light",
  category: "Villas",
  cover: "/images/projects/stone-light/project20/cover.png",
},
{
  title: "POOL OASIS",
  slug: "pool-oasis",
  category: "Villas",
  cover: "/images/projects/pool-oasis/project21/cover.png",
},

  {
    title: "TEMPO HOUSE",
    slug: "tempo-house",
    category: "Villas",
    cover: "/images/projects/tempo-house/home-1.png",
  },
  {
    title: "NOIR NEST",
    slug: "noir-nest",
    category: "Villas",
    cover: "/images/projects/noir-nest/home-1.png",
  },
  {
    title: "OPAL VISTA",
    slug: "opal-vista",
    category: "Villas",
    cover: "/images/projects/opal-vista/home-1.png",
  },
  {
    title: "VELVET EARTH",
    slug: "velvet-earth",
    category: "Villas",
    cover: "/images/projects/velvet-earth/home-1.png",
  },
  {
    title: "TRANQUIL LUX",
    slug: "tranquil-lux",
    category: "Villas",
    cover: "/images/projects/tranquil-lux/home-1.png",
  },
  {
    title: "BITTER VILLA",
    slug: "bitter-villa",
    category: "Villas",
    cover: "/images/projects/bitter-villa/home-1.png",
  },
  {
    title: "BOLD FUSION",
    slug: "bold-fusion",
    category: "Villas",
    cover: "/images/projects/bold-fusion/home-1.png",
  },
  {
    title: "NOIR HORIZON",
    slug: "noir-horizon",
    category: "Villas",
    cover: "/images/projects/noir-horizon/home-1.png",
  },
  
  {
    title: "AESTHETIC ABODE",
    slug: "aesthetic-abode",
    category: "Apartments",
    cover: "/images/projects/apartments/aesthetic-abode/cover.png",
  },
  {
    title: "AESTHETIC PLEASURE",
    slug: "aesthetic-pleasure",
    category: "Apartments",
    cover: "/images/projects/apartments/aesthetic-peleasure/cover.png",
  },
  {
    title: "BOHEMIAN CHIC",
    slug: "bohemian-chic",
    category: "Apartments",
    cover: "/images/projects/apartments/bohemian-chic/cover.png",
  },
  {
    title: "LEVITATING BEAUTY FOR ANANTA DEVELOPMENTS",
    slug: "levitating-beauty-for",
    category: "Apartments",
    cover: "/images/projects/apartments/levitating-beauty-for/cover.png",
  },
  {
    title: "LUXE LIVING CONCEPTS",
    slug: "luxe-living-concepts",
    category: "Apartments",
    cover: "/images/projects/apartments/luxe-living-consepts/cover.png",
  },
  {
    title: "VELVET VIBE",
    slug: "velvet-vibe",
    category: "Apartments",
    cover: "/images/projects/apartments/velvet-vibe/cover.png",
  },




];

export default function Projects() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
  <main className="relative min-h-screen bg-[#1c1c1c] px-6 pb-24 pt-32 text-white md:px-10 lg:px-16">
      <div className="absolute left-0 top-0 h-px w-full bg-white/15" />
      <div className="mx-auto max-w-[1400px]">
          <div className="mb-10 h-px w-full bg-white/25 md:mb-14" />
        {/* Heading */}
       <div className="mb-8 text-center md:mb-10">
        <h1 className="text-xl font-light tracking-tight md:text-5xl lg:text-6xl">
  Our{" "}
  <span className="font-serif italic text-[#B89A63]">
    projects
  </span>
</h1>
        </div>

       

        {/* Category filters */}
     <div className="mb-8 flex flex-wrap justify-center gap-x-6 gap-y-3 pb-4 md:mb-12 md:gap-x-8">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`relative pb-2 text-sm transition-colors duration-300 md:text-base ${
                  isActive
                    ? "text-[#B89A63]"
                    : "text-white/55 hover:text-white"
                }`}
              >
                {category}

                {isActive && (
                  <span className="absolute bottom-[-21px] left-0 h-px w-full bg-[#B89A63]" />
                )}
              </button>
            );
          })}
        </div>
           <ProjectsMarquee />

        {/* Project grid */}
        <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#171717]">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  priority={index < 3}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 flex items-end bg-black/0 p-5 transition-colors duration-500 group-hover:bg-black/35 md:p-7">
                  <div className="translate-y-3 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                      {project.category}
                    </p>

                    <h2 className="mt-2 text-2xl font-light md:text-3xl">
                      {project.title}
                    </h2>
                  </div>
                </div>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <h2 className="text-sm font-light tracking-wide text-white/80 transition-colors group-hover:text-[#B89A63] md:text-base">
                  {project.title}
                </h2>

                <span className="text-white/40 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#B89A63]">
                  ↗
                </span>
              </div>
            </Link>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <p className="py-20 text-center text-white/50">
            No projects found in this category.
          </p>
        )}
      </div>
    </main>
  );
}
