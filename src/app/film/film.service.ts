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
    return this.http.get('http://localhost:5000/api/film?limit=' + limit).map(res => res.json());
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
    current = current.length > 0 ?
              r.new ?
                  current.concat(r.value)
                : current.filter(f => f != r.value)
              : r.value;
    this.filmRating.next(current);
  }

  getFilmRating(): BehaviorSubject<string[]> {
    return this.filmRating;
  }
}
