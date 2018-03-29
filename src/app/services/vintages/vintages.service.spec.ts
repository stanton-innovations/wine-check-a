import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { VintagesService } from './vintages.service';


describe('Vintages Service', () => {
  let service: VintagesService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [VintagesService]
    });
  });

  beforeEach(() => {
    service = TestBed.get(VintagesService);
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
