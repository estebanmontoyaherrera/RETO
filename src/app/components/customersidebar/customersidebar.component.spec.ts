import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomersidebarComponent } from './customersidebar.component';

describe('CustomersidebarComponent', () => {
  let component: CustomersidebarComponent;
  let fixture: ComponentFixture<CustomersidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomersidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomersidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
