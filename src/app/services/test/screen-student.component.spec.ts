import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenStudentComponent } from '../../component/screen-student/screen-student.component';

describe('ScreenStudentComponent', () => {
  let component: ScreenStudentComponent;
  let fixture: ComponentFixture<ScreenStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
