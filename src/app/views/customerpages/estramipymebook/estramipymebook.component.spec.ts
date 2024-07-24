import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstramipymebookComponent } from './estramipymebook.component';

describe('EstramipymebookComponent', () => {
  let component: EstramipymebookComponent;
  let fixture: ComponentFixture<EstramipymebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstramipymebookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstramipymebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
