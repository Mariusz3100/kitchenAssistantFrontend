import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {MatchingProcessResult} from '../data-objects/MatchingProcessResult';


@Injectable({
  providedIn: 'root'
})
export class ParsedMatchServiceService {



  constructor(private http: Http) { }


  getParsedPhrases(dataUrl): Observable<MatchingProcessResult[]> {

    const results = this.http
      .get(`${dataUrl}`)
      .map(result => result.json().results);
    return results;
  }
}
