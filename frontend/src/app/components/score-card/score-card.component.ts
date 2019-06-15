import { Component, OnInit, Input } from '@angular/core';
import { TournamentDetailsService } from '../../providers/tournament-details.service'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-score-card',
  templateUrl: './score-card.component.html',
  styleUrls: ['./score-card.component.css']
})
export class ScoreCardComponent implements OnInit {
  public scoreCard:any = undefined;
  constructor( public tournamentDetailsService:TournamentDetailsService, private route:ActivatedRoute) { }

  ngOnInit() {
    var id = this.route.snapshot.paramMap.get("id");
    this.tournamentDetailsService.getScoreCard(id).subscribe( data => {
      this.scoreCard = data[0];
    });
  }

}
