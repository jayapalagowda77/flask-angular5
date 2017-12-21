import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html'
})
export class DetailComponent implements OnInit {
  city: City;
  id: number;
  constructor(private cityService: CityService, private route: ActivatedRoute) {
    this.route.params.subscribe(v => this.id = + v['id']);
   }

  ngOnInit() {
    this.cityService
    .getCityByCityId(this.id)
    .subscribe(d => this.city = d);
  }
}
