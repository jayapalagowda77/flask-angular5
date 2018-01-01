import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ObserverPatternComponent } from './observer-pattern.component';

const routes: Routes = [
    { path: 'rx/observer-todolist', component: ObserverPatternComponent },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ObserverPatternRoutingModule { }

// export const routedComponents = [ObserverPatternComponent];
