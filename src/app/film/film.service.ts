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

  setFilmRating(r: string[]) {
    if (this.filmRating.value.length === 0) {
      // console.log('length zero');
      this.filmRating.next(r);
    } else {
      // console.log('length not zero');
      let temp = this.filmRating.value;
      temp.concat(r);
      console.log(temp);
      // this.filmRating.next(r);
    }
  }

  getFilmRating(): BehaviorSubject<string[]> {
    return this.filmRating;
  }
}
