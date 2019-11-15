import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmissionOfficerComponent } from './admission-officer.component';

describe('AdmissionOfficerComponent', () => {
  let component: AdmissionOfficerComponent;
  let fixture: ComponentFixture<AdmissionOfficerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmissionOfficerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmissionOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
