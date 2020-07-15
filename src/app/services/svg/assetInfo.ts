import { Color } from '../utils/color';

// Note: centerX et centerY representent le point de rotation par rapport a l'origine du svg path
export class AssetInfo {
  readonly name: string;
  readonly color: Color;
  readonly centerX: number;
  readonly centerY: number;
  readonly adjustedScale: number;
  readonly initRotation: number;
  readonly image: string;
}

// Source du SVG: https://upload.wikimedia.org/wikipedia/commons/8/86/A_perfect_SVG_heart.svg
export const DEFAULT_ZANDOL_SVG: AssetInfo[] = [
  {
    name: 'Coeur', color: new Color(232, 76, 61, 1), adjustedScale: 0.4, initRotation: 135, centerX: 150, centerY: 150,
    image: 'M0 200 v-200 h200 a100,100 90 0,1 0,200 a100,100 90 0,1 -200,0 z',
  }
];
