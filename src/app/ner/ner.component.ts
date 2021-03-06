import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NerService} from '../ner.service';
import {NamedEntity} from '../NamedEntity';

@Component({
  selector: 'app-ner',
  templateUrl: './ner.component.html',
  styleUrls: ['./ner.component.css']
})
export class NerComponent implements OnInit {
  paramKey = 'param';
  entities: NamedEntity[];
  phrase: string;

  constructor(
    private route: ActivatedRoute,
    private nerService: NerService
  ) { }

  ngOnInit() {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    const paramValue = this.route.snapshot.paramMap.get(this.paramKey);
    console.log('paramValue: ' + paramValue);
    this.phrase = paramValue;
    this.nerService.parse(paramValue)
      .subscribe(entities => {
        console.log(entities);
        this.entities = entities;
      } );
  }

}
