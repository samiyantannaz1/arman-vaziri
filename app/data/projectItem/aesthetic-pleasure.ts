
import type { ProjectDetail } from "./types";

const aestheticPleasure: ProjectDetail = {
  title: "Aesthetic Pleasure",
  slug: "aesthetic-pleasure",
  location: "Dubai",
  year: "2022",
  area: "1500 m²",
  description:
    "A contemporary residential project with a considered architectural composition and a focus on spatial balance.",
  hero: "/images/projects/apartments/aesthetic-peleasure/hero.png",
  disc: "/images/projects/apartments/aesthetic-peleasure/disc.png",


gallery: [
  {
    images: [
      { name: "a", col: 1, row: 1, width: 1, height: 1 },
    ],
  },

{
  images: [
    { name: "b-1", col: 1, row: 1, width: 490, height: 905 },
    { name: "b-2-a", col: 2, row: 1, width: 1264, height: 712 },
    { name: "b-2-b", col: 2, row: 2, width: 1267, height: 716 },
  ],
},

  {
    images: [
      { name: "c", col: 1, row: 1, width: 1, height: 1 },
    ],
  },
],

};

export default aestheticPleasure;
