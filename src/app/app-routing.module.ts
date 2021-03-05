import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SportComponent} from './sport/sport.component';
import {PoliticsComponent} from './politics/politics.component';
import {ScienceComponent} from './science/science.component';
import {CultureComponent} from './culture/culture.component';
import {ResponseComponent} from './response/response.component';
import {FinanceComponent} from './finance/finance.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {path: 'sport', component: SportComponent},
  {path: 'politics', component: PoliticsComponent},
  {path: 'science', component: ScienceComponent},
  {path: 'culture', component: CultureComponent},
  {path: 'response', component: ResponseComponent},
  {path: 'finance', component: FinanceComponent},
  {path: 'home', component: HomeComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
