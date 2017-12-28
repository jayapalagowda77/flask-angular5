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
    this.filmService.getFilms(10).subscribe(d => { d.map( r => this.ratings.push(r.rating)); });
    // .distinct(d => d.map(m => m.rating)).subscribe(s => { console.log(s); });
  }

  filterRow(e) {
    if (e.target.checked) {
      this.filmService.setFilmRating([e.target.value]);
    } else {

    }
  }
}
