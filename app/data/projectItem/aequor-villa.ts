import type { ProjectDetail } from "./types";

const aequorVilla: ProjectDetail = {
  title: "Aequor Villa",
  slug: "aequor-villa",
  location: "UAE",
  year: "2026",
  area: "2800 M2",

  description:
    "A contemporary villa defined by refined architectural forms, balanced proportions, and a carefully curated visual identity.",

  hero: "/images/projects/aequor-villa/project4/hero.png",
  disc: "/images/projects/aequor-villa/project4/disc.png",

  gallery: [
    {
      images: [
        {
          name: "a-1",
          col: 1,
          row: 1,
          width: 639,
          height: 908,
        },
      ],
    },
    {
      images: [
        {
          name: "a-2-a",
          col: 1,
          row: 1,
          width: 631,
          height: 899,
        },
        {
          name: "a-2-b",
          col: 2,
          row: 1,
          width: 639,
          height: 902,
        },
      ],
    },
    {
      images: [
        {
          name: "a-3-a",
          col: 1,
          row: 1,
          width: 631,
          height: 905,
        },
        {
          name: "a-3-b",
          col: 2,
          row: 1,
          width: 625,
          height: 906,
        },
      ],
    },
    {
      images: [
        {
          name: "b-1",
          col: 1,
          row: 1,
          width: 631,
          height: 908,
        },
        {
          name: "b-2",
          col: 2,
          row: 1,
          width: 629,
          height: 899,
        },
      ],
    },
  ],
};

export default aequorVilla;
