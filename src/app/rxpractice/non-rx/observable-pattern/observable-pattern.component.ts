import { Component, OnInit } from '@angular/core';
import { ObservableTodo } from './observable-todo.model';
import { store } from './observable-event-bus';
import { testTodo } from './observable-todo.model';

@Component({
  selector: 'app-observable-pattern',
  templateUrl: './observable-pattern.component.html'
})
export class ObservablePatternComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    console.log('Top level component broadcast all todos....');
    store.initializeTodoList(testTodo.slice(0));
    setTimeout(() => {
      const newTodo = {
        id: Math.random(),
        description: 'New todo arriving from the backend'
      };
      store.addToDo(newTodo);
    }, 10000);
  }
  addTodo(todoText: string) {
    console.log('New Todo added by user explicitly.');
    const newTodo = {
      id: Math.random(),
      description: todoText
    };
    store.addToDo(newTodo);
  }
}
