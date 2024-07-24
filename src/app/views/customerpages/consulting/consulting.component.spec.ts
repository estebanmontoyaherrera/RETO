import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultingComponent } from './consulting.component';

describe('ConsultingComponent', () => {
  let component: ConsultingComponent;
  let fixture: ComponentFixture<ConsultingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
