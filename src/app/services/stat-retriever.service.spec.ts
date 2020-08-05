import { TestBed } from '@angular/core/testing';

import { StatRetrieverService } from './stat-retriever.service';

describe('StatRetrieverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StatRetrieverService = TestBed.get(StatRetrieverService);
    expect(service).toBeTruthy();
  });
});
