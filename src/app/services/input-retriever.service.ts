import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {ParsingResults} from '../data-objects/ParsingResults';

@Injectable({
  providedIn: 'root'
})
export class InputRetrieverService {

  constructor(private http: Http) { }


  getInputData(dataUrl): Observable<InputCases> {

    const results = this.http
      .get(`${dataUrl}`)
      .map(result => result.json());

    return results;
  }

}
