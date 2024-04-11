import { TestBed } from '@angular/core/testing';

import { MiBotonService } from './mi-boton.service';

describe('MiBotonService', () => {
  let service: MiBotonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MiBotonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
