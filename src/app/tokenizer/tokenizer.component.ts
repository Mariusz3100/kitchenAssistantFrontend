import { Component, OnInit } from '@angular/core';
import {Token} from '../Token';
import {ActivatedRoute} from '@angular/router';
import {TokenizerService} from '../tokenizer.service';

@Component({
  selector: 'app-tokenizer',
  templateUrl: './tokenizer.component.html',
  styleUrls: ['./tokenizer.component.css']
})
export class TokenizerComponent implements OnInit {
  param = 'param';
  tokens: Token[];
  phrase: string;

  constructor(
    private route: ActivatedRoute,
    private tokenizerService: TokenizerService
  ) { }

  ngOnInit() {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
      const paramValue = this.route.snapshot.paramMap.get(this.param);
      console.log('paramValue: ' + paramValue);
      this.phrase = paramValue;
      this.tokenizerService.parse(paramValue)
        .subscribe(tokens => {
          this.tokens = tokens;
         } );
  }

}
