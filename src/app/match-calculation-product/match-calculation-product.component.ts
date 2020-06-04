import {Component, Input, OnInit} from '@angular/core';
import {ParsingResults} from '../data-objects/ParsingResults';

@Component({
  selector: '[app-match-calculation-product]',
  templateUrl: './match-calculation-product.component.html',
  styleUrls: ['./match-calculation-product.component.css']
})
export class MatchCalculationProductComponent implements OnInit {
  @Input() product: ParsingResults;

  constructor() { }

  ngOnInit() {
    console.log(this.product);
  }

}
