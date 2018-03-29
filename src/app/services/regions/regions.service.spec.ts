import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { RegionsService } from './regions.service';

describe('RegionService', () => {
  let service: RegionsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [RegionsService]
    });
  });

  beforeEach(() => {
    service = TestBed.get(RegionsService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

