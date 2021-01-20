import { TestBed } from '@angular/core/testing';

import { PopularTrendsService } from './popular-trends.service';

describe('PopularTrendsService', () => {
  let service: PopularTrendsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopularTrendsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
