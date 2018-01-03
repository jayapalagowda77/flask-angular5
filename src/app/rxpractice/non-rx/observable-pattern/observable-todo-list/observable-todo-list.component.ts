import { Component, OnInit } from '@angular/core';
import { Observer, store } from '../observable-event-bus';
import { Todo } from '../../../shared/models/todo';

@Component({
  selector: 'app-observable-todo-list',
  templateUrl: './observable-todo-list.component.html'
})
export class ObservableTodoListComponent implements Observer, OnInit {

  todoList: Todo[];
  ngOnInit(): void {
    console.log('Todo list component registered!');
    store.subscribe(this);
  }

  next(data: Todo[]) {
    console.log('todo List component received data');
     this.todoList = data;
  }

  toggleLessonView(todo: Todo) {
    store.toggleLessonView(todo);
  }
}
