"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface ProjectHeroProps {
  hero: string;
  title: string;
  location: string;
  year: string;
  area: string;
}

export default function ProjectHero({
  hero,
  title,
  location,
  year,
  area,
}: ProjectHeroProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 150);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className={`project-hero ${
        visible ? "project-hero-visible" : ""
      }`}
    >
      {/* Top half */}
      <div className="project-hero-half project-hero-top">
        <Image
          src={hero}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Bottom half */}
      <div className="project-hero-half project-hero-bottom">
        <Image
          src={hero}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Initial black screen */}
      <div className="project-hero-intro">
        <span>ARMAN VAZIRI</span>
      </div>

      {/* Project information */}
   {/* Project information */}
<div className="project-hero-info">
  <span className="project-hero-label">PROJECT</span>

  <h1 className="project-hero-title">
    {title.split(" ").length > 1 ? (
      <>
        <span className="project-hero-title-bold">
          {title.split(" ")[0]}
        </span>

        <span className="project-hero-title-light">
          {title.split(" ").slice(1).join(" ")}
        </span>
      </>
    ) : (
      <span className="project-hero-title-bold">{title}</span>
    )}
  </h1>

<div className="project-hero-meta">
  <ul>
    <li>  <span>{location} / {area}</span></li>
    <li> <span>{year}</span></li>
  </ul>
  
</div>
</div>
    </section>
  );
}