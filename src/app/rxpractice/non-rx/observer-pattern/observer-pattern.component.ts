import { Component, OnInit } from '@angular/core';
import { globalEventBus, TODO_LIST_AVAILABLE, ADD_NEW_TODO } from './event-bus';
import { Todo, TestTodo } from '../../shared/models/todo';

@Component({
  selector: 'app-observer-pattern',
  templateUrl: './observer-pattern.component.html'
})
export class ObserverPatternComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('Subject broadcasted all todo list');
    globalEventBus.notifyObserver(TODO_LIST_AVAILABLE, TestTodo.slice(0));
  }

  addTodo(todoText: string) {
    globalEventBus.notifyObserver(ADD_NEW_TODO, todoText);
  }
}
