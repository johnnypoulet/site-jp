import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { AssetInfo, DEFAULT_ZANDOL_SVG } from '../../services/svg/assetInfo';
import { PrimitiveType, Texture } from '../../services/utils/constantsAndEnums';
import { SVGPrimitive } from '../../services/svg/svgPrimitive';

@Component({
  selector: 'app-svg',
  templateUrl: './svg.component.html',
  styleUrls: ['./svg.component.scss']
})
export class SvgComponent {
  @ViewChild('svg', { static: false }) htmlOfPrimitives: ElementRef;

  @Input() primitives: SVGPrimitive[];
  @Output() completeClick: EventEmitter<any> = new EventEmitter();
  @Output() mouseDown: EventEmitter<any> = new EventEmitter();
  @Output() mouseMove: EventEmitter<any> = new EventEmitter();
  @Output() mouseUp: EventEmitter<any> = new EventEmitter();

  public PrimitiveType = PrimitiveType;
  public Texture = Texture;

  readonly ASSETS: AssetInfo[] = DEFAULT_ZANDOL_SVG;
  readonly FILTER_IDS: string[] = ['basic', 'grayed', 'light', 'frothy', 'degraded'];
  readonly PATTERN_TYPE: string[] = ['3', '', '4 2 3', '2 1', '5 1 2', '3 0.5 0.5 0.5'];
  readonly LINE_JOIN_TYPE: string[] = ['arcs', 'bevel', 'miter', 'miter-clip', 'Point', 'Round'];
  readonly LINE_CAP_TYPE: string[] = ['butt', 'round', 'square'];
  readonly SPRAYPAINT_POINT_SIZE: number = 0;

  mouseDownOnPage(event: PointerEvent, primitive?: SVGPrimitive): void {
    this.mouseDown.emit([event, primitive]);
  }

  mouseMoveOnPage(event: PointerEvent, primitive?: SVGPrimitive): void {
    this.mouseMove.emit([event, primitive]);
  }

  mouseUpOnPage(event: PointerEvent, primitive?: SVGPrimitive): void {
    this.mouseUp.emit([event, primitive]);
  }

  clickOnPage(event: MouseEvent, primitive?: SVGPrimitive): void {
    this.completeClick.emit([event, primitive]);
  }
}
