import type { ProjectDetail } from "./types";

const tempoHouse: ProjectDetail = {
  title: "Tempo House",
    slug: "tempo-house",
  location: "UAE",
  year: "2024",
  area: "2000 M2",

  description:
    "Architecture and exterior design serve as the canvas upon which dreams are brought to life. They intertwine functionality with aesthetic beauty, shaping the world around us in captivating ways. Drawing inspiration from the lines of nature and the ingenuity of human innovation, architects craft spaces that inspire awe and wonder. With meticulous attention to detail and a keen eye for proportion and symmetry, exterior designs become timeless works of art, inviting exploration and evoking emotions.",

  hero: "/images/projects/tempo-house/hero.png",
  disc: "/images/projects/tempo-house/disc.png",

gallery: [
  {
    images: [
      {
        name: "a",
        col: 1,
        row: 1,
        width: 1341,
        height: 800,
      },
    ],
  },

  {
    images: [
      {
        name: "b-1",
        col: 1,
        row: 1,
        rowSpan: 2,
        width: 683,
        height: 909,
      },
      {
        name: "b-2-a",
        col: 2,
        row: 1,
        width: 1270,
        height: 698,
      },
      {
        name: "b-2-b",
        col: 2,
        row: 2,
        width: 1284,
        height: 695,
      },
    ],
  },

  {
    images: [
      {
        name: "c-1",
        col: 1,
        row: 1,
        width: 494,
        height: 908,
      },
      {
        name: "c-2",
        col: 2,
        row: 1,
        width: 598,
        height: 902,
      },
    ],
  },

  {
    images: [
      {
        name: "d",
        col: 1,
        row: 1,
        width: 1276,
        height: 697,
      },
    ],
  },

  {
    images: [
      {
        name: "e-1",
        col: 1,
        row: 1,
        width: 510,
        height: 899,
      },
      {
        name: "e-2",
        col: 2,
        row: 1,
        width: 519,
        height: 905,
      },
    ],
  },

  {
    images: [
      {
        name: "f-1",
        col: 1,
        row: 1,
        rowSpan: 2,
        width: 1632,
        height: 905,
      },
      {
        name: "f-2-a",
        col: 2,
        row: 1,
        width: 1266,
        height: 691,
      },
      {
        name: "f-2-b",
        col: 2,
        row: 2,
        width: 1279,
        height: 701,
      },
    ],
  },

  {
    images: [
      {
        name: "g-1",
        col: 1,
        row: 1,
        width: 460,
        height: 785,
      },
      {
        name: "g-2",
        col: 2,
        row: 1,
        width: 496,
        height: 902,
      },
    ],
  },

  {
    images: [
      {
        name: "h-1",
        col: 1,
        row: 1,
        width: 723,
        height: 908,
      },
      {
        name: "h-2",
        col: 2,
        row: 1,
        width: 490,
        height: 908,
      },
    ],
  },
],
};

export default tempoHouse;