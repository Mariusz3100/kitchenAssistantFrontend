import { TestBed } from '@angular/core/testing';

import { TokenizerService } from './tokenizer.service';

describe('TokenizerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TokenizerService = TestBed.get(TokenizerService);
    expect(service).toBeTruthy();
  });
});
