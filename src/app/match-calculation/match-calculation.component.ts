import {Component, Input, OnInit} from '@angular/core';
import {MatchingProcessResult} from '../data-objects/MatchingProcessResult';
import {ParsingResults} from '../data-objects/ParsingResults';

@Component({
  selector: '[app-match-calculation]',
  templateUrl: './match-calculation.component.html',
  styleUrls: ['./match-calculation.component.css']
})
export class MatchCalculationComponent implements OnInit {
  @Input() result: MatchingProcessResult;


  constructor() { }

  ngOnInit() {
    console.log(this.result.productsConsideredParsingResults);
  }

}
