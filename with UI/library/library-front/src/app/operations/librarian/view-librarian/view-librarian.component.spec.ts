import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLibrarianComponent } from './view-librarian.component';

describe('ViewLibrarianComponent', () => {
  let component: ViewLibrarianComponent;
  let fixture: ComponentFixture<ViewLibrarianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLibrarianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLibrarianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
