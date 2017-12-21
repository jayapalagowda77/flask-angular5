import { Component, OnInit } from '@angular/core';
import { Country } from '../country';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countrydetail',
  templateUrl: './countrydetail.component.html'
})
export class CountrydetailComponent implements OnInit {
  id: number;
  country: Country;
  constructor(private countryService: CountryService, private route: ActivatedRoute) { 
    this.route.params.subscribe(p => this.id = + p['id']);
  }
  ngOnInit() {
    this.countryService.getCountryById(this.id).subscribe(d => this.country = d);
  }
}
