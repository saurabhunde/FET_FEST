import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TournamentDetailsService } from '../../providers/tournament-details.service'
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private tournaments:any [];
  public fixtures;
  public loginForm = this.fb.group({
    hostId:['',Validators.required],
    password:['',Validators.required]
  });
  constructor(private http: HttpClient, public tournamentDetailsService:TournamentDetailsService, private fb:FormBuilder) { }

  ngOnInit() {
    this.getTournaments();
    this.getFixtures();
  }
  public hostLogin():void{
    if (this.loginForm.invalid) return;
    this.tournamentDetailsService.host = this.loginForm.value;
    this.getTournaments();
    this.loginForm.controls['password'].setValue('');
    this.loginForm.controls['hostId'].setValue('');
  }
  public logout(){
    this.tournamentDetailsService.host=undefined;
    this.getTournaments();
  }
  private getTournaments(){
    console.log(this)
    this.tournamentDetailsService.getTournaments().subscribe( data => {
      console.log("data", data)
      this.tournaments = data;
      
    });
  }

  private getFixtures(){
    console.log(this)
    this.tournamentDetailsService.getFixtures().subscribe( data => {
      console.log("data", data)
      this.fixtures = data;
      
    });
  }

}

interface Host {
  hostid:"string",
  password:"string"
}