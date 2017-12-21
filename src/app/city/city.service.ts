import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { City } from './city';

@Injectable()
export class CityService {

  constructor(private http: Http) { }
  getCities(): Observable<City[]> {
    return this.http.get('http://localhost:5000/api/city')
    .map(res => res.json());
  }
  getCityByCountry(countryId: number) {
    if (countryId === 0) { return null; }
    return this.http.get('http://localhost:5000/api/city/country/' + countryId)
      .map( res => res.json());
  }
  // getCityCountriesByCityId(cityId: number) {
  //   if (cityId === 0) { return null; }
  //   return this.http.get('http://localhost:5000/api/city/' + cityId)
  //     .map( res => res.json());
  // }
  getCityByCityId(cityId: number) {
    if (cityId === 0 ) { return null; }
    return this.http.get('http://localhost:5000/api/city/' + cityId)
      .map( res => res.json());
  }
}
