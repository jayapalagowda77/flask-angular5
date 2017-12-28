import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FilmComponent } from './film.component';
import { FilmService } from './film.service';
import { FilmRoutingModule } from './film.routing.module';
import { FilmListComponent } from './film-list/film-list.component';
import { FilmAddeditComponent } from './film-addedit/film-addedit.component';
import { FilmRatingComponent } from './film-rating/film-rating.component';
import { FilmRatingPipe } from './pipe/film-rating.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    FilmRoutingModule
  ],
  declarations: [FilmComponent, FilmListComponent, FilmAddeditComponent, FilmRatingComponent, FilmRatingPipe],
  providers: [FilmService]
})
export class FilmModule { }
