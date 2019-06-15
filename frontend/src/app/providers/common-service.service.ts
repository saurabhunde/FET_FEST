import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {
  private data
  constructor() {
    this.data = this.getDataFromLocalStorage();
  }

  getDataFromLocalStorage() {
    if (localStorage.getItem("data")) {
      return JSON.parse(localStorage.getItem("data"));
    }
    var data = {
      tournaments: [
        { id: 2, hostid: 'host2', tournamentName: "host2tournamentName", year: "2019" },
        { id: 1, hostid: 'host1', tournamentName: "host1tournamentName", year: "2019" },
        { id: 3, hostid: 'host1', tournamentName: "host1tournamentName", year: "2019" },
        { id: 4, hostid: 'host3', tournamentName: "host3tournamentName", year: "2019" },
        { id: 5, hostid: 'host3', tournamentName: "host3tournamentName", year: "2019" },
        { id: 6, hostid: 'host1', tournamentName: "host1tournamentName", year: "2019" },
        { id: 7, hostid: 'host2', tournamentName: "host2tournamentName", year: "2019" },
        { id: 8, hostid: 'host1', tournamentName: "host1Name", year: "2019" }
      ],
      fixtures: [
        { date: "18/3/1993", id: "1", team1: "T1", team2: "T2", status: "done", tournamentId: "1", statusDetails: "T1 won by 10 runs" },
        { date: "14/3/1993", id: "2", team1: "T2", team2: "T3", status: "done", tournamentId: "2", statusDetails: "T3 won by 10 runs" },
        { date: "21/3/1993", id: "3", team1: "T4", team2: "T5", status: "done", tournamentId: "1", statusDetails: "T41 won by 10 runs" },
        { date: "18/3/1993", id: "4", team1: "T1", team2: "T2", status: "done", tournamentId: "1", statusDetails: "T2 won by 10 runs" },
        { date: "20/3/1993", id: "4", team1: "T3", team2: "T5", status: "done", tournamentId: "3", statusDetails: "T5 won by 10 runs" },
        { date: "06/3/1993", id: "5", team1: "T2", team2: "T6", status: "not started", tournamentId: "3", statusDetails: "Venue : Pune staion" },
        { date: "18/3/1993", id: "6", team1: "T7", team2: "T2", status: "not started", tournamentId: "1", statusDetails: "Venue : Pune staion" },
        { date: "18/3/1993", id: "7", team1: "T2", team2: "T5", status: "not started", tournamentId: "4", statusDetails: "Venue : Pune staion" },
        { date: "18/3/1993", id: "8", team1: "T2", team2: "T1", status: "not started", tournamentId: "4", statusDetails: "Venue : Pune staion" },
        { date: "18/3/1993", id: "9", team1: "T6", team2: "T3", status: "not started", tournamentId: "1", statusDetails: "Venue : Pune staion" },
        { date: "18/3/1993", id: "10", team1: "T1", team2: "T3", status: "not started", tournamentId: "5", statusDetails: "Venue : Pune staion" },
        { date: "18/3/1993", id: "11", team1: "T4", team2: "T1", status: "not started", tournamentId: "5", statusDetails: "Venue : Pune staion" },
        { date: "18/3/1993", id: "12", team1: "T1", team2: "T2", status: "not started", tournamentId: "5", statusDetails: "Venue : Pune staion" },
        { date: "18/3/1993", id: "13", team1: "T4", team2: "T2", status: "not started", tournamentId: "1", statusDetails: "Venue : Pune staion" }
      ],
      pointsTable: [
        { id: "1", team: "T1", points: "2", tournamentId: "1" },
        { id: "2", team: "T2", points: "4", tournamentId: "2" },
        { id: "3", team: "T4", points: "0", tournamentId: "1" },
        { id: "4", team: "T1", points: "10", tournamentId: "1" },
        { id: "4", team: "T3", points: "6", tournamentId: "3" },
        { id: "5", team: "T2", points: "2", tournamentId: "3" },
        { id: "6", team: "T7", points: "4", tournamentId: "1" },
        { id: "7", team: "T2", points: "2", tournamentId: "4" },
        { id: "8", team: "T2", points: "6", tournamentId: "4" },
        { id: "9", team: "T6", points: "2", tournamentId: "1" },
        { id: "10", team: "T1", points: "10", tournamentId: "5" },
        { id: "11", team: "T4", points: "2", tournamentId: "5" },
        { id: "12", team: "T1", points: "4", tournamentId: "5" },
        { id: "13", team: "T4", points: "4", tournamentId: "1" }
      ],
    }
    localStorage.setItem("data", JSON.stringify(data));
    return data;
  }

  public storeData(data) {
    localStorage.setItem("data", data);
  }
  public getData(data) {
    return this.data;
  }

  public getTournaments() {
    return this.data.tournaments;
  }
  public setTournament(obj) {
    
  }

}
