import type { ProjectDetail } from "./types";

const quietDimension: ProjectDetail = {
  title: "Quiet Dimension",
  slug: "quiet-dimension",
  location: "Saudi Arabia",
  year: "2026",
  area: "3,605 M²",
  description:
    "A contemporary apartment project defined by understated elegance, balanced proportions, and a thoughtful approach to modern living.",
  hero: "/images/projects/quiet-dimension/project8/hero.png",
  disc: "/images/projects/quiet-dimension/project8/disc.png",
  gallery: [
    {
      images: [
        { name: "a-1", col: 1, row: 1, width: 639, height: 906 },
        { name: "a-2", col: 2, row: 1, width: 634, height: 907 },
      ],
    },
    {
      images: [
        { name: "b-1", col: 1, row: 1, width: 646, height: 904 },
        { name: "b-2", col: 2, row: 1, width: 640, height: 902 },
      ],
    },
    {
      images: [
        { name: "c-1", col: 1, row: 1, width: 630, height: 906 },
        { name: "c-2", col: 2, row: 1, width: 637, height: 906 },
      ],
    },
  ],
};

export default quietDimension;
