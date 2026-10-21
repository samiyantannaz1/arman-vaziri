export interface Project {
  title: string;
  location: string;
  year: string;
  slug: string;
  layout: "gallery-1" | "gallery-2" | "gallery-3";
  homeImages: string[];
}

export const projects: Project[] = [
  {
    title: "Tempo House",
    location: "UAE",
    year: "2024",
    slug: "tempo-house",
    layout: "gallery-1",
    homeImages: [
      "/images/projects/tempo-house/home-1.png",
      "/images/projects/tempo-house/home-2.png",
    ],
  },

  {
    title: "Noir Nest",
    location: "USA",
    year: "2025",
    slug: "noir-nest",
    layout: "gallery-2",
    homeImages: [
      "/images/projects/noir-nest/home-1.png",
    ],
  },

  {
    title: "Opal Vista",
    location: "USA",
    year: "2025",
    slug: "opal-vista",
    layout: "gallery-1",
    homeImages: [
      "/images/projects/opal-vista/home-1.png",
      "/images/projects/opal-vista/home-2.png",
    ],
  },

  {
    title: "Velvet Earth",
    location: "UAE",
    year: "2025",
    slug: "velvet-earth",
    layout: "gallery-2",
    homeImages: [
      "/images/projects/velvet-earth/home-1.png",
    ],
  },

  {
    title: "Tranquil Lux",
    location: "USA",
    year: "2024",
    slug: "tranquil-lux",
    layout: "gallery-3",
    homeImages: [
      "/images/projects/tranquil-lux/home-1.png",
      "/images/projects/tranquil-lux/home-2.png",
    ],
  },

  {
    title: "Bitter Villa",
    location: "USA",
    year: "2024",
    slug: "bitter-villa",
    layout: "gallery-1",
    homeImages: [
      "/images/projects/bitter-villa/home-1.png",
      "/images/projects/bitter-villa/home-2.png",
    ],
  },

  {
    title: "Bold Fusion",
    location: "Jordan",
    year: "2024",
    slug: "bold-fusion",
    layout: "gallery-2",
    homeImages: [
      "/images/projects/bold-fusion/home-1.png",
    ],
  },

  {
    title: "Noir Horizon",
    location: "UAE",
    year: "2024",
    slug: "noir-horizon",
    layout: "gallery-3",
    homeImages: [
      "/images/projects/noir-horizon/home-1.png",
      "/images/projects/noir-horizon/home-2.png",
    ],
  },
];