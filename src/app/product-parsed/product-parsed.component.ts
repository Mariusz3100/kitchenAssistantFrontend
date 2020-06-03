import {Component, Input, OnInit} from '@angular/core';
import {ParsingResults} from '../data-objects/ParsingResults';

@Component({
  selector: '[app-product-parsed]',
  templateUrl: './product-parsed.component.html',
  styleUrls: ['./product-parsed.component.css']
})
export class ProductParsedComponent implements OnInit {
  @Input() result: ParsingResults;

  constructor() { }

  ngOnInit() {
  }

}
