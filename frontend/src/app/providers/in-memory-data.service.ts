import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() {

  }
  createDb() {
    var tournaments: any = [
      { id: 2, hostid: 'host2', tournamentName: "Tournament2", year: "2019" },
      { id: 1, hostid: 'host1', tournamentName: "Tournament3", year: "2019" },
      { id: 3, hostid: 'host1', tournamentName: "Tournament4", year: "2019" },
      { id: 4, hostid: 'host3', tournamentName: "Tournament1", year: "2019" },
      { id: 5, hostid: 'host3', tournamentName: "Tournament5", year: "2019" },
      { id: 6, hostid: 'host1', tournamentName: "Tournament6", year: "2019" },
      { id: 7, hostid: 'host2', tournamentName: "Tournament7", year: "2019" },
      { id: 8, hostid: 'host1', tournamentName: "Tournament8", year: "2019" }
    ];
    const fixtures: any = [
      { date: "18/3/1993", id: "1", team1: "T1", team2: "T2", status: "done", tournamentId: "1", statusDetails: "T1 won by 10 runs", scoreCardId: 1 },
      { date: "14/3/1993", id: "2", team1: "T2", team2: "T3", status: "done", tournamentId: "2", statusDetails: "T3 won by 10 runs", scoreCardId: 2 },
      { date: "21/3/1993", id: "3", team1: "T4", team2: "T5", status: "done", tournamentId: "1", statusDetails: "T4 won by 10 runs", scoreCardId: 3 },
      { date: "18/3/1993", id: "4", team1: "T1", team2: "T2", status: "done", tournamentId: "1", statusDetails: "T2 won by 10 runs", scoreCardId: 4 },
      { date: "20/3/1993", id: "4", team1: "T3", team2: "T5", status: "done", tournamentId: "3", statusDetails: "T5 won by 10 runs", scoreCardId: 5 },
      { date: "06/3/1993", id: "5", team1: "T2", team2: "T6", status: "not started", tournamentId: "3", statusDetails: "Venue : Pune" },
      { date: "18/3/1993", id: "6", team1: "T7", team2: "T2", status: "not started", tournamentId: "1", statusDetails: "Venue : Pune" },
      { date: "18/3/1993", id: "7", team1: "T2", team2: "T5", status: "not started", tournamentId: "4", statusDetails: "Venue : Pune" },
      { date: "18/3/1993", id: "8", team1: "T2", team2: "T1", status: "not started", tournamentId: "4", statusDetails: "Venue : Pune" },
      { date: "18/3/1993", id: "9", team1: "T6", team2: "T3", status: "not started", tournamentId: "1", statusDetails: "Venue : Pune" },
      { date: "18/3/1993", id: "10", team1: "T1", team2: "T3", status: "not started", tournamentId: "5", statusDetails: "Venue : Pune" },
      { date: "18/3/1993", id: "11", team1: "T4", team2: "T1", status: "not started", tournamentId: "5", statusDetails: "Venue : Pune" },
      { date: "18/3/1993", id: "12", team1: "T1", team2: "T2", status: "not started", tournamentId: "5", statusDetails: "Venue : Pune" },
      { date: "18/3/1993", id: "13", team1: "T4", team2: "T2", status: "not started", tournamentId: "1", statusDetails: "Venue : Pune" }
    ];
    const pointsTable: any = [
      { id: "1", team: "T1", points: "4", tournamentId: "1", M: 5, W: 2, L: 3 },
      { id: "2", team: "T2", points: "4", tournamentId: "2", M: 4, W: 2, L: 2 },
      { id: "3", team: "T4", points: "4", tournamentId: "1", M: 3, W: 2, L: 1 },
      { id: "4", team: "T1", points: "8", tournamentId: "1", M: 7, W: 4, L: 3 },
      { id: "4", team: "T3", points: "10", tournamentId: "3", M: 11, W: 5, L: 6 },
      { id: "5", team: "T2", points: "6", tournamentId: "3", M: 5, W: 3, L: 2 },
      { id: "6", team: "T7", points: "2", tournamentId: "1", M: 3, W: 1, L: 2 },
      { id: "7", team: "T2", points: "0", tournamentId: "4", M: 1, W: 0, L: 1 },
      { id: "8", team: "T2", points: "0", tournamentId: "4", M: 3, W: 0, L: 3 },
      { id: "9", team: "T6", points: "3", tournamentId: "1", M: 6, W: 1, L: 5 },
      { id: "10", team: "T1", points: "14", tournamentId: "5", M: 10, W: 7, L: 3 },
      { id: "11", team: "T4", points: "2", tournamentId: "5", M: 1, W: 1, L: 0 },
      { id: "12", team: "T1", points: "4", tournamentId: "5", M: 3, W: 2, L: 1 },
      { id: "13", team: "T4", points: "6", tournamentId: "1", M: 4, W: 3, L: 1 }
    ];
    var scoreCard = [
      { id: 1, team1Score: "300 / 6", team2Score: "290 / 10", team1Name: "CSK", team2Name: "KINGS XI PUNJAB", result: "CSK Win by 10runs" },
      { id: 2, team1Score: "150 / 10", team2Score: "154 / 9", team1Name: "KINGS XI PUNJAB", team2Name: "CSK", result: "KINGS XI PUNJAB Win by 1 wicket" },
      { id: 3, team1Score: "240 / 5", team2Score: "239 / 10", team1Name: "DELHI DAREDEVIL", team2Name: "MUMBAI INDIANS", result: "MUMBAI INDIANS Win by a run"  },
      { id: 4, team1Score: "300 / 6", team2Score: "290 / 10", team1Name: "MUMBAI INDIANS", team2Name: "DECCAN CHARGERS", result: "DECCAN CHARGERS Win by 10runs" },
      { id: 5, team1Score: "300 / 6", team2Score: "290 / 10", team1Name: "DECCAN CHARGERS", team2Name: "DELHI DAREDEVIL", result: "DECCAN CHARGERS Win by 10runs" },
    ];
    return { tournaments, fixtures, pointsTable, scoreCard };
  }



  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(tournaments: any): number {
    return tournaments.length > 0 ? Math.max(...tournaments.map(tournament => tournament.id)) + 1 : 1;
  }
}
