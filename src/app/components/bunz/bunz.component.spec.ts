import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BunzComponent } from './bunz.component';

describe('BunzComponent', () => {
  let component: BunzComponent;
  let fixture: ComponentFixture<BunzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BunzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BunzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
