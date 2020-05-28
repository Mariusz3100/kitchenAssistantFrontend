import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TokenizerComponent } from './tokenizer/tokenizer.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { NerComponent } from './ner/ner.component';
import { ParserComponent } from './parser/parser.component';
import { ProductParserComponent } from './product-parser/product-parser.component';
import {MatchParserComponent} from './MatchParser/match-parser.component';

@NgModule({
  declarations: [
    AppComponent,
    TokenizerComponent,
    NerComponent,
    ParserComponent,
    ProductParserComponent,
    MatchParserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
