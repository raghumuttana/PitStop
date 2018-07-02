import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppenvironmentdetailsComponent } from './appenvironmentdetails.component';

describe('AppenvironmentdetailsComponent', () => {
  let component: AppenvironmentdetailsComponent;
  let fixture: ComponentFixture<AppenvironmentdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppenvironmentdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppenvironmentdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
