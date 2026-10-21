import type { ProjectDetail } from "./types";

const birdsIsland: ProjectDetail = {
  title: "Birds Island",
  slug: "birds-island",
  location: "—",
  year: "—",
  area: "—",

  description:
    "A refined villa project shaped by contemporary architecture, balanced proportions, and a considered relationship between interior and exterior spaces.",

  hero: "/images/projects/birds-island/project5/hero.png",
  disc: "/images/projects/birds-island/project5/disc.png",

  gallery: [
    {
      images: [
        {
          name: "a",
          col: 1,
          row: 1,
          width: 1261,
          height: 698,
        },
      ],
    },
    {
      images: [
        {
          name: "b-1",
          col: 1,
          row: 1,
          width: 644,
          height:902,
        },
        {
          name: "b-2-a",
          col: 2,
          row: 1,
          width: 1275,
          height: 701,
        },
        {
          name: "b-2-b",
          col: 2,
          row: 2,
          width: 1286,
          height: 692,
        },
      ],
    },
  ],
};

export default birdsIsland;
