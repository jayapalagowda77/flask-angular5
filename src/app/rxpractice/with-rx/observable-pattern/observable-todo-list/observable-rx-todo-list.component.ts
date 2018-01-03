import { Component, OnInit } from '@angular/core';
import { store } from '../observable-rx-event-bus';
import { Todo } from '../../../shared/models/todo';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-observable-rx-todo-list',
  templateUrl: './observable-rx-todo-list.component.html'
})
export class ObservableRxTodoListComponent implements OnInit {
  todoList: Todo[];
  ngOnInit(): void {
    console.log('Todo list component registered!');
    store.todoList$.subscribe();
  }

  toggleLessonView(todo: Todo) {
    store.toggleLessonView(todo);
  }
}
