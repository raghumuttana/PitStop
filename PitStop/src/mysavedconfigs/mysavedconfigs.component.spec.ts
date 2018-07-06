import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MysavedconfigsComponent } from './mysavedconfigs.component';

describe('MysavedconfigsComponent', () => {
  let component: MysavedconfigsComponent;
  let fixture: ComponentFixture<MysavedconfigsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MysavedconfigsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MysavedconfigsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
