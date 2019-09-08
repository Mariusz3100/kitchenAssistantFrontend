import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {NamedEntity} from './NamedEntity';

@Injectable({
  providedIn: 'root'
})
export class NerService {

  private baseUrl = 'http://127.0.0.1:8000/ner';

  constructor(private http: Http) { }


  parse(phrase: string): Observable<NamedEntity[]> {
    const fullUrl = `${this.baseUrl}?param=${phrase}`;
    const entities = this.http
      .get(`${fullUrl}`)
      .map(result => result.json().entities);
    return entities;
  }
}
