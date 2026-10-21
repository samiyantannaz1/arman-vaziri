
import type { ProjectDetail } from "./types";

const velvetVibe: ProjectDetail = {
  title: "Velvet Vibe",
  slug: "velvet-vibe",
  location: "USA",
  year: "2024",
  area: "420 m²",
  description:
    "A contemporary residential project with a distinctive visual identity and a balanced approach to architectural space.",
  hero: "/images/projects/apartments/velvet-vibe/hero.png",
  disc: "/images/projects/apartments/velvet-vibe/disc.png",

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
    {
      images: [
       { name: "e-1", col: 1, row: 1, width: 502, height: 906 },
{ name: "e-2", col: 2, row: 1, width: 498, height: 911 },
      ],
    },
  ],
};

export default velvetVibe;
