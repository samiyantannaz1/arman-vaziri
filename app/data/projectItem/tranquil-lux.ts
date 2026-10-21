import type { ProjectDetail } from "./types";

const tranquilLux: ProjectDetail = {
  title: "Tranquil Lux",
    slug: "tranquil-lux",
  location: "USA",
  year: "2024",
  area: "400 M2",

  description:
    "Tranquil Lux is an interior design project that exudes a sense of serenity and refined elegance. Set in a modern, spacious living area, this design focuses on creating a harmonious blend of natural elements and contemporary luxury.",

  hero: "/images/projects/tranquil-lux/hero.png",
  disc: "/images/projects/tranquil-lux/disc.png",

gallery: [
  {
    images: [
      {
        name: "a",
        col: 1,
        row: 1,
        width: 1287,
        height: 708,
      },
    ],
  },

  {
    images: [
      {
        name: "b-1",
        col: 1,
        row: 1,
        width: 503,
        height: 903,
      },
      {
        name: "b-2",
        col: 2,
        row: 1,
        width: 505,
        height: 902,
      },
    ],
  },

  {
    images: [
      {
        name: "c-1",
        col: 1,
        row: 1,
        width: 510,
        height: 892,
      },
      {
        name: "c-2",
        col: 2,
        row: 1,
        width: 496,
        height: 905,
      },
    ],
  },

  {
    images: [
      {
        name: "d",
        col: 1,
        row: 1,
        width: 1275,
        height: 706,
      },
    ],
  },
],
};

export default tranquilLux;