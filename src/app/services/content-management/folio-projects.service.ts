import { Injectable } from '@angular/core';
import { FolioProject } from 'src/app/services/utils/folioProject';
import { FolioItem } from 'src/app/services/utils/folioItem';
import { ProjectType } from '../utils/constantsAndEnums';

@Injectable({
  providedIn: 'root'
})
export class FolioProjectsService {
  protected folioProjects: FolioProject[];

  constructor() { }

  public getNumberOfProjects(): number {
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

  public removeProjectById(id: number): void {
    const projectsToKeep: FolioProject[] = [];
    for (const project of this.folioProjects) {
      if (id !== project.id) {
        projectsToKeep.push(project);
      }
    }
    this.folioProjects = projectsToKeep;
  }

  public addItemToProject(item: FolioItem, projectId: number): void {
    this.folioProjects.forEach(project => {
      if (projectId === project.id) {
        project.folioItems.push(item);
      }
    });
  }

  public removeItemFromProject(itemId: number, projectId: number): void {
    const itemsToKeep: FolioItem[] = [];
    this.folioProjects.forEach(project => {
      if (projectId === project.id) {
        project.folioItems.forEach(item => {
          if (itemId !== item.id) {
            itemsToKeep.push(item);
          }
        });
        project.folioItems = itemsToKeep;
      }
    });
  }

  public updateProject(updatedProject: FolioProject): boolean {
    this.folioProjects.forEach(project => {
      if (project.id === updatedProject.id) {
        project = updatedProject;
        return true;
      }
    });
    return false;
  }

  // TODO: déterminer format pour stocker les projets et items
  private populateProjectList(): void {
    if (!this.folioProjects) {

    }
  }
}
