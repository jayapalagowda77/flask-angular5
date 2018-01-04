import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html'
})
export class CityListComponent implements OnInit {
  cities$: Observable<City[]>;
  cityName: string;
  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cities$ = this.cityService.getCities();
  }
}
