import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminnavbarComponent } from './adminnavbar.component';

describe('AdminnavbarComponent', () => {
  let component: AdminnavbarComponent;
  let fixture: ComponentFixture<AdminnavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminnavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
