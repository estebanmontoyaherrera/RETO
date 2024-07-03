import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartRadarComponent } from './chart-radar.component';

describe('ChartRadarComponent', () => {
  let component: ChartRadarComponent;
  let fixture: ComponentFixture<ChartRadarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChartRadarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartRadarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
