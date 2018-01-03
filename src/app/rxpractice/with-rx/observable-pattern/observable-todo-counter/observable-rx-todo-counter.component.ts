import { Component, OnInit } from '@angular/core';
import { store } from '../observable-rx-event-bus';
import { Subject } from 'rxjs/Subject';
import { Observer } from 'rxjs/Observer';
import { Todo } from '../../../shared/models/todo';

@Component({
  selector: 'app-observable-rx-todo-counter',
  templateUrl: './observable-rx-todo-counter.component.html'
})
export class ObservableRxTodoCounterComponent {
  todoCounter = 0;
  constructor() {
    console.log('todo list component is registered as observer...');
    store.subscribe(this);
  }
}
