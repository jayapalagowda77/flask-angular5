import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Film } from '../film';

@Component({
  selector: 'app-film-rating',
  templateUrl: './film-rating.component.html'
})
export class FilmRatingComponent implements OnInit {
  ratingList = [];
  private persistentRating: string[];
  constructor(private filmService: FilmService) {
    this.filmService.getFilmRating().subscribe(d => this.persistentRating = d);
  }

  ngOnInit() {
    this.filmService.getFilms(10).subscribe(data => {
      data.map(m => {
        this.fill_RatingList(m);
      });
    });
  }

  private fill_RatingList(m: Film) {
    if (this.ratingList.findIndex(index => index.value == m.rating) === -1) {
      if (this.persistentRating.indexOf(m.rating) !== -1) {
        this.ratingList.push({ check: true, value: m.rating });
      } else {
        this.ratingList.push({ check: false, value: m.rating });
      }
    }
  }

  filterRow(e) {
    if (e.target.checked) {
      this.filmService.setFilmRating({ new: true, value: [e.target.value] });
    } else {
      this.filmService.setFilmRating({ new: false, value: [e.target.value] });
    }
  }
}
