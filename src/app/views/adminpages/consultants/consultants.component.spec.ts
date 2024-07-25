import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultantsComponent } from './consultants.component';

describe('ConsultantsComponent', () => {
  let component: ConsultantsComponent;
  let fixture: ComponentFixture<ConsultantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultantsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
