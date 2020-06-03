import { TestBed } from '@angular/core/testing';
import { ParsedPhraseService } from './parsed-phrase.service';

describe('ParsedPhraseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ParsedPhraseService = TestBed.get(ParsedPhraseService);
    expect(service).toBeTruthy();
  });
});
