import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Film } from './film';

@Injectable()
export class FilmService {
  private currentRecord: Film;
  constructor(private http: Http) { }

  getFilms(limit: number): Observable<Film[]> {
    return this.http.get('http://localhost:5000/api/film').map(res => res.json());
  }

  setCurrentRecord(f: Film) {
    this.currentRecord = f;
  }

  getCurrentRecord(): Film {
    return this.currentRecord;
  }
}
