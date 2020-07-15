

import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { LayerControllerService } from 'src/app/services/layer-controller/layer-controller.service';
// import { DrawingCommunicationService } from 'src/app/services/serverCommunication/drawing-communication.service';
import { SVGPrimitive } from 'src/app/services/svg/svgPrimitive';
// import { TextTool } from 'src/app/services/tools/textTool';
// import { ToolsService } from 'src/app/services/tools/tools.service';
import { Color } from 'src/app/services/utils/color';
// tslint:disable-next-line
import { DEFAULT_CURSOR, LEFT_MOUSE_BUTTON, MouseEventType, RIGHT_MOUSE_BUTTON } from 'src/app/services/utils/constantsAndEnums';
import { Point } from 'src/app/services/utils/point';
// import { NewDrawingInfo } from '../../services/utils/newDrawingInfo';
import { SvgComponent } from 'src/app/components/svg/svg.component';
import { DrawingService } from 'src/app/services/drawing/drawing.service';


@Component({
  selector: 'app-layer-svg',
  templateUrl: './layer-svg.component.html',
  styleUrls: ['./layer-svg.component.scss']
})
export class LayerSvgComponent implements AfterViewInit, OnDestroy {

  @ViewChild('layer', { static: false }) layer: ElementRef;
  @ViewChild('svgPrimitives', { static: false }) htmlOfPrimitives: ElementRef;
  @ViewChild('svgPrimitivesFixe', { static: false }) fixedPrimitives: SvgComponent;
  @ViewChild('svgPrimitivesTemporaires', { static: false }) temporaryPrimitives: SvgComponent;

  layerWidth = 0;
  layerHeight = 0;
  layerBackground = 'rgba(255,255,255,1)';

  screenShoting = false;
  private controllerHTMLPrimitiveSubscription: Subscription;
  viewBox = '0 0 0 0';

  constructor(private controller: LayerControllerService, private drawingService: DrawingService) {
    this.controllerHTMLPrimitiveSubscription = this.controller.getPrimitivesHTMLObservable().subscribe((send) => {
      this.screenShoting = true;
      if (send) {
        this.viewBox = `0 0 ${this.layerWidth} ${this.layerHeight}`;
        setTimeout(() => { // juste pour permettre de cacher la grille avant le screenshot
          const serializer = new XMLSerializer();
          const data = serializer.serializeToString(this.htmlOfPrimitives.nativeElement);
          controller.sendHTMLStringOfPrimitives(
            `data:image/svg+xml;charset=utf-8;base64,${btoa(unescape(encodeURIComponent(data)))}`,
          );
          this.screenShoting = false;
        }, 1);
      }
    });
  }

  @HostListener('wheel', ['$event']) onScroll(event: WheelEvent) {
    this.controller.mouseWheelEventOnLayer(Math.sign(event.deltaY));
    this.updatePrimitives();
  }

  @HostListener('dblclick', ['$event']) ondblclick(event: MouseEvent): void {
    if (event.button === 0) {
      this.sendMouseEventToController(MouseEventType.MouseDblClick, event.clientX, event.clientY);
    }
  }

  @HostListener('mouseleave', ['$event']) mouseLeaveLayer(event: MouseEvent): void {
    if (event.button === 0) {
      this.sendMouseEventToController(MouseEventType.MouseLeave, event.clientX, event.clientY);
    }
  }

  @HostListener('mousedown', ['$event']) mouseDownOnLayer(event: PointerEvent, primitive?: SVGPrimitive): void {
    event.stopPropagation();
    let mouseEventType = MouseEventType.InvalidEvent;
    if (event.button === LEFT_MOUSE_BUTTON) {
      mouseEventType = MouseEventType.MouseDownLeft;
    } else if (event.button === RIGHT_MOUSE_BUTTON) {
      mouseEventType = MouseEventType.MouseDownRight;
    }
    this.sendMouseEventToController(mouseEventType, event.clientX, event.clientY, primitive);
  }

  ngAfterViewInit(): void {
    this.updatePrimitives();
  }

  ngOnDestroy(): void {
    this.controllerHTMLPrimitiveSubscription.unsubscribe();
  }

  defineDimensions(width: number, height: number): void {
    if (width < 0 || height < 0) {
      throw new Error('Layer width and height must be positive.');
    }
    this.layerWidth = width;
    this.layerHeight = height;

    if (!this.layerWidth || !(this.layerHeight)) {
      this.viewBox = '0 0 0 0 ';
    } else {
      this.viewBox = `0 0 ${this.layerWidth} ${this.layerHeight}`;
    }
  }

  defineBackgroundColor(color: Color): void {
    if (color.rgbaTextForm === Color.TRANSPARENT_RGBA_TEXT_FORM) {
      color.changeColor(color, 0.01);
    }
    this.layerBackground = color.rgbaTextForm;
  }

  mouseMoveOnLayer(event: PointerEvent, primitive?: SVGPrimitive): void {
    this.sendMouseEventToController(MouseEventType.MouseMove, event.clientX, event.clientY, primitive);
    this.updatePrimitives();
  }

  mouseUpOnLayer(event: PointerEvent, primitive?: SVGPrimitive): void {
    event.stopPropagation();

    let mouseEventType = MouseEventType.InvalidEvent;
    if (event.button === LEFT_MOUSE_BUTTON) {
      mouseEventType = MouseEventType.MouseUpLeft;
    } else if (event.button === RIGHT_MOUSE_BUTTON) {
      mouseEventType = MouseEventType.MouseUpRight;
    }
    this.sendMouseEventToController(mouseEventType, event.clientX, event.clientY, primitive);
  }

  clickOnLayer(event: MouseEvent, primitive?: SVGPrimitive): void {
    event.stopPropagation();
    let mouseEventType = MouseEventType.InvalidEvent;
    if (event.button === LEFT_MOUSE_BUTTON) {
      mouseEventType = MouseEventType.MouseClickLeft;
    } else if (event.button === RIGHT_MOUSE_BUTTON) {
      event.preventDefault();
      mouseEventType = MouseEventType.MouseClickRight;
    }
    this.sendMouseEventToController(mouseEventType, event.clientX, event.clientY, primitive);
  }

  getCursor(): string {
    // return this.controller.tool ? this.controller.tool.getCursor() : DEFAULT_CURSOR;
    return DEFAULT_CURSOR;
  }

  clearLayer(): void {
    this.controller.clearSVGElements();
  }

  private sendMouseEventToController(eventType: MouseEventType, clientX: number, clientY: number, primitive?: SVGPrimitive): void {
    const element: HTMLElement = (this.layer.nativeElement as HTMLElement);
    if (element) {
      const xOffset: number = element.getBoundingClientRect().left;
      const yOffset: number = element.getBoundingClientRect().top;
      const position: Point = new Point(clientX - xOffset, clientY - yOffset);
      this.controller.mouseEventOnLayer(eventType, position, primitive);
      this.updatePrimitives();
    }
  }

  private updatePrimitives(): void {
    this.drawingService.sendPrimitives(this.controller.primitivesToDraw);
  }
}
