import { Component, OnInit } from '@angular/core';
import {ParsingResults} from '../../ParsingResults';
import {ActivatedRoute} from '@angular/router';
import {ParsedPhraseService} from '../parsed-phrase.service';

@Component({
  selector: 'app-product-parser',
  templateUrl: './product-parser.component.html',
  styleUrls: ['./product-parser.component.css']
})
export class ProductParserComponent implements OnInit {
  paramKey = 'param';
  private dataUrl = 'http://localhost:8080/tescoParseFromFile';
  results: ParsingResults[];
  phrase: string;

  constructor(
    private route: ActivatedRoute,
    private parsingProductService: ParsedPhraseService
  ) { }




  ngOnInit() {
    this.parsingProductService.getParsedPhrases(this.dataUrl)
      .subscribe(results => {

        this.results = results;
      } );
  }

}
