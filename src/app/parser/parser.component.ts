import { Component, OnInit } from '@angular/core';
import {Token} from '../Token';
import {ActivatedRoute} from '@angular/router';
import {TokenizerService} from '../tokenizer.service';
import {ParsedPhraseService} from '../parsed-phrase.service';
import {ParsingResults} from '../../ParsingResults';

@Component({
  selector: 'app-parser',
  templateUrl: './parser.component.html',
  styleUrls: ['./parser.component.css']
})
export class ParserComponent implements OnInit {
  paramKey = 'param';
  results: ParsingResults[];
  phrase: string;

  constructor(
    private route: ActivatedRoute,
    private parsingService: ParsedPhraseService
  ) { }

  ngOnInit() {
    this.parsingService.getParsedPhrases()
      .subscribe(results => {
        console.log(results);
        console.log(results.length);

        this.results = results;
      } );
  }

}
