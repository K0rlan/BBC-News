import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SportComponent} from './sport/sport.component';
import {PoliticsComponent} from './politics/politics.component';
import {ScienceComponent} from './science/science.component';
import {CultureComponent} from './others/culture/culture.component';
import {ResponseComponent} from './others/response/response.component';
import {FinanceComponent} from './others/finance/finance.component';
import {HomeComponent} from './home/home.component';
import {AddNewsComponent} from './new-news-layout/add-news/add-news.component';
import {NewNewsComponent} from './new-news-layout/new-news/new-news.component';
import {NewNewsLayoutComponent} from './new-news-layout/new-news-layout.component';
import {NewsCatalogComponent} from './news-catalog/news-catalog.component';
import {LoginComponent} from './login/login.component';
import {ExitOrderGuard} from './exit.order.guard';
import {RegisterComponent} from './register/register.component';

const routes: Routes = [
  {path: 'sport', component: SportComponent},
  {path: 'politics', component: PoliticsComponent},
  {path: 'science', component: ScienceComponent},
  {path: 'home', component: HomeComponent},
  {path: 'new', component: NewNewsLayoutComponent},
  {path: 'add', component: NewsCatalogComponent, canDeactivate: [ExitOrderGuard]},
  {path: 'register', component: RegisterComponent, canDeactivate: [ExitOrderGuard]},
  {path: 'login', component: LoginComponent, canDeactivate: [ExitOrderGuard]},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
