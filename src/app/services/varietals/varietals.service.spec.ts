import { TestBed, inject } from '@angular/core/testing';

import { VarietalsService } from './varietals.service';

describe('VarietalsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VarietalsService]
    });
  });

  it('should be created', inject([VarietalsService], (service: VarietalsService) => {
    expect(service).toBeTruthy();
  }));
});
