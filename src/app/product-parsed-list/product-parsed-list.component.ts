import { Component, OnInit } from '@angular/core';
import {ParsingResults} from '../data-objects/ParsingResults';
import {ActivatedRoute} from '@angular/router';
import {ParsedPhraseService} from '../services/parsed-phrase.service';

@Component({
  selector: 'app-product-parsed-list',
  templateUrl: './product-parsed-list.component.html',
  styleUrls: ['./product-parsed-list.component.css']
})
export class ProductParsedListComponent implements OnInit {


  paramName = 'phrase';
  private dataUrl = 'http://localhost:8080/morrisonsParse';
  results: ParsingResults[];
  phrase: string;

  constructor(
    private route: ActivatedRoute,
    private parsingProductService: ParsedPhraseService
  ) { }


  ngOnInit() {
    const paramValue = this.route.snapshot.paramMap.get(this.paramName);

    let fullUrl;
    if (paramValue) {
      fullUrl = this.dataUrl + '?param=' + paramValue;
    } else {
      fullUrl = this.dataUrl;

    }

    this.parsingProductService.getParsedPhrases(fullUrl)
      .subscribe(results => {

        this.results = results;
      } );
  }
}
