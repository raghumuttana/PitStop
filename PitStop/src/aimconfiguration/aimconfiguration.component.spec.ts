import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AimconfigurationComponent } from './aimconfiguration.component';

describe('AimconfigurationComponent', () => {
  let component: AimconfigurationComponent;
  let fixture: ComponentFixture<AimconfigurationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AimconfigurationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AimconfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
