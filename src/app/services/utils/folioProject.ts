import { FolioItem } from 'src/app/services/utils/folioItem';
export interface FolioProject {
  id: number;
  type: string;
  title: string;
  dateTime: string;
  folioItems: FolioItem[];
}
