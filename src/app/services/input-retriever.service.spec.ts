import { TestBed } from '@angular/core/testing';

import { InputRetrieverService } from './input-retriever.service';

describe('InputRetrieverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InputRetrieverService = TestBed.get(InputRetrieverService);
    expect(service).toBeTruthy();
  });
});
