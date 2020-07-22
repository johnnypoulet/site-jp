import { Injectable } from '@angular/core';
import { FolioProject } from 'src/app/services/utils/folioProject';
import { FolioItem } from 'src/app/services/utils/folioItem';
import { ProjectType } from '../utils/constantsAndEnums';

@Injectable({
  providedIn: 'root'
})
export class FolioProjectsService {
  protected folioProjects: FolioProject[];
  private folioItems: FolioItem[];
  private projectTypes: ProjectType[];
  private formProject: FolioProject;

  constructor() { }

  private getNumberOfProjects(): number {
    return this.folioProjects.length;
  }

  public getAllProjects(): FolioProject[] {
    return this.folioProjects;
  }

  public getProjectByTitle(title: string): FolioProject | void {
    this.folioProjects.forEach(project => {
      if (title === project.title) {
        return project;
      }
      else { return null; }
    });
  }

  public addProject(project: FolioProject): void {
    this.folioProjects.push(project);
  }

  private removeProjectById(id: number): void {
    const projectsToKeep: FolioProject[] = [];
    for (const project of this.folioProjects) {
      if (id !== project.id) {
        projectsToKeep.push(project);
      }
    }
    this.folioProjects = projectsToKeep;
  }
}