import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';


@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html'
})
export class CountrylistComponent implements OnInit {
  countries: Country[];
  countryName: string;
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countryService.getCountries().subscribe( d => this.countries = d);
  }
}
