import { Color } from '../../utils/color';
import { PrimitiveType } from '../../utils/constantsAndEnums';
import { Point } from '../../utils/point';
import { AssetInfo } from '../assetInfo';
import { SVGPrimitive } from '../svgPrimitive';

export class Asset extends SVGPrimitive {

  constructor(scale: number, angle: number, position: Point, info: AssetInfo) {
    super();
    this.assetScaleX = this.assetScaleY = info.adjustedScale * (scale / 100.0);
    this.angle = angle;
    this.position = position;
    this.info = info;
    this.createAssetTransformationsStrings();
  }
  type = PrimitiveType.Asset;
  SELECTABLE = true;
  selected = false;
  assetScaleX: number;
  assetScaleY: number;
  angle: number;
  position: Point;
  info: AssetInfo;

  assetTransformations: string;
  assetRotation: string;
  assetTranslation: string;
  scaled: string;
  origin: string;

  static createCopy(primitive: SVGPrimitive): Asset {
    const asset: Asset = primitive as Asset;
    const newAsset: Asset = new Asset(asset.assetScaleX, asset.angle, Point.copyPoint(asset.position), asset.info );

    newAsset.assetScaleX = asset.assetScaleX;
    newAsset.assetScaleY = asset.assetScaleY;
    newAsset.assetTransformations = asset.assetTransformations;
    newAsset.assetRotation = asset.assetRotation;
    newAsset.assetTranslation = asset.assetTranslation;
    newAsset.scaled = asset.scaled;
    newAsset.origin = asset.origin;

    newAsset.topLeftCorner = Point.copyPoint(asset.topLeftCorner);
    newAsset.bottomRightCorner = Point.copyPoint(asset.bottomRightCorner);

    newAsset.rotation = asset.rotation;
    newAsset.scaleX = asset.scaleX;
    newAsset.scaleY = asset.scaleY;
    newAsset.transformations = asset.transformations;

    return newAsset;
  }

  scale(translation: Point, scaleFactorX: number, scaleFactorY: number): void {
    this.assetScaleX *= scaleFactorX;
    this.assetScaleY *= scaleFactorY;
    this.move(translation);
    this.createAssetTransformationsStrings();
  }

  createAssetTransformationsStrings(): void {
    this.assetTranslation = `translate(${this.position.x},${this.position.y}) `;
    this.assetRotation = `rotate(${(-1) * this.angle},${this.assetScaleX * this.info.centerX},${this.assetScaleX * this.info.centerY}) `;
    this.scaled = `scale(${this.assetScaleX},${this.assetScaleY}) `;
    this.assetTransformations = `${this.assetTranslation}${this.assetRotation}${this.scaled}`;
    this.origin = `${0}px ${0 }px`;
    this.strokeColor = new Color(0, 0, 0);
  }

  copy(): Asset {
    return Asset.createCopy(this);
  }

  move(translation: Point): void {
    this.position.addPoint(translation);
    this.createAssetTransformationsStrings();
    this.moveCorners(translation);
  }

}
