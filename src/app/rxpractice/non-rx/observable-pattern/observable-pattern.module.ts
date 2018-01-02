import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObservablePatternComponent } from './observable-pattern.component';
import { ObservablePatternRoutingModule } from './observable-pattern.routing.module';
import { ObservableTodoCounterComponent } from './observable-todo-counter/observable-todo-counter.component';
import { ObservableTodoListComponent } from './observable-todo-list/observable-todo-list.component';

@NgModule({
  imports: [
    CommonModule,
    ObservablePatternRoutingModule
  ],
  declarations: [ObservablePatternComponent, ObservableTodoCounterComponent, ObservableTodoListComponent]
})
export class ObservablePatternModule { }
