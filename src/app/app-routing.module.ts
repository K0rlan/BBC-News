import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SportComponent} from './sport/sport.component';
import {PoliticsComponent} from './politics/politics.component';
import {ScienceComponent} from './science/science.component';
import {CultureComponent} from './culture/culture.component';
import {ResponseComponent} from './response/response.component';
import {FinanceComponent} from './finance/finance.component';

const routes: Routes = [
  {path: 'sport', component: SportComponent},
  {path: 'politics', component: PoliticsComponent},
  {path: 'science', component: ScienceComponent},
  {path: 'culture', component: CultureComponent},
  {path: 'response', component: ResponseComponent},
  {path: 'finance', component: FinanceComponent},
  {path: '', redirectTo: 'sport', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
