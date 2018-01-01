import { Component, OnInit } from '@angular/core';
import { ObserverTodo } from '../observer-todo.model';
import { TODO_LIST_AVAILABLE, ADD_NEW_TODO, globalEventBus, Observer } from '../event-bus';

@Component({
  selector: 'app-observer-todo-list',
  templateUrl: './observer-todo-list.component.html',
  styleUrls: ['./observer-todo-list.component.css']
})
export class ObserverTodoListComponent implements Observer {
  todoList: ObserverTodo[];
  constructor() {
    console.log('Todo list component registered!');
    globalEventBus.registerObserver(TODO_LIST_AVAILABLE, this);
    const crDt = new Date().getUTCHours() + ':' + new Date().getUTCMinutes();
    globalEventBus.registerObserver(ADD_NEW_TODO, {
      notify: todoText => {
        this.todoList.push({
          id: Math.random(),
          description: todoText
        });
      }
    });
  }

  notify(data: any) {
    console.log('todo List component received data');
    this.todoList = data;
  }

  toggleLessonView(todo: ObserverTodo) {
    console.log('toggling lesson');
    todo.completed = !todo.completed;
  }
}
