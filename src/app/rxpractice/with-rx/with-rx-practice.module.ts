import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { ObservableRxPatternComponent } from './observable-pattern/observable-pattern-rx.component';
import { ObservableRxTodoCounterComponent } from './observable-pattern/observable-todo-counter/observable-rx-todo-counter.component';
import { ObservableRxTodoListComponent } from './observable-pattern/observable-todo-list/observable-rx-todo-list.component';

const routes: Routes = [
  { path: 'rx/observable-todolist', component: ObservableRxPatternComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ObservableRxPatternComponent,
    ObservableRxTodoCounterComponent,
    ObservableRxTodoListComponent
  ]
})
export class WithRxPracticeModule { }
