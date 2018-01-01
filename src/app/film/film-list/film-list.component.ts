import { Component, OnInit, EventEmitter } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../film';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films: Film[];
  filmRating: string[];
  constructor(private filmService: FilmService) {}

  ngOnInit() {
    this.filmService.getFilms(10).subscribe(d => this.films = d);
    this.filmService.getFilmRating().subscribe( r => this.filmRating = r);
  }

  filmRowClick(film: Film) {
    this.filmService.setCurrentRecord(film);
  }
}
