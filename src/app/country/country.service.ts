import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import { Country } from './country';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class CountryService {

  constructor(private http: Http) { }

  getCountries(): Observable<Country[]> {
    return this.http.get('http://localhost:5000/api/country').map(res => res.json());
  }
}
