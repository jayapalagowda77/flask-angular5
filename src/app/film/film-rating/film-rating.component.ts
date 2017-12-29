import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/distinct';

@Component({
  selector: 'app-film-rating',
  templateUrl: './film-rating.component.html',
  styleUrls: ['./film-rating.component.css']
})
export class FilmRatingComponent implements OnInit {
  ratings: string[];
  constructor(private filmService: FilmService) { this.ratings = []; }

  ngOnInit() {
    this.filmService.getFilms(10).subscribe(d => { d.map( r => {
      if (this.ratings.indexOf(r.rating) === -1) {
        this.ratings.push(r.rating);
      }
    }); });
  }

  filterRow(e) {
    if (e.target.checked) {
      this.filmService.setFilmRating({ new: true, value: [e.target.value] });
    } else {
      this.filmService.setFilmRating({ new: false, value: [e.target.value] });
    }
  }
}
