import { TestBed } from '@angular/core/testing';

import { GetDataService } from './getdata.service';

describe('GetdataService', () => {
  let service: GetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
