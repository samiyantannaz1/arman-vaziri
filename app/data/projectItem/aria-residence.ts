import type { ProjectDetail } from "./types";

const ariaResidence: ProjectDetail = {
  title: "Aria Residence",
  slug: "aria-residence",
  location: "—",
  year: "—",
  area: "—",
  description:
    "A contemporary residential design shaped by clean architectural lines, balanced proportions, and a refined relationship between materials and space.",
  hero: "/images/projects/aria-residence/project19/hero.png",
  disc: "/images/projects/aria-residence/project19/disc.png",
  gallery: [
    {
      images: [
        { name: "a", col: 1, row: 1, width: 1271, height: 896 },
      ],
    },
    {
      images: [
        { name: "b-1", col: 1, row: 1, width: 709, height: 899 },
        { name: "b-2", col: 2, row: 1, width: 713, height: 902 },
      ],
    },
    {
      images: [
        { name: "c-1", col: 1, row: 1, width: 715, height: 902 },
        { name: "c-2", col: 2, row: 1, width: 713, height: 902 },
      ],
    },
  ],
};

export default ariaResidence;
