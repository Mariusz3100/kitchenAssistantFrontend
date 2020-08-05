import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {ParsingResults} from '../data-objects/ParsingResults';

@Injectable({
  providedIn: 'root'
})
export class StatRetrieverService {



  constructor(private http: Http) { }


  getStatResultData(dataUrl): Observable<WordStatParsingResult> {

    const results = this.http
      .get(`${dataUrl}`);

    const retValue = results
      .map(result => result.json().inner);
    return retValue;

  }}
