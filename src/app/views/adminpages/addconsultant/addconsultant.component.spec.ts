import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddconsultantComponent } from './addconsultant.component';

describe('AddconsultantComponent', () => {
  let component: AddconsultantComponent;
  let fixture: ComponentFixture<AddconsultantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddconsultantComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddconsultantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
