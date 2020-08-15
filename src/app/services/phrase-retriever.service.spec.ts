import { TestBed } from '@angular/core/testing';

import { PhraseRetrieverService } from './phrase-retriever.service';

describe('PhraseRetrieverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PhraseRetrieverService = TestBed.get(PhraseRetrieverService);
    expect(service).toBeTruthy();
  });
});
