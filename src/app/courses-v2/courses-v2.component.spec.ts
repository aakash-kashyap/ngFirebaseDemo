import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesV2Component } from './courses-v2.component';

describe('CoursesV2Component', () => {
  let component: CoursesV2Component;
  let fixture: ComponentFixture<CoursesV2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesV2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
