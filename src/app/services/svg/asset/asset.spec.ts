import { Point } from '../../utils/point';
import { DEFAULT_ZANDOL_SVG } from '../assetInfo';
import { Asset } from './asset';

// tslint:disable: no-string-literal
describe('Asset', () => {
  let asset: Asset;

  beforeEach(() => {
    asset = new Asset(100, 135, new Point(100, 100), DEFAULT_ZANDOL_SVG[0]);
  });

  it('should modify the scale correctly', () => {
    const nullTranslation = new Point(0, 0);
    const newAsset = Asset.createCopy(asset);

    // Scale intact
    newAsset.scale(nullTranslation, 1, 1);
    expect(newAsset.assetScaleX).toEqual(0.2);
    expect(newAsset.assetScaleY).toEqual(0.2);

    // Scales combinés
    newAsset.scale(nullTranslation, 2, 2);
    expect(newAsset.assetScaleX).toEqual(0.4);
    expect(newAsset.assetScaleY).toEqual(0.4);

    // Scales combinés négatifs
    newAsset.scale(nullTranslation, -2, -2);
    expect(newAsset.assetScaleX).toEqual(-0.8);
    expect(newAsset.assetScaleY).toEqual(-0.8);

    // Vérifier si la position est correctement appliquée
    const newAsset2 = new Asset(100, 135, new Point(2, 2), DEFAULT_ZANDOL_SVG[0]);
    const expectedPosition = new Point(2, 2);
    newAsset2.scale(nullTranslation, 8, 8);
    expect(newAsset2.position).toEqual(expectedPosition);
  });

  it('Properly constructed', () => {
    expect(asset.assetScaleX).toBe(0.2);
    expect(asset.assetScaleY).toBe(0.2);
    expect(asset.angle).toBe(135);
    expect(asset.position).toEqual(new Point(100, 100));
    expect(asset.info).toEqual(DEFAULT_ZANDOL_SVG[0]);
    expect(asset.assetTranslation).toBe('translate(100,100) ');
    expect(asset.assetRotation).toBe('rotate(-135,100,100) ');
    expect(asset.scaled).toBe('scale(0.2,0.2) ');
    expect(asset.assetTransformations).toBe('translate(100,100) rotate(-135,100,100) scale(0.2,0.2) ');
    expect(asset.origin).toBe('0px 0px');
  });

  it('#createCopy correctly copies the asset', () => {
    const newAsset = Asset.createCopy(asset);
    expect(newAsset).toEqual(asset);
  });

  it('#move should correctly change the position of the asset', () => {
    const newAsset: Asset = asset.copy();
    const translation: Point = new Point(100, 100);
    newAsset.position = new Point(200, 200);
    newAsset.createAssetTransformationsStrings();
    asset.move(translation);
    newAsset['topLeftCorner'] = translation;
    newAsset['bottomRightCorner'] = translation;
    expect(newAsset).toEqual(asset);
  });
});
