export const TODO_LIST_AVAILABLE = 'NEW_LIST_AVAILABLE';
export const ADD_NEW_TODO = 'ADD_NEW_TODO';

export interface Observer {
    notify(data: any);
}

interface Subject {
    registerObserver(eventType: string, obs: Observer);
    unregisterObserver(eventType: string, obs: Observer);
    notifyObserver(eventType: string, data: any);
}

export class EventBus implements Subject {
    private observers: { [key: string]: Observer[] } = {};
    registerObserver(eventType: string, obs: Observer) {
        this.observersPerEventType(eventType).push(obs);
    }
    unregisterObserver(eventType: string, obs: Observer) {
        const index = this.observersPerEventType(eventType).indexOf(obs);
        if (index !== -1) {
            this.observersPerEventType(eventType).splice(index, 1);
        }
    }
    notifyObserver(eventType: string, data: any) {
        this.observersPerEventType(eventType).forEach(obs => obs.notify(data));
    }

    private observersPerEventType(eventType: string): Observer[] {
        const observersPerEventType = this.observers[eventType];
        if (!observersPerEventType) {
            this.observers[eventType] = [];
        }
        return this.observers[eventType];
    }
}

export const globalEventBus = new EventBus();
