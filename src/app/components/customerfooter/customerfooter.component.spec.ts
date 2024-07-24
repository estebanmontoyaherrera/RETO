import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerfooterComponent } from './customerfooter.component';

describe('CustomerfooterComponent', () => {
  let component: CustomerfooterComponent;
  let fixture: ComponentFixture<CustomerfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomerfooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
