import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { TournamentDetailsComponent } from './components/tournament-details/tournament-details.component';
import { AddTeamsComponent } from './components/add-teams/add-teams.component';
import { FixturesComponent } from './components/fixtures/fixtures.component';
import { ScheduleTournamentComponent } from './components/schedule-tournament/schedule-tournament.component';
import { EnterMatchResultComponent } from './components/enter-match-result/enter-match-result.component';
import { InMemoryDataService }  from './providers/in-memory-data.service';
import { PointsTableComponent } from './components/points-table/points-table.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewTournamentComponent } from "./components/new-tournament/new-tournament.component";
import { ScoreCardComponent } from './components/score-card/score-card.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TournamentDetailsComponent,
    AddTeamsComponent,
    FixturesComponent,
    ScheduleTournamentComponent,
    EnterMatchResultComponent,
    PointsTableComponent,
    NewTournamentComponent,
    ScoreCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
