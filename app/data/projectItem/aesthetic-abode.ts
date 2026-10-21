
import type { ProjectDetail } from "./types";

const aestheticAbode: ProjectDetail = {
  title: "Aesthetic Abode",
  slug: "aesthetic-abode",
  location: "Cyprus",
  year: "2023",
  area: "230 m²",
  description:
    "A residential project exploring a refined architectural identity through carefully composed spaces and a considered design approach.",
  hero: "/images/projects/apartments/aesthetic-abode/hero.png",
  disc: "/images/projects/apartments/aesthetic-abode/newdisc.png",
  plan: "/images/projects/apartments/aesthetic-abode/plan.png",

  gallery: [
    // {
    //   images: [
    //     { name: "a", col: 1, row: 1, width: 1, height: 1 },
    //   ],
    // },
    {
     images: [
    { name: "b-1", col: 1, row: 1, width: 461, height: 908 },
    { name: "b-2", col: 2, row: 1, width: 471, height: 902 },
  ],
    },
    {
      images: [
        { name: "c", col: 1, row: 1, width: 1, height: 1 },
      ],
    },
    {
      images: [
        { name: "d-1", col: 1, row: 1, width: 1, height: 1 },
        { name: "d-2", col: 2, row: 1, width: 1, height: 1 },
      ],
    },
  ],
};

export default aestheticAbode;
