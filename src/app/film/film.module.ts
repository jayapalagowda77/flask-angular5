import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmComponent } from './film.component';
import { FilmService } from './film.service';
import { FilmRoutingModule } from './film.routing.module';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmAddeditComponent } from './film-addedit/film-addedit.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FilmRoutingModule
  ],
  declarations: [FilmComponent, FilmListComponent, FilmAddeditComponent],
  providers: [FilmService]
})
export class FilmModule { }
