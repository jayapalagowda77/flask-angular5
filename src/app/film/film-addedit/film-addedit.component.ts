import { Component, OnInit } from '@angular/core';
import { Film } from '../film';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-film-addedit',
  templateUrl: './film-addedit.component.html',
  styleUrls: ['./film-addedit.component.css']
})
export class FilmAddeditComponent implements OnInit {
  film: Film;
  constructor(private filmService: FilmService) { }

  ngOnInit() {
    this.film = this.filmService.getCurrentRecord();
  }

  showFilmDetails(film: Film) {
    console.log(film);
  }
}
