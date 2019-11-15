import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAlumniComponent } from './create-alumni.component';

describe('CreateAlumniComponent', () => {
  let component: CreateAlumniComponent;
  let fixture: ComponentFixture<CreateAlumniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateAlumniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateAlumniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
