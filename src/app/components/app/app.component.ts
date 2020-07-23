import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, HostListener, ViewChild, OnDestroy, OnInit } from '@angular/core';
import { DrawingService } from '../../services/drawing/drawing.service';
// import { LayerControllerService } from 'src/app/services/layer-controller/layer-controller.service';
import { MediaObserver, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
// import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  readonly TITLE: string = 'Toutant\'s Website';
  title = 'site-jp';
  myButt = 'radial-nards';
  workspaceDimensions: number[] = [];
  mediaSub: Subscription;
  deviceXs: boolean;

  constructor(private drawingService: DrawingService, private detector: ChangeDetectorRef, public mediaObserver: MediaObserver) {
    this.drawingService.sendInitWorkspaceDimensions(this.workspaceDimensions);
    this.drawingService.sendWorkspaceDimensions(this.workspaceDimensions);
    this.changeButt('Dom DeLouise');
  }

  @ViewChild('workspace', { static: false }) workspace: ElementRef;

  // Lit et envoie les dimensions de la zone de travail au component de nouveu dessin après l'init de la vue.
  // On retire 1 des valeurs parce que offset prend le padding et les marges externes en compte.
  ngAfterViewInit(): void {
    this.workspaceDimensions[0] = this.workspace.nativeElement.offsetWidth - 1;
    this.workspaceDimensions[1] = this.workspace.nativeElement.offsetHeight - 1;
    this.drawingService.sendInitWorkspaceDimensions(this.workspaceDimensions);
    this.detector.detectChanges();
  }

  ngOnInit() {
    this.mediaSub = this.mediaObserver.media$.subscribe(
      (result: MediaChange) => {
        console.log(result.mqAlias)
        this.deviceXs = result.mqAlias === 'xs' ? true : false;
      });
  }

  ngOnDestroy() {

  }

  changeButt(myButt): void {
    this.myButt = myButt;
  }

  // Lit et envoie les dimensions de la zone de travail au component de nouveu dessin.
  // On retire 1 des valeurs parce que offset prend le padding et les marges externes en compte.
  // ca lair cool,
  resendDimensions(): void {
    this.workspaceDimensions[0] = this.workspace.nativeElement.offsetWidth - 1;
    this.workspaceDimensions[1] = this.workspace.nativeElement.offsetHeight - 1;
    this.drawingService.sendWorkspaceDimensions(this.workspaceDimensions);
  }
}
