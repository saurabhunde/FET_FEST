import { TestBed, inject } from '@angular/core/testing';

import { TournamentDetailsService } from './tournament-details.service';

describe('TournamentDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TournamentDetailsService]
    });
  });

  it('should be created', inject([TournamentDetailsService], (service: TournamentDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
