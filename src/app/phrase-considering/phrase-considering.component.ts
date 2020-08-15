import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {StatRetrieverService} from '../services/stat-retriever.service';
import {PhraseRetrieverService} from '../services/phrase-retriever.service';
import {PhraseFindingResults} from '../data-objects/PhraseFindingResults';

@Component({
  selector: 'app-phrase-considering',
  templateUrl: './phrase-considering.component.html',
  styleUrls: ['./phrase-considering.component.css']
})
export class PhraseConsideringComponent implements OnInit {
  private dataUrl = 'http://localhost:8080/displayAllCurrentPhrasesConsidered';
  data: PhraseFindingResults;

  constructor(
    private route: ActivatedRoute,
    private phraseRetrieverService: PhraseRetrieverService
  ) { }

  ngOnInit() {
    this.phraseRetrieverService.getPhraseConsideringResultData(this.dataUrl)
      .subscribe(results => {
        this.data = results;
      } );
  }

}
