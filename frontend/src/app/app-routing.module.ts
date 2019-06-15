import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { HomeComponent } from './components/home/home.component';
import { TournamentDetailsComponent } from './components/tournament-details/tournament-details.component';
import { NewTournamentComponent } from "./components/new-tournament/new-tournament.component";

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'tournament-details/:id', component: TournamentDetailsComponent },
  { path: 'home/new-tournament', component: NewTournamentComponent },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
