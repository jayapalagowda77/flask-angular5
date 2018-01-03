import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


import { BrowserEventComponent } from './browser-event/browser-event.component';

import { ObserverTodoListComponent } from './observer-pattern/observer-todo-list/observer-todo-list.component';
import { ObserverTodoCounterComponent } from './observer-pattern/observer-todo-counter/observer-todo-counter.component';
import { ObserverPatternComponent } from './observer-pattern/observer-pattern.component';

import { ObservableTodoListComponent } from './observable-pattern/observable-todo-list/observable-todo-list.component';
import { ObservableTodoCounterComponent } from './observable-pattern/observable-todo-counter/observable-todo-counter.component';
import { ObservablePatternComponent } from './observable-pattern/observable-pattern.component';


const routes: Routes = [
    { path: 'nonrx/browser-event', component: BrowserEventComponent },
    { path: 'nonrx/observer-todolist', component: ObserverPatternComponent },
    { path: 'nonrx/observable-todolist', component: ObservablePatternComponent },
];

@NgModule({
    declarations: [
        BrowserEventComponent,
        ObserverTodoListComponent,
        ObserverTodoCounterComponent,
        ObserverPatternComponent,
        ObservableTodoListComponent,
        ObservableTodoCounterComponent,
        ObservablePatternComponent
    ],
    imports: [ CommonModule, RouterModule.forChild(routes)],
    exports: [],
    providers: [],
})
export class NonRxModule {}
