import type { ProjectDetail } from "./types";

const veloraResidence: ProjectDetail = {
  title: "Velora Residence",
  slug: "velora-residence",
  location: "—",
  year: "—",
  area: "—",
  description:
    "A contemporary residential project defined by refined materials, balanced proportions, and a harmonious approach to modern living.",
  hero: "/images/projects/velora-residence/project9/hero.png",
  disc: "/images/projects/velora-residence/project9/disc.png",
  gallery: [
    {
      images: [
        { name: "a", col: 1, row: 1, width: 1276, height: 902 },
      ],
    },
    {
      images: [
        { name: "b-1", col: 1, row: 1, width: 637, height: 904 },
        { name: "b-2", col: 2, row: 1, width: 640, height: 906 },
      ],
    },
    {
      images: [
        { name: "c-1", col: 1, row: 1, width: 643, height: 904 },
        { name: "c-2", col: 2, row: 1, width: 644, height: 904 },
      ],
    },
  ],
};

export default veloraResidence;
