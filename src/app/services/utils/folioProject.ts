export interface FolioProject {
  id: number;
  type: string;
  title: string;
  dateTime: string;
  folioItems: FolioItem[];
}

export interface FolioItem {
  id: number;
  content: string;
  title: string;
  thumbnail: ImageBitmap;
}
