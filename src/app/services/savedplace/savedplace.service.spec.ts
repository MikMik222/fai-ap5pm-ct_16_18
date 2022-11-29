import { TestBed } from '@angular/core/testing';

import { SavedplaceService } from './savedplace.service';

describe('SavedplaceService', () => {
  let service: SavedplaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SavedplaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
