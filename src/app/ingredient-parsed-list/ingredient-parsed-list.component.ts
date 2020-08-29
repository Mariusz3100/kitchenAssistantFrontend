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
  paramKey = 'refined';
  private baseUrl = 'http://localhost:8080/parseIngredients';
  private refinedUrl = 'http://localhost:8080/ingredientRefinedParsing';
  results: ParsingResults[];
  phrase: string;

  constructor(
    private route: ActivatedRoute,
    private parsingService: ParsedPhraseService
  ) { }

  ngOnInit() {
    const paramValue = this.route.snapshot.paramMap.get(this.paramKey);
    let fullUrl;
    if (paramValue) {
      fullUrl = this.refinedUrl;
    } else {
      fullUrl = this.baseUrl;

    }


    this.parsingService.getParsedPhrases(fullUrl)
      .subscribe(results => {
        this.results = results;
      } );
  }

}
