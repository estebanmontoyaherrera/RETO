import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboarcustomerComponent } from './dashboarcustomer.component';

describe('DashboarcustomerComponent', () => {
  let component: DashboarcustomerComponent;
  let fixture: ComponentFixture<DashboarcustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboarcustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboarcustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
