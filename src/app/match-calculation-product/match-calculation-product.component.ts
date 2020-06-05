import {Component, Input, OnInit} from '@angular/core';
import {MatchingProcessResult} from '../data-objects/MatchingProcessResult';
import {ProductMatchingResult} from '../data-objects/ProductMatchingResult';

@Component({
  selector: '[app-match-calculation-product]',
  templateUrl: './match-calculation-product.component.html',
  styleUrls: ['./match-calculation-product.component.css']
})
export class MatchCalculationProductComponent implements OnInit {
  @Input() productParsing: ProductMatchingResult;

  constructor() { }

  ngOnInit() {
  }

}
