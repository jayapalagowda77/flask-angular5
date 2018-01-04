import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';
import { Country } from '../country';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-countrylist',
  templateUrl: './countrylist.component.html'
})
export class CountrylistComponent implements OnInit {
  countries$: Observable<Country[]>;
  countryName: string;
  constructor(private countryService: CountryService) { }

  ngOnInit() {
    this.countries$ = this.countryService.getCountries();
  }
}
