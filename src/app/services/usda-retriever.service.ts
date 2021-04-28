import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs';
import {Token} from '../data-objects/Token';

@Injectable({
  providedIn: 'root'
})
export class UsdaRetrieverService {
  private baseUrl = 'http://localhost:8080/parseUsda';

  constructor(private http: Http) { }


  retrieve(): Observable<ParsingFromUsdaResult> {
    const ret = this.http
      .get(`${this.baseUrl}`)
      .map(result => result.json());
    return ret;
  }
}
