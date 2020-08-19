import {Component, Input, OnInit} from '@angular/core';
import {PhraseConsideredMatch} from '../data-objects/PhraseConsideredMatch';

@Component({
  selector: '[app-phrases-match]',

  templateUrl: './phrases-match.component.html',
  styleUrls: ['./phrases-match.component.css']
})
export class PhrasesMatchComponent implements OnInit {
  @Input()
  phrase: PhraseConsideredMatch;

  constructor() { }

  ngOnInit() {
  }

}
