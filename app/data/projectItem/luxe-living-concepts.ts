
import type { ProjectDetail } from "./types";

const luxeLivingConcepts: ProjectDetail = {
  title: "Luxe Living Concepts",
  slug: "luxe-living-concepts",
  location: "Cyprus",
  year: "2023",
  area: "700 m²",
  description:
    "A contemporary residential project shaped by a balanced architectural composition and a thoughtful approach to space.",
  hero: "/images/projects/apartments/luxe-living-consepts/hero.png",
  disc: "/images/projects/apartments/luxe-living-consepts/disc.png",
  plan: "/images/projects/apartments/luxe-living-consepts/plan.png",

  gallery: [
    {
      images: [
        { name: "a", col: 1, row: 1, width: 1, height: 1 },
      ],
    },
    {
      images: [
        { name: "b-1", col: 1, row: 1, width: 1, height: 1 },
        { name: "b-2", col: 2, row: 1, width: 1, height: 1 },
      ],
    },
    {
      images: [
        { name: "d", col: 1, row: 1, width: 1, height: 1 },
      ],
    },
  ],
};

export default luxeLivingConcepts;
