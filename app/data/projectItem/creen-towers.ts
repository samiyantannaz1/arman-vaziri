
import type { ProjectDetail } from "./types";

const creenTowers: ProjectDetail = {
  title: "Creen Towers",
  slug: "creen-towers",
  location: "—",
  year: "—",
  area: "—",

  description:
    "A contemporary residential tower project defined by clean architectural lines, balanced proportions, and a refined visual identity.",

  hero: "/images/projects/creen-towers/project7/hero.png",
  disc: "/images/projects/creen-towers/project7/disc.png",

  gallery: [
    // Row A: دو تصویر کنار هم
    {
      images: [
        {
          name: "a-1",
          col: 1,
          row: 1,
          width: 672,
          height: 911,
        },
        {
          name: "a-2",
          col: 2,
          row: 1,
          width: 603,
          height: 907,
        },
      ],
    },

    // Row B: سه ستون
    {
      images: [
        {
          name: "b-1",
          col: 1,
          row: 1,
          width: 600,
          height: 890,
        },
        {
          name: "b-2-a",
          col: 2,
          row: 1,
          width: 610,
          height: 906,
        },
        {
          name: "b-2-b",
          col: 2,
          row: 2,
          width: 600,
          height: 906,
        },
        {
          name: "b-3-a",
          col: 3,
          row: 1,
          width: 607,
          height: 908,
        },
        {
          name: "b-3-b",
          col: 3,
          row: 2,
          width: 597,
          height: 911,
        },
      ],
    },
  ],
};

export default creenTowers;
