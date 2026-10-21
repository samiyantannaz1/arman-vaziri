
import type { ProjectDetail } from "./types";

const bloomeHose: ProjectDetail = {
  title: "Bloom House",
  slug: "bloome-hose",
  location: "USA",
  year: "2026",
  area: "26,480 SQ FT",
  description:
    "Bloom House is a residential project that brings together contemporary design, thoughtful spatial planning, and a distinctive architectural identity.",
  hero: "/images/projects/bloome-hose/project1/hero.png",
  disc: "/images/projects/bloome-hose/project1/disc.png",

  gallery: [
    {
      images: [
        {
          name: "a",
          col: 1,
          row: 1,
          width: 1596,
          height: 905,
        },
      ],
    },
    {
      images: [
        {
          name: "b-1",
          col: 1,
          row: 1,
          width: 670,
          height: 905,
        },
        {
          name: "b-2",
          col: 2,
          row: 1,
          width: 632,
          height: 908,
        },
      ],
    },
    {
      images: [
        {
          name: "c-1",
          col: 1,
          row: 1,
          width: 640,
          height: 902,
        },
        {
          name: "c-2-a",
          col: 2,
          row: 1,
          width: 638,
          height: 899,
        },
        {
          name: "c-2-b",
          col: 2,
          row: 2,
          width: 623,
          height: 905,
        },
        {
          name: "c-3-a",
          col: 3,
          row: 1,
          width: 635,
          height: 905,
        },
        {
          name: "c-3-b",
          col: 3,
          row: 2,
          width: 638,
          height: 902,
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
          height: 695,
        },
      ],
    },
  ],
};

export default bloomeHose;
