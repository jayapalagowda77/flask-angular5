import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city-detail',
  templateUrl: './city-detail.component.html'
})
export class CityDetailComponent implements OnInit {
  id: number;
  city: City;
  constructor(private cityService: CityService,
    private route: ActivatedRoute ) {
      this.route.params
      .subscribe(v => this.id = + v['id']);
    }

  ngOnInit() {
    this.cityService
    .getCityByCityId(this.id)
    .subscribe(d => this.city = d);
  }

}
