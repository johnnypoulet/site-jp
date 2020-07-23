import { Point } from './point';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'enumToArray'})
export class EnumToArrayPipe implements PipeTransform {
  transform(value): Object {
    return Object.keys(value).filter(e => !isNaN(+e)).map(o => ({index: +o, name: value[o]}));
  }
}

export enum MouseEventType {
  MouseUpLeft,
  MouseUpRight,
  MouseDownLeft,
  MouseDownRight,
  MouseClickLeft,
  MouseClickRight,
  MouseDblClick,
  MouseMove,
  MouseLeave,
  MouseOver,
  InvalidEvent,
}

export enum RoleType {
  Visitor,
  Admin,
  ContentManager
}

export enum ProjectType {
  None,
  ProjectTypePlaceHolder1,
  ProjectTypePlaceHolder2
}

// ----- Constantes Color -----//
export const MAX_RGB = 255;
export const MAX_ALPHA = 1;

// ----- Constantes Souris -----//
export const LEFT_MOUSE_BUTTON = 0;
export const RIGHT_MOUSE_BUTTON = 2;
export const ORIGIN: Point = new Point(0, 0);
export const NO_CURSOR = 'none';
export const DEFAULT_CURSOR = 'default';

// ----- Constantes Config Serveur -----//
export const SERVER_BASE_URL = 'http://localhost:4200';

// ----- Constantes SVG -----//
export enum PrimitiveType {
  Abstract,
  Asset,
  Rectangle,
  Paint,
  Pencil,
  Line,
  Ellipse,
  Polygon,
  Perimeter,
  Pen,
  Text,
  Quill,
  Spraypaint,
  Fill
}

export enum Texture {
  Basic,
  Grayed,
  Light,
  Frothy,
  Degraded,
}

export enum StrokeType {
  Full,
  Outline,
  FullWithOutline,
}

export enum LineCap {
  Butt,
  Round,
  Square,
}

export interface Contouring {
  type: string;
  points: Point[];
}

export enum LineJoin {
  Arcs,
  Bevel,
  Miter,
  MiterClip,
  Point,
  Round,
  BezierRound,
}

export enum Pattern {
  DottedLine,
  FullLine,
  SpacedLine1,
  SpacedLine2,
  SpacedLine3,
  SpacedLine4,
}

export const MIN_ROTATION_ANGLE = 0;
export const MAX_ROTATION_ANGLE = 359;
export const DEFAULT_LINE_STROKE_WIDTH = 2;
export const DEFAULT_LINE_ROUNDING = 20;
export const DEFAULT_PEN_STROKE_WIDTH = 6;
export const DEFAULT_PAINT_BUCKET_STROKE_WIDTH = 2;
export const ROUNDING_FACTOR = 0.1;
export const MAX_LINE_ROUNDING = 50;
export const CIRCLE_RADIUS_FACTOR = 1.5;
export const DEFAULT_STROKE_WIDTH = 5;
export const PENCIL_DEFAULT_STROKE_WIDTH = 1;
export const MIN_STROKE_WIDTH = 1;
export const DEFAULT_PEN_MIN_SLIDER_STROKE_WIDTH = 2;
export const MIN_OF_MIN_PEN_STROKE_WIDTH = 1;
export const MAX_OF_MIN_PEN_STROKE_WIDTH = 10;
export const MIN_OF_MAX_PEN_STROKE_WIDTH = 1;
export const MAX_OF_MAX_PEN_STROKE_WIDTH = 50;
export const PEN_SUB_PATH_LENGTH = 1;
export const SECOND_TO_MILI_SECOND = 1000;
export const CURSOR_SPEED_FACTOR = 65;
export const PEN_CURSOR_SPEED_INITIAL_POINT_RANK = 2;
export const DEFAULT_SPRAYPAINT_DELAY = 100;
export const MIN_SPRAYPAINT_FLOW_PER_SECOND = 5;
export const MAX_SPRAYPAINT_FLOW_PER_SECOND = 20;
export const DEFAULT_SPRAYPAINT_RANGE = 30;
export const MIN_SPRAYPAINT_RANGE = 20;
export const MAX_SPRAYPAINT_RANGE = 150;
export const SPRAYPAINT_FLOW_SIZE = 25;
export const SPRAYPAINT_POINT_SIZE = 0.8;
export const MAX_STROKE_WIDTH = 50;
export const MIN_PAINT_BUCKET_TOLERANCE = 0;
export const MAX_PAINT_BUCKET_TOLERANCE = 100;
export const DEFAULT_PAINT_BUCKET_TOLERANCE = 10;
export const DEFAULT_FILL_STROKE_WIDTH = 2;
