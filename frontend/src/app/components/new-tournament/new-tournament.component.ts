import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TournamentDetailsService } from '../../providers/tournament-details.service'

@Component({
  selector: 'app-new-tournament',
  templateUrl: './new-tournament.component.html',
  styleUrls: ['./new-tournament.component.css']
})
export class NewTournamentComponent implements OnInit {
  public tournamentForm = this.fb.group({
    tournamentName:['',Validators.required],
    tournamentYear:['',Validators.required]
  });
  constructor(private http: HttpClient, private fb:FormBuilder,public tournamentDetailsService:TournamentDetailsService) { }

  ngOnInit() {
  }

  public addTournament():void {
  this.tournamentDetailsService.addTournament(this.tournamentForm.value);  
  }

}
