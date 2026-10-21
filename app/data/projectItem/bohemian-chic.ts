
import type { ProjectDetail } from "./types";

const bohemianChic: ProjectDetail = {
  title: "Bohemian Chic",
  slug: "bohemian-chic",
  location: "Dubai",
  year: "2023",
  area: "1500 m²",
  description:
    "A residential design project exploring a distinctive contemporary character through a carefully composed sequence of spaces.",
  hero: "/images/projects/apartments/bohemian-chic/hero.png",
  disc: "/images/projects/apartments/bohemian-chic/disc.png",

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
        { name: "c-1", col: 1, row: 1, width: 1, height: 1 },
        { name: "c-2", col: 2, row: 1, width: 1, height: 1 },
      ],
    },
    {
      images: [
        { name: "d", col: 1, row: 1, width: 1, height: 1 },
      ],
    },
    {
      images: [
        { name: "e-1", col: 1, row: 1, width: 1, height: 1 },
        { name: "e-2", col: 2, row: 1, width: 1, height: 1 },
      ],
    },
    {
      images: [
        { name: "f", col: 1, row: 1, width: 1, height: 1 },
      ],
    },
  ],
};

export default bohemianChic;
