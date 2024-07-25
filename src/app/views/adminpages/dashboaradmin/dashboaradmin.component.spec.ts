import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboaradminComponent } from './dashboaradmin.component';

describe('DashboaradminComponent', () => {
  let component: DashboaradminComponent;
  let fixture: ComponentFixture<DashboaradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboaradminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboaradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
