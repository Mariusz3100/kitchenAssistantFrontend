import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TokenizerComponent } from './tokenizer/tokenizer.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule} from '@angular/router';
import { HttpModule } from '@angular/http';
import { NerComponent } from './ner/ner.component';

import { IngredientParsedListComponent } from './ingredient-parsed-list/ingredient-parsed-list.component';
import { IngredientParsedComponent } from './ingredient-parsed/ingredient-parsed.component';
import { ProductParsedListComponent } from './product-parsed-list/product-parsed-list.component';
import { ProductParsedComponent } from './product-parsed/product-parsed.component';
import { MatchCalculationComponent } from './match-calculation/match-calculation.component';
import { MatchCalculationListComponent } from './match-calculation-list/match-calculation-list.component';
import { MatchCalculationProductComponent } from './match-calculation-product/match-calculation-product.component';

@NgModule({
  declarations: [
    AppComponent,
    TokenizerComponent,
    NerComponent,
    IngredientParsedListComponent,
    IngredientParsedComponent,
    ProductParsedListComponent,
    ProductParsedComponent,
    MatchCalculationComponent,
    MatchCalculationListComponent,
    MatchCalculationProductComponent,
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
