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
  paramKey = 'recipe';
  private recipeUrl = 'http://localhost:8080/parseRecipe';

  private matchesUrl = 'http://localhost:8080/checkMatchesFound';
  results: MatchingProcessResult[];
  phrase: string;


   ingredientsCovered: number;
   ingredientsTotal: number;
   productsFound: number;
   improperProductsFound: number;
   productsTotal: number;


  constructor(
    private route: ActivatedRoute,
    private parsingService: ParsedMatchServiceService
  ) { }

  ngOnInit() {
    const paramValue = this.route.snapshot.paramMap.get(this.paramKey);

    let fullUrl;
    if (paramValue) {
      fullUrl = this.recipeUrl + '?param=' + paramValue;
    } else {
      fullUrl = this.matchesUrl;

    }

    this.parsingService.getParsedPhrases(fullUrl)
      .subscribe(results => {

        this.results = results.results;
        this.ingredientsCovered = results.ingredientsCovered;
        this.productsFound = results.productsFound;
        this.improperProductsFound = results.improperProductsFound;
        this.ingredientsTotal = results.ingredientsTotal;
        this.productsTotal = results.productsTotal;
      } );

  }

}
