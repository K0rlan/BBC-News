import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {AppComponent} from './app.component';
import {NavComponent} from './nav/nav.component';
import {JumbotronComponent} from './jumbotron/jumbotron.component';
import {CardsComponent} from './cards/cards.component';
import {AddNewsComponent} from './new-news-layout/add-news/add-news.component';
import {NewNewsComponent} from './new-news-layout/new-news/new-news.component';
import {NewNewsLayoutComponent} from './new-news-layout/new-news-layout.component';
import {FormsModule} from '@angular/forms';
import {SportComponent} from './sport/sport.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './app-routing.module';
import {PoliticsComponent} from './politics/politics.component';
import {ScienceComponent} from './science/science.component';
import {CultureComponent} from './others/culture/culture.component';
import {ResponseComponent} from './others/response/response.component';
import {FinanceComponent} from './others/finance/finance.component';
import {HomeComponent} from './home/home.component';
import {FooterComponent} from './footer/footer.component';
// import { SportCardsComponent } from './sport/sport-cards/sport-cards.component';

import {SportCardsComponent} from './sport/sport-cards/sport-cards.component';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import {SummaryPipe} from './summary.pipe';
import { PoliticsCardsComponent } from './politics/politics-cards/politics-cards.component';
import { ScienceCardsComponent } from './science/science-cards/science-cards.component';
import { NewsCatalogComponent } from './news-catalog/news-catalog.component';
import { AddNewComponent } from './news-catalog/add-new/add-new.component';
import { NewListComponent } from './news-catalog/new-list/new-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {LikeModulePipe} from './news-catalog/new-list/LikeModule.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    JumbotronComponent,
    CardsComponent,
    AddNewsComponent,
    NewNewsComponent,
    NewNewsLayoutComponent,
    SportComponent,
    PoliticsComponent,
    ScienceComponent,
    CultureComponent,
    ResponseComponent,
    FinanceComponent,
    HomeComponent,
    FooterComponent,
    SportCardsComponent,
    SummaryPipe,
    PoliticsCardsComponent,
    ScienceCardsComponent,
    NewsCatalogComponent,
    AddNewComponent,
    NewListComponent,
    LikeModulePipe,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    Ng2SearchPipeModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
