import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RxPracticeComponent } from './rxpractice.component';
import { BrowserEventComponent } from './non-rx/browser-event/browser-event.component';

const routes: Routes = [
    {
        path: 'rx', component: RxPracticeComponent, children: [
            { path: 'browser-event', component: BrowserEventComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RxPracticeRoutingModule { }

// export const routedComponents = [RxPracticeComponent];
