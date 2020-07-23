import { FolioItem } from 'src/app/services/utils/folioItem';
import { ProjectType } from 'src/app/services/utils/constantsAndEnums';
export interface FolioProject {
  id: number;
  type: ProjectType;
  title: string;
  dateTime: string;
  folioItems: FolioItem[];
}
