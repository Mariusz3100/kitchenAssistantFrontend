import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TokenizerComponent } from './tokenizer/tokenizer.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { NerComponent } from './ner/ner.component';
import { ProductParserComponent } from './product-parser/product-parser.component';
import {MatchParserComponent} from './MatchParser/match-parser.component';

import { IngredientParsedListComponent } from './ingredient-parsed-list/ingredient-parsed-list.component';
import { IngredientParsedComponent } from './ingredient-parsed/ingredient-parsed.component';

@NgModule({
  declarations: [
    AppComponent,
    TokenizerComponent,
    NerComponent,
    IngredientParsedListComponent,
    ProductParserComponent,
    MatchParserComponent,
    IngredientParsedListComponent,
    IngredientParsedComponent,
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
