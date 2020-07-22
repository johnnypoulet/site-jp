import { Injectable } from '@angular/core';
import { FolioProject, FolioItem } from 'src/app/services/utils/folioProject';

@Injectable({
  providedIn: 'root'
})
export class FolioProjectsService {
  protected folioProjects: Map<number, FolioProject[]>;

  constructor() { }

  public getNumberOfProjects(): number {
    return this.folioProjects.size;
  }
}
