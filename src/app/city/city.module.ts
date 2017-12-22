import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city.routing.module';


import { CityComponent } from './city.component';
import { CityService } from './city.service';
import { CityAddeditComponent } from './city-addedit/city-addedit.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityDetailComponent } from './city-detail/city-detail.component';


@NgModule({
  providers: [ CityService ],
  imports: [
    CommonModule,
    CityRoutingModule
  ],
  declarations: [CityComponent, CityAddeditComponent, CityListComponent, CityDetailComponent]
})
export class CityModule { }
