import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TokenizerComponent} from './tokenizer/tokenizer.component';
import {NerComponent} from './ner/ner.component';
import {MatchParserComponent} from './match-parser/match-parser.component';
import {IngredientParsedComponent} from './ingredient-parsed/ingredient-parsed.component';
import {IngredientParsedListComponent} from './ingredient-parsed-list/ingredient-parsed-list.component';
import {ProductParsedListComponent} from './product-parsed-list/product-parsed-list.component';


const routes: Routes = [
  { path: 'tokenizer/:param', component: TokenizerComponent },
  { path: 'ner/:param', component: NerComponent },
  { path: 'aiParse', component: IngredientParsedListComponent },
  { path: 'aiProducts/:phrase', component:  ProductParsedListComponent},
  { path: 'aiProducts', component:  ProductParsedListComponent},
  { path: 'aiMatcher', component:  MatchParserComponent},




];


@NgModule({
  declarations: [],

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
