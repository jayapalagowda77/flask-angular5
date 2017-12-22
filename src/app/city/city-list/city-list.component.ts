import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html'
})
export class CityListComponent implements OnInit {
  cities: City[];
  constructor(private cityService: CityService) { }

  ngOnInit() {
    this.cityService.getCities()
    .subscribe(d => this.cities = d);
  }

}
