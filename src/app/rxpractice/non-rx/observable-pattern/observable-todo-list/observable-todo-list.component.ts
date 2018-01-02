import { Component, OnInit } from '@angular/core';
import { Observer, store } from '../observable-event-bus';
import { ObservableTodo } from '../observable-todo.model';

@Component({
  selector: 'app-observable-todo-list',
  templateUrl: './observable-todo-list.component.html',
  styleUrls: ['./observable-todo-list.component.css']
})
export class ObservableTodoListComponent implements Observer, OnInit {
  todoList: ObservableTodo[];
  ngOnInit(): void {
    console.log('Todo list component registered!');
    store.todoList$.subscribe(this);
  }

  next(data: ObservableTodo[]) {
    console.log('todo List component received data');
     this.todoList = data.slice(0);
  }

  toggleLessonView(todo: ObservableTodo) {
    console.log('toggling lesson');
    todo.completed = !todo.completed;
  }
}
