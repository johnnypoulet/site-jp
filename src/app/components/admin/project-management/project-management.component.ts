import { Component, OnInit } from '@angular/core';
import { ProjectType } from 'src/app/services/utils/constantsAndEnums';
import { FolioItem } from 'src/app/services/utils/folioItem';
import { FolioProjectsService } from 'src/app/services/content-management/folio-projects.service';
import { FolioProject } from 'src/app/services/utils/folioProject';

@Component({
  selector: 'app-project-management',
  templateUrl: './project-management.component.html',
  styleUrls: ['./project-management.component.scss']
})

export class ProjectManagementComponent implements OnInit {
  public selectedProjectId: number;
  public selectedType: ProjectType;
  public selectedTitle = 'Test';
  public selectedDateTime: string;
  public currentItems: FolioItem[];
  public errorDuringUpdate = false;
  public errorDuringImport = false;
  private currentProject: FolioProject;
  protected projectTypes: ProjectType;

  constructor(private folioProjectService: FolioProjectsService) {
    this.currentProject = null;
  }

  ngOnInit(): void {
    this.errorDuringUpdate = false;
  }

  public saveProject() {
    this.currentProject = {
      id: this.selectedProjectId,
      type: this.selectedType,
      title: this.selectedTitle,
      dateTime: this.selectedDateTime,
      folioItems: this.currentItems
    };

    if (!this.folioProjectService.updateProject(this.currentProject)) {
      this.errorDuringUpdate = true;
    } else {
      this.currentProject = null;
    }
  }

  public resetValues() {
    this.currentProject = null;
    this.selectedProjectId = 0;
    this.selectedType = ProjectType.None;
  }

  // TODO: cleanup, mais j'essaie de catcher le plus de cas d'erreurs possible
  readLocalFile(file: File): void {
    if (file && file.type === 'application/json') {
      const fileLoader = new FileReader();
      fileLoader.readAsText(file);
      fileLoader.onload = () => {
        const unparsedFile = fileLoader.result as string;
        try {
          const unparsedItem: FolioItem = JSON.parse(unparsedFile);
        } catch (e) {
          if (!confirm('Fichier non valide. Veuillez réessayer.')) {
            this.errorDuringImport = true;
            return;
          }
        }
      };
      fileLoader.onerror = (error) => {
        if (!confirm('Fichier non valide. Veuillez réessayer.')) {
          this.errorDuringImport = true;
          return;
        }
      };
    } else {
      if (!confirm('Fichier non valide. Veuillez réessayer.')) {
        this.errorDuringImport = true;
        return;
      }
    }
  }
}


/*
  id: number;
  type: ProjectType;
  title: string;
  dateTime: string;
  folioItems: FolioItem[];
*/
