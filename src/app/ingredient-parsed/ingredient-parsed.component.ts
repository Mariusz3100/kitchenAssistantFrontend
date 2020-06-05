import {Component, Input, OnInit} from '@angular/core';
import {ParsingResults} from '../data-objects/ParsingResults';

@Component({
  selector: '[app-ingredient-parsed]',
  templateUrl: './ingredient-parsed.component.html',
  styleUrls: ['./ingredient-parsed.component.css']
})
export class IngredientParsedComponent implements OnInit {

  @Input() result: ParsingResults;
  @Input() extended: boolean;
  constructor() { }

  ngOnInit() {
  }

}
