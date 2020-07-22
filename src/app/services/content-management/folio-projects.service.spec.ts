import { TestBed } from '@angular/core/testing';

import { FolioProjectsService } from './folio-projects.service';

describe('FolioProjectsService', () => {
  let service: FolioProjectsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FolioProjectsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
