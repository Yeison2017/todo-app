import { Todo, TodoListProps } from "../interfaces/Todo.interfaces";
import TodoItem from "./TodoItem";

const TodoList = ({ todos }: TodoListProps) => {
    return (
        <ul className="list-group">
            {todos.map((todo: Todo, i) => (
                <TodoItem key={todo.id} {...todo} />
            ))}
        </ul>
    );
};

export default TodoList;
