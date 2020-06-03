import { Component, OnInit } from '@angular/core';
import {ParsingResults} from '../../ParsingResults';
import {ActivatedRoute} from '@angular/router';
import {ParsedPhraseService} from '../parsed-phrase.service';

@Component({
  selector: 'app-product-parsed-list',
  templateUrl: './product-parsed-list.component.html',
  styleUrls: ['./product-parsed-list.component.css']
})
export class ProductParsedListComponent implements OnInit {


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

    let fullUrl;
    if (paramValue){
      fullUrl = this.dataUrl + '?param=' + paramValue;
    } else {
      fullUrl = this.dataUrl;

    }

    console.log(fullUrl);
    this.parsingProductService.getParsedPhrases(fullUrl)
      .subscribe(results => {

        this.results = results;
      } );
  }
}
