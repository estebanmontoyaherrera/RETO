import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourcefileComponent } from './resourcefile.component';

describe('ResourcefileComponent', () => {
  let component: ResourcefileComponent;
  let fixture: ComponentFixture<ResourcefileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResourcefileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResourcefileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
