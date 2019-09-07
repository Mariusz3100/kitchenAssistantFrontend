import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {Token} from './Token';

@Injectable({
  providedIn: 'root'
})
export class TokenizerService {
  private baseUrl = 'http://127.0.0.1:8000/tokenizer';

  constructor(private http: Http) { }


  parse(phrase: string): Observable<Token[]> {
    const fullUrl = `${this.baseUrl}?param=${phrase}`;
    const tokens = this.http
      .get(`${fullUrl}`)
      .map(result => result.json().tokens);
    return tokens;
  }


}
