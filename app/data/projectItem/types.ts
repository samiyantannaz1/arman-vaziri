export interface GalleryImage {
  name: string;
  col: number;
  row: number;
  rowSpan?: number;
  width: number;
  height: number;
}

export interface GalleryBlock {
  images: GalleryImage[];
}

export interface ProjectDetail {
  title: string;
  location: string;
  year: string;
  area: string;
  slug: string;
  description: string;
  hero: string;
  disc: string;
  plan?: string;
  gallery: GalleryBlock[];

}