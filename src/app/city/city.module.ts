import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CityRoutingModule } from './city.routing.module';


import { CityComponent } from './city.component';
import { AddeditComponent } from './addedit/addedit.component';
import { ListComponent } from './list/list.component';
import { DetailComponent } from './detail/detail.component';

import { CityService } from './city.service';


@NgModule({
  providers: [ CityService ],
  imports: [
    CommonModule,
    CityRoutingModule
  ],
  declarations: [CityComponent, AddeditComponent, ListComponent, DetailComponent]
})
export class CityModule { }
