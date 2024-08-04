import { TestBed } from '@angular/core/testing';

import { ConsultantListService } from './consultant-list.service';

describe('ConsultantListService', () => {
  let service: ConsultantListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultantListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
