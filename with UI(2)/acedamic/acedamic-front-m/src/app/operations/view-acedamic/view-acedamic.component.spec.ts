import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAcedamicComponent } from './view-acedamic.component';

describe('ViewAcedamicComponent', () => {
  let component: ViewAcedamicComponent;
  let fixture: ComponentFixture<ViewAcedamicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAcedamicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAcedamicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
