import { TestBed } from '@angular/core/testing';

import { UsdaRetrieverService } from './usda-retriever.service';

describe('UsdaRetrieverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsdaRetrieverService = TestBed.get(UsdaRetrieverService);
    expect(service).toBeTruthy();
  });
});
