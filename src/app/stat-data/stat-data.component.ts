import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ParsedPhraseService} from '../services/parsed-phrase.service';
import {StatRetrieverService} from '../services/stat-retriever.service';
import {ParsingResults} from '../data-objects/ParsingResults';

@Component({
  selector: 'app-stat-data',
  templateUrl: './stat-data.component.html',
  styleUrls: ['./stat-data.component.css']
})
export class StatDataComponent implements OnInit {
  private dataUrl = 'http://localhost:8080/getStatData';
  data: WordStatParsingResult;

  constructor(
    private route: ActivatedRoute,
    private statRetrieverService: StatRetrieverService
  ) { }


  ngOnInit() {
    this.statRetrieverService.getStatResultData(this.dataUrl)
      .subscribe(results => {
        this.data = results;
      } );
  }
}
