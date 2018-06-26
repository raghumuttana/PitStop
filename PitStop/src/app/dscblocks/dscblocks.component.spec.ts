import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DscblocksComponent } from './dscblocks.component';

describe('DscblocksComponent', () => {
  let component: DscblocksComponent;
  let fixture: ComponentFixture<DscblocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DscblocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DscblocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
