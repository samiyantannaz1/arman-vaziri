import type { ProjectDetail } from "./types";

const opalVista: ProjectDetail = {
  title: "Opal Vista",
   slug: "opal-vista",
  location: "USA",
  year: "2025",
  area: "1300 M2",

  description:
    "This luxurious villa interior embodies contemporary elegance with a seamless blend of natural materials, warm neutral tones, and sophisticated textures. The grand double-height living area features floor-to-ceiling windows, flooding the space with natural light while offering stunning outdoor views.\n\nThe open-plan layout connects the living, dining, and kitchen areas, fostering a fluid and cohesive ambiance. Earthy tones and carefully selected furnishings create a timeless, serene environment perfect for both relaxation and entertaining.",

  hero: "/images/projects/opal-vista/hero.png",
  disc: "/images/projects/opal-vista/disc.png",

gallery: [
  {
    images: [
      { name: "a", col: 1, row: 1, width: 1276, height: 712 },
    ],
  },

  {
    images: [
      { name: "b-1", col: 1, row: 1, width: 569, height: 905 },
      { name: "b-2", col: 2, row: 1, width: 720, height: 912 },
    ],
  },

  {
    images: [
      { name: "c-1", col: 1, row: 1, rowSpan: 2, width: 559, height: 890 },

      { name: "c-2-a", col: 2, row: 1, width: 710, height: 905 },
      { name: "c-2-b", col: 2, row: 2, width: 715, height: 908 },

      { name: "c-3-a", col: 3, row: 1, width: 717, height: 901 },
      { name: "c-3-b", col: 3, row: 2, width: 718, height: 902 },
    ],
  },

  {
    images: [
      { name: "d-1", col: 1, row: 1, width: 717, height: 905 },
      { name: "d-2", col: 2, row: 1, width: 580, height: 901 },
    ],
  },

  {
    images: [
      { name: "e-1", col: 1, row: 1, width: 704, height: 905 },
      { name: "e-2", col: 2, row: 1, width: 706, height: 909 },
    ],
  },

  {
    images: [
      { name: "f-1", col: 1, row: 1, rowSpan: 2, width: 716, height: 888 },

      { name: "f-2-a", col: 2, row: 1, width: 711, height: 902 },
      { name: "f-2-b", col: 2, row: 2, width: 719, height: 908 },

      { name: "f-3-a", col: 3, row: 1, width: 712, height: 908 },
      { name: "f-3-b", col: 3, row: 2, width: 707, height: 908 },
    ],
  },

  {
    images: [
      { name: "f", col: 1, row: 1, width: 1270, height: 714 },
    ],
  },

  {
    images: [
      { name: "g-1", col: 1, row: 1, width: 697, height: 902 },
      { name: "g-2", col: 2, row: 1, width: 726, height: 902 },
    ],
  },
],
};

export default opalVista;