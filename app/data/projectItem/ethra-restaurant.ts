
import type { ProjectDetail } from "./types";

const ethraRestaurant: ProjectDetail = {
  title: "Ethra Restaurant",
  slug: "ethra-restaurant",
  location: "—",
  year: "2026",
  area: "—",
  description:
    "Ethra Restaurant is a contemporary hospitality project shaped by a distinctive architectural identity, carefully considered materials, and a refined spatial experience.",
  hero: "/images/projects/ethra-restaurant/project2/hero.png",
  disc: "/images/projects/ethra-restaurant/project2/disc.png",

  gallery: [
    {
      images: [
        { name: "a", col: 1, row: 1, width: 1282, height: 905 },
      ],
    },
    {
      images: [
        { name: "b-1", col: 1, row: 1, width: 636, height: 908 },
        { name: "b-2new-a", col: 2, row: 2, width: 641, height: 990 },
        { name: "b-2-b", col: 2, row: 2, width: 641, height: 880 },
        { name: "b-3-a", col: 3, row: 1, width: 654, height: 910 },
        { name: "b-3-b", col: 3, row: 2, width: 639, height: 940 },
      ],
    },
  ],
};

export default ethraRestaurant;
