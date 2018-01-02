import { Component, OnInit } from '@angular/core';
import { Observer, store } from '../observable-event-bus';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-observable-todo-counter',
  templateUrl: './observable-todo-counter.component.html',
  styleUrls: ['./observable-todo-counter.component.css']
})
export class ObservableTodoCounterComponent implements Observer {
  todoCounter = 0;
  constructor() {
    console.log('todo list component is registered as observer...');
    store.todoList$.subscribe(this);
  }
  next(data: any) {
    console.log('counter component received data...' + data.length);
    this.todoCounter = data.length;
  }
}
