import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ListComponent } from './list/list.component';
import { AddeditComponent } from './addedit/addedit.component';
import { DetailComponent } from './detail/detail.component';
import { CityComponent } from './city.component';

const routes: Routes = [
    { path: 'city', component: CityComponent, children: [
        { path: '', component: ListComponent },
        { path: 'add', component: AddeditComponent },
        { path: 'edit/:id', component: AddeditComponent },
        { path: 'detail/:id', component: DetailComponent }
    ] }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CityRoutingModule {}
