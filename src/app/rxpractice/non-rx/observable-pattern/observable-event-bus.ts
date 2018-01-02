import { ObservableTodo } from './observable-todo.model';

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

class DataStore {
    private todos: ObservableTodo[] = [];
    private todoListSubject = new SubjectImplementation();
    public todoList$: Observable = {
        subscribe: obs => {
            this.todoListSubject.subscribe(obs);
            obs.next(this.todos);
        },
        unsubscribe: obs => this.todoListSubject.unsubscribe(obs)
    };
    initializeTodoList(newList: ObservableTodo[]) {
        this.todos = newList.slice(0);
        this.todoListSubject.next(this.todos);
    }
    addToDo(newToDo: ObservableTodo) {
        this.todos.push(Object.assign({}, newToDo));
        this.todoListSubject.next(this.todos);
    }
}

export const store = new DataStore();
