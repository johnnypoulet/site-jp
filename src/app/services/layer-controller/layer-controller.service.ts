import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
// import { DrawingService } from '../drawing/drawing.service';
import { SVGPrimitive } from 'src/app/services/svg/svgPrimitive';
// import { Color } from '../utils/color';
import { MouseEventType } from '../utils/constantsAndEnums';
import { Point } from '../utils/point';
import { UpdateViewCommand } from 'src/app/services/update-view-commands/updateViewCommand';

@Injectable({
  providedIn: 'root',
})

export class LayerControllerService implements OnDestroy {
  private selectedToolSubscription: Subscription;
  private toolCommandSubscription: Subscription;
  private temporaryPrimitivesSubscription: Subscription;
  private newDrawingSubcription: Subscription;
  private newBackgroundColorSubscription: Subscription;
  svgPrimitives: SVGPrimitive[] = [];
  temporaryPrimitives: SVGPrimitive[] = [];
  private executedCommands: UpdateViewCommand[] = [];
  private cancelledCommands: UpdateViewCommand[] = [];
  primitivesToDraw: SVGPrimitive[] = [];

  private primitivesHTMLSubject = new Subject<boolean>();
  private primitivesHTMLSubjectString = new Subject<string>();

  constructor() { }

  ngOnDestroy(): void {
    this.selectedToolSubscription.unsubscribe();
    this.newDrawingSubcription.unsubscribe();
    this.newBackgroundColorSubscription.unsubscribe();
    if (this.toolCommandSubscription) {
      this.toolCommandSubscription.unsubscribe();
    }
    if (this.temporaryPrimitivesSubscription) {
      this.temporaryPrimitivesSubscription.unsubscribe();
    }
  }

  mouseEventOnLayer(eventType: MouseEventType, position: Point, primitive?: SVGPrimitive): void { }

  mouseWheelEventOnLayer(delta: number): void {
  }

  undo(): void {
    const lastExecutedCommand: UpdateViewCommand | undefined = this.executedCommands.pop();
    if (lastExecutedCommand) {
      this.cancelledCommands.push(lastExecutedCommand);
      lastExecutedCommand.cancel(this.svgPrimitives);
      this.updatePrimitivesToDraw();
    }
  }

  redo(): void {
    const lastCancelledCommand: UpdateViewCommand | undefined = this.cancelledCommands.pop();
    if (lastCancelledCommand) {
      this.executedCommands.push(lastCancelledCommand);
      lastCancelledCommand.apply(this.svgPrimitives);
      this.updatePrimitivesToDraw();
    }
  }

  canUndo(): boolean {
    return this.executedCommands.length > 0;
  }

  canRedo(): boolean {
    return this.cancelledCommands.length > 0;
  }

  clearSVGElements(): void {
    this.svgPrimitives.length = 0;
    this.temporaryPrimitives.length = 0;
    this.primitivesToDraw.length = 0;
  }

  private updatePrimitivesToDraw(): void {
    this.primitivesToDraw = this.svgPrimitives.concat(this.temporaryPrimitives);
  }

  setPrimitives(primitives: SVGPrimitive[]): void {
    this.svgPrimitives = primitives;
    this.updatePrimitivesToDraw();
  }


  isEmptyPrimitives(): boolean {
    return this.svgPrimitives.length === 0;
  }

  getPrimitivesHTMLObservable(): Observable<boolean> {
    return this.primitivesHTMLSubject.asObservable();
  }

  getHTMLOfPrimitives(): void {
    this.primitivesHTMLSubject.next(true);
  }

  getHTMLPrimitivesStringObservable(): Observable<string> {
    return this.primitivesHTMLSubjectString.asObservable();
  }

  sendHTMLStringOfPrimitives(htmlPrimitives: string) {
    this.primitivesHTMLSubjectString.next(htmlPrimitives);
  }

  /*
  changeBackgroundColor(color: Color) {
    this.applyNewCommand(new BackgroundColorCommand(this.drawingService, color, this.canvasInfo.color));
  }*/

  private applyNewCommand(command: UpdateViewCommand): void {
    if (command) {
      command.apply(this.svgPrimitives);
      this.executedCommands.push(command);
      this.temporaryPrimitives.length = 0;
      this.cancelledCommands.length = 0;
      this.updatePrimitivesToDraw();
    }
  }
}
