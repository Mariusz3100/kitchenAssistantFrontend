import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TokenizerComponent} from './tokenizer/tokenizer.component';
import {NerComponent} from './ner/ner.component';
import {IngredientParsedListComponent} from './ingredient-parsed-list/ingredient-parsed-list.component';
import {ProductParsedListComponent} from './product-parsed-list/product-parsed-list.component';
import {MatchCalculationListComponent} from './match-calculation-list/match-calculation-list.component';
import {MatchInputsComponent} from './match-inputs/match-inputs.component';
import {StatDataComponent} from './stat-data/stat-data.component';
import {PhraseConsideringComponent} from './phrase-considering/phrase-considering.component';


const routes: Routes = [
  { path: 'tokenizer/:param', component: TokenizerComponent },
  { path: 'ner/:param', component: NerComponent },
  { path: 'aiParse', component: IngredientParsedListComponent },
  { path: 'aiParse/:refined', component: IngredientParsedListComponent },
  { path: 'aiProducts/:phrase', component:  ProductParsedListComponent},
  { path: 'aiProducts', component:  ProductParsedListComponent},
  { path: 'aiMatcher', component:  MatchCalculationListComponent},
  { path: 'aiPhrases', component:  PhraseConsideringComponent},
  { path: 'inputs', component:  MatchInputsComponent},
  { path: 'stats', component:  StatDataComponent},



];


@NgModule({
  declarations: [],

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
