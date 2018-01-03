export class Todo {

    id: number;
    description: string;
    completed?: boolean;
}

export const TestTodo: Todo[] = [
    {
        id: 1,
        description: 'Setting up an Angular devlopment environment'
    },
    {
        id: 2,
        description: 'Running the Lessons Code'
    },
    {
        id: 3,
        description: 'Build Your First App - Hello World step by step'
    }
];
