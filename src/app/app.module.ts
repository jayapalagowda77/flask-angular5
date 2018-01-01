import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppRoutingModule } from './app.routing.module';
import { CityModule } from './city/city.module';
import { CountryModule } from './country/country.module';
import { UserModule } from './user/user.module';
import { FilmModule } from './film/film.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RxpracticeModule } from './rxpractice/rxpractice.module';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    CityModule,
    CountryModule,
    UserModule,
    FilmModule,
    RxpracticeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
