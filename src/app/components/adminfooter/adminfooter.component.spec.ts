import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminfooterComponent } from './adminfooter.component';

describe('AdminfooterComponent', () => {
  let component: AdminfooterComponent;
  let fixture: ComponentFixture<AdminfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminfooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
