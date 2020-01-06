import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {NamedEntity} from './NamedEntity';
import {ParsingResults} from '../ParsingResults';

@Injectable({
  providedIn: 'root'
})
export class ParsedPhraseService {


//  private baseUrl = 'http://localhost:8080/parseIngredients';

  constructor(private http: Http) { }


  getParsedPhrases(dataUrl): Observable<ParsingResults[]> {

    const results = this.http
      .get(`${dataUrl}`)
      .map(result => result.json().results);
    return results;
  }}
