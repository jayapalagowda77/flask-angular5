import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CityComponent } from './city.component';

const routes: Routes = [
    { path: 'city', component: CityComponent /*, children: [
        { path: '', component:  },
        { path: 'add', component:  },
        { path: 'edit/:id', component: },
        { path: 'detail/:id', component:  }
    ]*/ }
];

@NgModule({
    imports: [CommonModule, RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CityRoutingModule {}
