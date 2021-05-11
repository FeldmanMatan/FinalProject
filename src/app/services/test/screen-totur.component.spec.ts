import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenToturComponent } from '../../component/screen-totur/screen-totur.component';

describe('ScreenToturComponent', () => {
  let component: ScreenToturComponent;
  let fixture: ComponentFixture<ScreenToturComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScreenToturComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenToturComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
