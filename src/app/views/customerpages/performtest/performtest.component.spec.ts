import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerformtestComponent } from './performtest.component';

describe('PerformtestComponent', () => {
  let component: PerformtestComponent;
  let fixture: ComponentFixture<PerformtestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerformtestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerformtestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
