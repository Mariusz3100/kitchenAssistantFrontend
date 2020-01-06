import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TokenizerComponent} from './tokenizer/tokenizer.component';
import {NerComponent} from './ner/ner.component';
import {ParserComponent} from './parser/parser.component';
import {ProductParserComponent} from './product-parser/product-parser.component';


const routes: Routes = [
  { path: 'tokenizer/:param', component: TokenizerComponent },
  { path: 'ner/:param', component: NerComponent },
  { path: 'aiParse', component: ParserComponent },
  { path: 'aiProducts', component:  ProductParserComponent},

];


@NgModule({
  declarations: [],

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
