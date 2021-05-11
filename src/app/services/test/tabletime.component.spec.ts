import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabletimeComponent } from '../../component/tabletime/tabletime.component';

describe('TabletimeComponent', () => {
  let component: TabletimeComponent;
  let fixture: ComponentFixture<TabletimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabletimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabletimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
