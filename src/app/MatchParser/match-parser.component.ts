import { Component, OnInit } from '@angular/core';
import {Token} from '../Token';
import {ActivatedRoute} from '@angular/router';
import {TokenizerService} from '../tokenizer.service';
import {ParsedPhraseService} from '../parsed-phrase.service';
import {ParsingResults} from '../../ParsingResults';

@Component({
  selector: 'app-parser',
  templateUrl: './match-parser.component.html',
  styleUrls: ['./match-parser.component.css']
})
export class MatchParserComponent implements OnInit {
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
        console.log(results);
        console.log(results.length);

        this.results = results;
      } );
  }

}
