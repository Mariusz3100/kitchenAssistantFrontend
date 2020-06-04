import { Component, OnInit } from '@angular/core';
import {MatchingProcessResult} from '../data-objects/MatchingProcessResult';
import {ActivatedRoute} from '@angular/router';
import {ParsedMatchServiceService} from '../services/parsed-match-service.service';

@Component({
  selector: 'app-match-calculation-list',
  templateUrl: './match-calculation-list.component.html',
  styleUrls: ['./match-calculation-list.component.css']
})
export class MatchCalculationListComponent implements OnInit {
  paramKey = 'param';
  private baseUrl = 'http://localhost:8080/findMatchesForIngredients';
  results: MatchingProcessResult[];
  phrase: string;

  constructor(
    private route: ActivatedRoute,
    private parsingService: ParsedMatchServiceService
  ) { }

  ngOnInit() {
    this.parsingService.getParsedPhrases(this.baseUrl)
      .subscribe(results => {

        this.results = results;
      } );
  }

}
