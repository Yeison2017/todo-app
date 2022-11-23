export interface TodoListProps {
    todos: Todo[];
}

export interface Todo {
    id: number;
    desc: string;
    done: boolean;
}
