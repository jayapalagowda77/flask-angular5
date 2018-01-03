import { Todo } from '../../shared/models/todo';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observer } from 'rxjs/Observer';


class DataStore {
    private todoListSubject = new BehaviorSubject([]);
    public todoList$: Observable<Todo[]> = this.todoListSubject.asObservable();

    initializeTodoList(newList: Todo[]) {
        this.todoListSubject.next(newList.slice(0));
    }
    addToDo(newToDo: Todo) {
        const todos = this.getClone();
        todos.push(Object.assign({}, newToDo));
        this.todoListSubject.next(todos);
    }
    deleteToDo(deleted: Todo) {
        const todos = this.getClone();
        const index = todos.indexOf(deleted);
        if (index !== -1) {
            todos.splice(index, 1);
        }
        this.todoListSubject.next(todos);
    }
    toggleLessonView(todo: Todo) {
        console.log('toggling lesson');
        const todos = this.getClone();
        const index = todos.indexOf(todo);
        if (index !== -1) {
            todos[index].completed = !todo.completed;
        }
        this.todoListSubject.next(todos);
    }

    private getClone(): Todo[] {
        return this.todoListSubject.getValue().slice(0);
    }

}

export const store = new DataStore();
