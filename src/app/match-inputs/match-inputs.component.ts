import { Component, OnInit } from '@angular/core';
import {ParsingResults} from '../data-objects/ParsingResults';
import {ActivatedRoute} from '@angular/router';
import {ParsedPhraseService} from '../services/parsed-phrase.service';
import {InputRetrieverService} from '../services/input-retriever.service';

@Component({
  selector: 'app-match-inputs',
  templateUrl: './match-inputs.component.html',
  styleUrls: ['./match-inputs.component.css']
})
export class MatchInputsComponent implements OnInit {
  private baseUrl = 'http://localhost:8080/retrieveInputCases';
  results: InputCases;


  constructor(
    private route: ActivatedRoute,
    private inputService: InputRetrieverService
  ) { }


  ngOnInit() {
    this.inputService.getInputData(this.baseUrl)
      .subscribe(results => {
        this.results = results;
        console.log(results.ingredientLines.length);
      } );
  }
}
