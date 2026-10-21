import type { ProjectDetail } from "./types";

const emberHouse: ProjectDetail = {
  title: "Ember House",
  slug: "ember-house",
  location: "—",
  year: "—",
  area: "—",
  description:
    "A contemporary residential project combining expressive architectural forms, carefully selected materials, and a warm, balanced living environment.",
  hero: "/images/projects/ember-house/project15/hero.png",
  disc: "/images/projects/ember-house/project15/disc.png",
  gallery: [
    {
      images: [
        { name: "a", col: 1, row: 1, width: 1605, height: 895 },
      ],
    },
    {
      images: [
        { name: "b-1", col: 1, row: 1, width: 637, height: 908 },
        { name: "b-2", col: 2, row: 1, width: 623, height: 905 },
      ],
    },
    {
      images: [
        { name: "c-1", col: 1, row: 1, width: 640, height: 908 },
        { name: "c-2", col: 2, row: 1, width: 647, height: 908 },
      ],
    },
    {
      images: [
        { name: "d-1", col: 1, row: 1, width: 640, height: 905 },
        { name: "d-2", col: 2, row: 1, width: 632, height: 902 },
      ],
    },
  ],
};

export default emberHouse;
