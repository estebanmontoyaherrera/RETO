import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroConsultoresComponent } from './registro-consultores.component';

describe('RegistroConsultoresComponent', () => {
  let component: RegistroConsultoresComponent;
  let fixture: ComponentFixture<RegistroConsultoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroConsultoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistroConsultoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
