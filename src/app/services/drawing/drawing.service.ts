import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SVGPrimitive } from 'src/app/services/svg/svgPrimitive';

@Injectable({
  providedIn: 'root',
})
export class DrawingService {
  initWorkspaceObservable: Observable<number[]>;
  private initWorkspaceSubject = new BehaviorSubject<number[]>([0, 0]);

  workspaceObservable: Observable<number[]>;
  private workspaceSubject = new BehaviorSubject<number[]>([0, 0]);

  primtivesObservable: Observable<SVGPrimitive[]>;
  private primitivesSubject = new Subject<SVGPrimitive[]>();

  constructor() {
    this.initWorkspaceObservable = this.initWorkspaceSubject.asObservable();
    this.workspaceObservable = this.workspaceSubject.asObservable();
    this.primtivesObservable = this.primitivesSubject.asObservable();
  }

  // Envoie les donnees des dimensions du workspace à l'init de la vue
  sendInitWorkspaceDimensions(dimensions: number[]): void {
    this.initWorkspaceSubject.next(dimensions);
  }

  // Envoie les donnees des dimensions du workspace
  sendWorkspaceDimensions(dimensions: number[]): void {
    this.workspaceSubject.next(dimensions);
  }

  // Envoie la list des primitives presentent
  sendPrimitives(primitives: SVGPrimitive[]): void {
    this.primitivesSubject.next(primitives);
  }
}
