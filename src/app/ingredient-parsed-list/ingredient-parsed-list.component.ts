import { Component, OnInit } from '@angular/core';
import {ParsingResults} from '../data-objects/ParsingResults';
import {ActivatedRoute} from '@angular/router';
import {ParsedPhraseService} from '../services/parsed-phrase.service';

@Component({
  selector: 'app-ingredient-parsed-list',
  templateUrl: './ingredient-parsed-list.component.html',
  styleUrls: ['./ingredient-parsed-list.component.css']
})
export class IngredientParsedListComponent implements OnInit {
  paramKey = 'param';
  private baseUrl = 'http://localhost:8080/parseIngredients';
  results: ParsingResults[];
  phrase: string;

  constructor(
    private route: ActivatedRoute,
    private parsingService: ParsedPhraseService
  ) { }

  ngOnInit() {
    this.parsingService.getParsedPhrases(this.baseUrl)
      .subscribe(results => {
        this.results = results;
      } );
  }

}
