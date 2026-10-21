import type { ProjectDetail } from "./types";

const innerBalance: ProjectDetail = {
  title: "Inner Balance",
  slug: "inner-balance",
  location: "—",
  year: "—",
  area: "—",
  description:
    "A contemporary architectural project shaped by calm proportions, thoughtful spatial composition, and a balanced relationship between materials and light.",
  hero: "/images/projects/inner-balance/project14/hero.png",
  disc: "/images/projects/inner-balance/project14/disc.png",
  gallery: [
    {
      images: [
        { name: "a", col: 1, row: 1, width: 1266, height: 903 },
      ],
    },
    {
      images: [
        { name: "b-1", col: 1, row: 1, width: 641, height: 907 },
        { name: "b-2", col: 2, row: 1, width: 644, height: 903 },
      ],
    },
    {
      images: [
        { name: "c-1", col: 1, row: 1, width: 646, height: 909 },
        { name: "c-2", col: 2, row: 1, width: 638, height: 907 },
      ],
    },
  ],
};

export default innerBalance;
