import { Todo } from "../interfaces/Todo.interfaces";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onDeleteTodo: (id: number) => void;
}

const TodoList = ({ todos, onDeleteTodo }: TodoListProps) => {
    return (
        <ul className="list-group">
            {todos.map((todo: Todo, i) => (
                <TodoItem key={todo.id} {...todo} onDeleteTodo={onDeleteTodo} />
            ))}
        </ul>
    );
};

export default TodoList;
