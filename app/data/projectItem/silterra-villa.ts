import type { ProjectDetail } from "./types";

const silterraVilla: ProjectDetail = {
  title: "Silterra Villa",
  slug: "silterra-villa",
  location: "—",
  year: "—",
  area: "—",
  description:
    "A contemporary villa defined by clean architectural lines, carefully balanced proportions, and a refined connection between interior and exterior spaces.",
  hero: "/images/projects/silterra-villa/project13/hero.png",
  disc: "/images/projects/silterra-villa/project13/disc.png",
  gallery: [
    {
      images: [
        { name: "a-1", col: 1, row: 1, width: 641, height: 902 },
        { name: "a-2", col: 2, row: 1, width: 632, height: 906 },
      ],
    },
    {
      images: [
        { name: "b-1", col: 1, row: 1, width: 637, height: 906 },
        { name: "b-2", col: 2, row: 1, width: 637, height: 909 },
      ],
    },
  ],
};

export default silterraVilla;
