import type { ProjectDetail } from "./types";

const centeredLiving: ProjectDetail = {
  title: "Centered Living",
  slug: "centered-living",
  location: "—",
  year: "—",
  area: "—",
  description:
    "A contemporary residential project focused on balance, natural flow, and a calm architectural language shaped around everyday living.",
  hero: "/images/projects/centered-living/project12/hero.png",
  disc: "/images/projects/centered-living/project12/disc.png",
  gallery: [
    {
      images: [
        { name: "a", col: 1, row: 1, width: 1272, height: 902 },
      ],
    },
    {
      images: [
        { name: "b-1", col: 1, row: 1, width: 647, height: 911 },
        { name: "b-2", col: 2, row: 1, width: 634, height: 906 },
      ],
    },
    {
      images: [
        { name: "c-1", col: 1, row: 1, width: 639, height: 906 },
        { name: "c-2", col: 2, row: 1, width: 632, height: 906 },
      ],
    },
    {
      images: [
        { name: "d", col: 1, row: 1, width: 1264, height: 906 },
      ],
    },
  ],
};

export default centeredLiving;
