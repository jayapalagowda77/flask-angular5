import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CityComponent } from './city.component';
import { CityListComponent } from './city-list/city-list.component';
import { CityAddeditComponent } from './city-addedit/city-addedit.component';
import { CityDetailComponent } from './city-detail/city-detail.component';

const routes: Routes = [
    { path: 'city', component: CityComponent , children: [
        { path: '', component: CityListComponent  },
        { path: 'add', component: CityAddeditComponent },
        { path: 'edit/:id', component: CityAddeditComponent },
        { path: 'detail/:id', component: CityDetailComponent }
    ] }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CityRoutingModule {}
