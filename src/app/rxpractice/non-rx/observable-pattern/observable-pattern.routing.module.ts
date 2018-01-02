import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ObservablePatternComponent } from './observable-pattern.component';

const routes: Routes = [
    { path: 'rx/observable-todolist', component: ObservablePatternComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ObservablePatternRoutingModule {}
