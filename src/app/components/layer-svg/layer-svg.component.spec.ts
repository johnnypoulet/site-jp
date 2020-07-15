import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayerSvgComponent } from './layer-svg.component';

describe('LayerSvgComponent', () => {
  let component: LayerSvgComponent;
  let fixture: ComponentFixture<LayerSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayerSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayerSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
