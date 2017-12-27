import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../film';

@Component({
  selector: 'app-film-list',
  templateUrl: './film-list.component.html',
  styleUrls: ['./film-list.component.css']
})
export class FilmListComponent implements OnInit {
  films: Film[];
  constructor(private filmService: FilmService) {
  }

  ngOnInit() {
    this.filmService.getFilms(10).subscribe(d => this.films = d);
  }

  filmRowClick(film: Film) {
    this.filmService.setCurrentRecord(film);
  }
}
