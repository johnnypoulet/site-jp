import { SVGPrimitive } from 'src/app/services/svg/svgPrimitive';

export interface UpdateViewCommand {
  /**
   * Appliquer la commande.
   */
  apply(primitives: SVGPrimitive[]): void;

  /**
   * Effectue l'inverse de la commande.
   */
  cancel(primitives: SVGPrimitive[]): void;
}
