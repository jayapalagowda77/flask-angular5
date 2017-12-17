import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CountryComponent } from './country.component';
import { CountrylistComponent } from './countrylist/countrylist.component';
import { CountryaddeditComponent } from './countryaddedit/countryaddedit.component';
import { CountrydetailComponent } from './countrydetail/countrydetail.component';

const routes: Routes = [
    { path: 'country', component: CountryComponent, children: [
        {path: '', component: CountrylistComponent},
        {path: 'add', component: CountryaddeditComponent},
        {path: 'edit/:id', component: CountryaddeditComponent},
        {path: 'detail/:id', component: CountrydetailComponent},
    ] }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CountryRoutingModule {}
