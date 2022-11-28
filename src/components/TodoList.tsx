import { Todo } from "../interfaces/Todo.interfaces";
import TodoItem from "./TodoItem";

export interface TodoListProps {
    todos: Todo[];
    onDeleteTodo: (id: number) => void;
    onToggleTodo: (id: number) => void;
}

const TodoList = ({ todos, onDeleteTodo, onToggleTodo }: TodoListProps) => {
    return (
        <ul className="list-group">
            {todos.map((todo: Todo, i) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                    onDeleteTodo={onDeleteTodo}
                    onToggleTodo={onToggleTodo}
                />
            ))}
        </ul>
    );
};

export default TodoList;
