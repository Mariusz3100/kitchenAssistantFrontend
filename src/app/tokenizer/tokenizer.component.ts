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
  paramKey = 'param';
  tokens: Token[];


  constructor(
    private route: ActivatedRoute,
    private tokenizerService: TokenizerService
  ) { }

  ngOnInit() {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.route.queryParams.subscribe(params => {
      const paramValue = this.route.snapshot.paramMap.get(this.paramKey);
      console.log('paramValue: ' + paramValue);
      this.tokenizerService.parse(paramValue)
        .subscribe(tokens => {
          this.tokens = tokens;
          console.log(this.tokens); } );

    });
  }

}
