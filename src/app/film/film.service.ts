import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Film } from './film';

@Injectable()
export class FilmService {
  private currentRecord = new BehaviorSubject<Film>(new Film());
  private filmRating = new BehaviorSubject<string[]>([]);
  constructor(private http: Http) { }

  getFilms(limit: number): Observable<Film[]> {
    return this.http.get('http://localhost:5000/api/film').map(res => res.json());
  }

  setCurrentRecord(f: Film) {
    this.currentRecord.next(f);
  }

  getCurrentRecord(): BehaviorSubject<Film> {
    return this.currentRecord;
  }

  setFilmRating(r: any) {
    let current = this.filmRating.getValue();
    // console.log(current);
    if (r.new) {
      if (current.length > 0) {
        current = current.concat(r.value);
        this.filmRating.next(current);
      } else {
        this.filmRating.next(r.value);
      }
    } else {
      if (current.length > 0) {
        this.filmRating.next(current.filter(f => f != r.value));
      } else {
        this.filmRating.next(r.value);
      }
    }
  }

  getFilmRating(): BehaviorSubject<string[]> {
    return this.filmRating;
  }
}
