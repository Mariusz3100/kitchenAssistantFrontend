import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TokenizerComponent} from './tokenizer/tokenizer.component';
import {NerComponent} from './ner/ner.component';
import {ProductParserComponent} from './product-parser/product-parser.component';
import {MatchParserComponent} from './MatchParser/match-parser.component';
import {IngredientParsedComponent} from './ingredient-parsed/ingredient-parsed.component';
import {IngredientParsedListComponent} from './ingredient-parsed-list/ingredient-parsed-list.component';


const routes: Routes = [
  { path: 'tokenizer/:param', component: TokenizerComponent },
  { path: 'ner/:param', component: NerComponent },
  { path: 'aiParse', component: IngredientParsedListComponent },
  { path: 'aiProducts/:phrase', component:  ProductParserComponent},
  { path: 'aiProducts', component:  ProductParserComponent},
  { path: 'aiMatcher', component:  MatchParserComponent},




];


@NgModule({
  declarations: [],

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
