import { Todo } from '../../shared/models/todo';

export interface Observer {
    next(data: any);
}

export interface Observable {
    subscribe(obs: Observer);
    unsubscribe(obs: Observer);
}

interface Subject extends Observer, Observable {
}

class SubjectImplementation implements Subject {
    private observers: Observer[] = [];
    next(data: any) {
        this.observers.forEach(obs => obs.next(data));
    }
    subscribe(obs: Observer) {
        this.observers.push(obs);
    }
    unsubscribe(obs: Observer) {
        const index = this.observers.indexOf(obs);
        if (index !== -1) {
            this.observers.splice(index, 1);
        }
    }
}

class DataStore implements Observable {
    private todos: Todo[] = [];
    private todoListSubject = new SubjectImplementation();

    subscribe(obs: Observer) {
        this.todoListSubject.subscribe(obs);
        obs.next(this.todos);
    }
    unsubscribe(obs: Observer) {
        this.todoListSubject.unsubscribe(obs);
    }
    initializeTodoList(newList: Todo[]) {
        this.todos = newList.slice(0);
        this.broadcast();
    }
    addToDo(newToDo: Todo) {
        this.todos.push(Object.assign({}, newToDo));
        this.broadcast();
    }

    broadcast() {
        this.todoListSubject.next(this.todos.slice(0));
    }

    deleteToDo(deleted: Todo) {
        const index = this.todos.indexOf(deleted);
        if (index !== -1) {
            this.todos.splice(index, 1);
        }
        this.broadcast();
    }

    toggleLessonView(todo: Todo) {
        console.log('toggling lesson');
        const index = this.todos.indexOf(todo);
        if (index !== -1) {
            this.todos[index].completed = !todo.completed;
        }
        this.broadcast();
    }

}

export const store = new DataStore();
