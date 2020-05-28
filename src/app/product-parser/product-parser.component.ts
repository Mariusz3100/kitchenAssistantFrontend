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
  paramName = 'phrase';
  private dataUrl = 'http://localhost:8080/tescoParse';
  results: ParsingResults[];
  phrase: string;

  constructor(
    private route: ActivatedRoute,
    private parsingProductService: ParsedPhraseService
  ) { }




  ngOnInit() {
    const paramValue = this.route.snapshot.paramMap.get(this.paramName);
    console.log('paramValue ' + paramValue);

    const fullUrl = this.dataUrl + '?param=' + paramValue;
    console.log(fullUrl);
    this.parsingProductService.getParsedPhrases(fullUrl)
      .subscribe(results => {

        this.results = results;
      } );
  }

}
