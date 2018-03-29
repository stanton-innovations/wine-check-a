import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VarietalsService } from './varietals.service';

describe('VarietalsService', () => {
  let service: VarietalsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [VarietalsService]
    });
  });

  beforeEach(() => {
    service = TestBed.get(VarietalsService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
