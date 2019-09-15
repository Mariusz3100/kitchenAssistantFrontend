import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {NamedEntity} from './NamedEntity';
import {ParsingResults} from '../ParsingResults';

@Injectable({
  providedIn: 'root'
})
export class ParsedPhraseService {


  private baseUrl = 'http://localhost:8080/parseIngredients';

  constructor(private http: Http) { }


  getParsedPhrases(): Observable<ParsingResults[]> {
    const fullUrl = `${this.baseUrl}`;
    const results = this.http
      .get(`${fullUrl}`)
      .map(result => result.json().results);
    return results;
  }}
