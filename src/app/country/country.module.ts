import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CountryRoutingModule } from './country.routing.module';

import { CountryComponent } from './country.component';
import { CountryaddeditComponent } from './countryaddedit/countryaddedit.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { CountrydetailComponent } from './countrydetail/countrydetail.component';
import { CountryService } from './country.service';


@NgModule({
  providers: [CountryService],
  imports: [
    CommonModule,
    FormsModule,
    CountryRoutingModule
  ],
  declarations: [CountryComponent, CountryaddeditComponent, CountrylistComponent, CountrydetailComponent]
})
export class CountryModule { }
