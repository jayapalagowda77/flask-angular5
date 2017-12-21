import { Component, OnInit } from '@angular/core';
import { City } from '../city';
import { CityService } from '../city.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addedit',
  templateUrl: './addedit.component.html'
})
export class AddeditComponent implements OnInit {
  id: number;
  city: City;
  constructor(private cityService: CityService, private route: ActivatedRoute) {
    this.route.params.subscribe(p => this.id = p['id']);
  }

  ngOnInit() {
    if (this.id) {
      this.cityService.getCityByCityId(this.id).subscribe(d => this.city = d);
    } else {
      this.city = new City();
    }
  }

}
