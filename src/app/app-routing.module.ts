import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TokenizerComponent} from './tokenizer/tokenizer.component';
import {NerComponent} from './ner/ner.component';


const routes: Routes = [
  { path: 'tokenizer/:param', component: TokenizerComponent },
  { path: 'ner/:param', component: NerComponent },

  // { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


@NgModule({
  declarations: [],

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
