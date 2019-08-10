import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { FiltersComponent } from './components/filters/filters.component';
import { SeeAllComponent } from './components/see-all/see-all.component';
// import { SortComponent } from './components/sort/sort.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FiltersComponent,
    CardsComponent,
    SeeAllComponent,
    // SortComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
