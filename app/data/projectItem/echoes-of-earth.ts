import type { ProjectDetail } from "./types";

const echoesOfEarth: ProjectDetail = {
  title: "Echoes of Earth",
  slug: "echoes-of-earth",
  location: "—",
  year: "—",
  area: "—",
  description:
    "A thoughtful architectural project exploring the relationship between natural textures, contemporary forms, and a calm, grounded living experience.",
  hero: "/images/projects/echoes-of-earth/project16/hero.png",
  disc: "/images/projects/echoes-of-earth/project16/disc.png",
  gallery: [
    {
      images: [
        { name: "a-1", col: 1, row: 1, width: 647, height: 909 },
        { name: "a-2", col: 2, row: 1, width: 642, height: 909 },
      ],
    },
    {
      images: [
        { name: "b-1", col: 1, row: 1, width: 645, height: 904 },
        { name: "b-2", col: 2, row: 1, width: 639, height: 907 },
      ],
    },
    {
      images: [
        { name: "c-1", col: 1, row: 1, width: 719, height: 907 },
        { name: "c-2", col: 2, row: 1, width: 641, height: 904 },
      ],
    },
    {
      images: [
        { name: "d-1", col: 1, row: 1, width: 631, height: 902 },
        { name: "d-2", col: 2, row: 1, width: 634, height: 902 },
      ],
    },
  ],
};

export default echoesOfEarth;
