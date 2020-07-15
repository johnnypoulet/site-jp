import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { DrawingService } from '../../services/drawing/drawing.service';
import { LayerControllerService } from 'src/app/services/layer-controller/layer-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements AfterViewInit {
  title = 'site-jp';
  myButt = 'radial-nards';

  constructor(private drawingService: DrawingService, private detector: ChangeDetectorRef, private controller: LayerControllerService) {
    this.drawingService.sendInitWorkspaceDimensions(this.workspaceDimensions);
    this.drawingService.sendWorkspaceDimensions(this.workspaceDimensions);
    this.changeButt('Dom DeLouise');
  }

  readonly TITLE: string = 'Toutant\'s Website';

  workspaceDimensions: number[] = [];

  @ViewChild('workspace', { static: false }) workspace: ElementRef;

  // Lit et envoie les dimensions de la zone de travail au component de nouveu dessin après l'init de la vue.
  // On retire 1 des valeurs parce que offset prend le padding et les marges externes en compte.
  ngAfterViewInit(): void {
    this.workspaceDimensions[0] = this.workspace.nativeElement.offsetWidth - 1;
    this.workspaceDimensions[1] = this.workspace.nativeElement.offsetHeight - 1;
    this.drawingService.sendInitWorkspaceDimensions(this.workspaceDimensions);
    this.detector.detectChanges();
  }

  changeButt(myButt): void {
    this.myButt = myButt;
  }

  // Lit et envoie les dimensions de la zone de travail au component de nouveu dessin.
  // On retire 1 des valeurs parce que offset prend le padding et les marges externes en compte.
  resendDimensions(): void {
    this.workspaceDimensions[0] = this.workspace.nativeElement.offsetWidth - 1;
    this.workspaceDimensions[1] = this.workspace.nativeElement.offsetHeight - 1;
    this.drawingService.sendWorkspaceDimensions(this.workspaceDimensions);
  }
}
