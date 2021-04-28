import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TokenizerService} from '../services/tokenizer.service';
import {UsdaRetrieverService} from '../services/usda-retriever.service';

@Component({
  selector: 'app-usda-data',
  templateUrl: './usda-data.component.html',
  styleUrls: ['./usda-data.component.css']
})
export class UsdaDataComponent implements OnInit {
  result: ParsingFromUsdaResult;


  constructor(
    private usdaRetrieverService: UsdaRetrieverService
  ) { }

  ngOnInit() {
    // Note: Below 'queryParams' can be replaced with 'params' depending on your requirements
    this.usdaRetrieverService.retrieve()
      .subscribe(returned => {
        this.result = returned;
      });
  }


}
