import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ObserverTodoListComponent } from './observer-todo-list/observer-todo-list.component';
import { ObserverTodoCounterComponent } from './observer-todo-counter/observer-todo-counter.component';
import { ObserverPatternComponent } from './observer-pattern.component';
import { ObserverPatternRoutingModule } from './observer-pattern.routing.module';

@NgModule({
  imports: [
    CommonModule,
    ObserverPatternRoutingModule
  ],
  declarations: [ObserverTodoListComponent, ObserverTodoCounterComponent, ObserverPatternComponent]
})
export class ObserverPatternModule { }
