import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateConsultComponent } from './template-consult.component';

describe('TemplateConsultComponent', () => {
  let component: TemplateConsultComponent;
  let fixture: ComponentFixture<TemplateConsultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateConsultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateConsultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
