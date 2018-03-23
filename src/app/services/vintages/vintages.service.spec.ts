import { TestBed, inject } from '@angular/core/testing';

import { VintagesService } from './vintages.service';

describe('VintagesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VintagesService]
    });
  });

  it('should be created', inject([VintagesService], (service: VintagesService) => {
    expect(service).toBeTruthy();
  }));
});
