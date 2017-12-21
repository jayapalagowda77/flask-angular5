import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country/country.service';
import { Country } from '../country/country';
import { City } from '../city/city';
import { CityService } from '../city/city.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  author = 'Mandar Kumbre';
  countries: Country[];
  cities: City[];
  isCityDisable = true;
  constructor(private countryService: CountryService, private cityService: CityService) {
  }

  ngOnInit() {
    this.countryService.getCountries().subscribe(d =>  this.countries = d );
  }

  onCountry_Select(selected_CountryId: number) {
    this.cityService.getCityByCountry(selected_CountryId)
      .subscribe( d => {
        this.cities = d;
        this.isCityDisable = (d as City[]).length > 0 ? false : true;
      });
  }
}
