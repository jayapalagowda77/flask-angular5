import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Country } from '../country';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-countryaddedit',
  templateUrl: './countryaddedit.component.html'
})
export class CountryaddeditComponent implements OnInit {
  id: number;
  country: Country;
  constructor(private _countryservice: CountryService, private _route: ActivatedRoute) {
    this._route.params.subscribe(p => this.id = p['id']);
  }

  ngOnInit() {
    if (this.id) {
      this._countryservice.getCountryById(this.id).subscribe(d => this.country = d);
    } else {
      this.country = new Country();
    }
  }
  onCountryFormSubmit(country: Country) {
    console.log(country);
  }

}
