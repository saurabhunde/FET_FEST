import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentDetailsService {
  public host: any;
  private url = "api/tournaments";
  constructor(private http: HttpClient) { }
  public getTournaments(): Observable<Object[]> {
    return this.host ? this.http.get<Object[]>("api/tournaments/?hostid=" + this.host.hostId) : this.http.get<Object[]>("api/tournaments");
  }

  public getTournamentDetails(id: string): Observable<Object> {
    return this.http.get<Object>(`${this.url}/${id}`);
  }
  public getFixtures(id?: string): Observable<Object[]> {
    return id ? this.http.get<Object[]>("api/fixtures/?tournamentId=" + id) : this.http.get<Object[]>("api/fixtures");
  }
  public getPointsTable(id: string): Observable<Object[]> {
    return this.http.get<Object[]>("api/pointsTable/?tournamentId=" + id);
  }
  public addTournament(obj: any): Observable<Object>{
    console.log(obj);
    //obj.id = Math.random() * 100;
    //obj.hostId = "host1";
    return this.http.post("api/tournaments/", obj);
  }

  public getScoreCard(id: string): Observable<Object[]> {
    return this.http.get<Object[]>("api/scoreCard/?id=" + id);
  }

}