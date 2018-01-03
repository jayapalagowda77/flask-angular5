import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../shared/models/todo';
import { TODO_LIST_AVAILABLE, ADD_NEW_TODO, globalEventBus, Observer } from '../event-bus';

@Component({
  selector: 'app-observer-todo-list',
  templateUrl: './observer-todo-list.component.html'
})
export class ObserverTodoListComponent implements Observer {
  todoList: Todo[];
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

  toggleLessonView(todo: Todo) {
    console.log('toggling lesson');
    todo.completed = !todo.completed;
  }
}
