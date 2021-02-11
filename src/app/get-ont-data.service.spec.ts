import { TestBed } from '@angular/core/testing';

import { GetOntDataService } from './get-ont-data.service';

describe('GetOntDataService', () => {
  let service: GetOntDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetOntDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
