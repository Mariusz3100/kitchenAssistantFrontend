import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {PhraseFindingResults} from '../data-objects/PhraseFindingResults';

@Injectable({
  providedIn: 'root'
})
export class PhraseRetrieverService {




  constructor(private http: Http) { }


  getPhraseConsideringResultData(dataUrl): Observable<PhraseFindingResults> {

    const results = this.http
      .get(`${dataUrl}`);

    const retValue = results
      .map(result => result.json().inner);
    return retValue;
  }



}
