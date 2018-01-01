import { Component, OnInit } from '@angular/core';
import { globalEventBus, TODO_LIST_AVAILABLE, ADD_NEW_TODO, Observer } from '../event-bus';

@Component({
  selector: 'app-observer-todo-counter',
  templateUrl: './observer-todo-counter.component.html',
  styleUrls: ['./observer-todo-counter.component.css']
})
export class ObserverTodoCounterComponent implements Observer {
  todoCounter = 0;
  constructor() {
    console.log('todo list component is registered as observer...');
    globalEventBus.registerObserver(TODO_LIST_AVAILABLE, this);

    globalEventBus.registerObserver(ADD_NEW_TODO, {
      notify: todoText => this.todoCounter += 1
    });
  }
  notify(data: any) {
    console.log('counter component received data...');
    this.todoCounter = data.length;
  }
}
