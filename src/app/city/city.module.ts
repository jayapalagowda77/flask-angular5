import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CityRoutingModule } from './city.routing.module';


import { CityComponent } from './city.component';
import { CityService } from './city.service';
import { CityAddeditComponent } from './city-addedit/city-addedit.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityDetailComponent } from './city-detail/city-detail.component';
import { CityFilterPipe } from './city-filter.pipe';



@NgModule({
  providers: [ CityService ],
  imports: [
    CommonModule,
    FormsModule,
    CityRoutingModule
  ],
  declarations: [CityComponent, CityAddeditComponent, CityListComponent, CityDetailComponent, CityFilterPipe]
})
export class CityModule { }
