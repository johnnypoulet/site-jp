import { Injectable } from '@angular/core';
import { Ellipse } from '../svg/ellipse/ellipse';
import { Line } from '../svg/line/line';
import { FillingPath } from '../svg/path/fillPath/fillPath';
import { Path } from '../svg/path/path';
import { Pen } from '../svg/pen/pen';
import { Polygon } from '../svg/polygon/polygon';
import { Rectangle } from '../svg/rectangle/rectangle';
import { Spraypaint } from '../svg/spraypaint/spraypaint';
import { Asset } from '../svg/asset/asset';
import { SVGPrimitive } from '../svg/svgPrimitive';
import { TextPrimitive } from '../svg/text/textPrimitive';
import { PrimitiveType } from '../utils/constantsAndEnums';

@Injectable({
  providedIn: 'root',
})
export class PrimitiveFactoryService {

  generatePrimitives(primitivesToGenerate: string): SVGPrimitive[] {
    const primitives: SVGPrimitive[] = [];
    const tabTemp: SVGPrimitive[] = JSON.parse(primitivesToGenerate);
    tabTemp.forEach((prim: SVGPrimitive) => {
      let primitive: SVGPrimitive | undefined;
      switch (prim.type) {
        case PrimitiveType.Ellipse: {
          primitive = Ellipse.createCopy(prim);
          break;
        }
        case PrimitiveType.Line: {
          primitive = Line.createCopy(prim);
          break;
        }
        case PrimitiveType.Pen: {
          primitive = Pen.createCopy(prim);
          break;
        }
        case PrimitiveType.Paint: {
          primitive = Path.createCopy(prim);
          break;
        }
        case PrimitiveType.Pencil: {
          primitive = Path.createCopy(prim);
          break;
        }
        case PrimitiveType.Fill: {
          primitive = FillingPath.createCopy(prim);
          break;
        }
        case PrimitiveType.Spraypaint: {
          primitive = Spraypaint.createCopy(prim);
          break;
        }
        case PrimitiveType.Rectangle: {
          primitive = Rectangle.createCopy(prim);
          break;
        }
        case PrimitiveType.Asset: {
          primitive = Asset.createCopy(prim);
          break;
        }
        case PrimitiveType.Polygon: {
          primitive = Polygon.createCopy(prim);
          break;
        }
        case PrimitiveType.Text: {
          primitive = TextPrimitive.createCopy(prim);
          break;
        }
      }
      if (primitive) {
        primitives.push(primitive);
      }
    });

    return primitives;
  }
}
