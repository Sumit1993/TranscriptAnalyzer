import { TestBed } from '@angular/core/testing';

import { TranscriptsService } from './transcripts.service';

describe('TranscriptsService', () => {
  let service: TranscriptsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranscriptsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
