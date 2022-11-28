import { Todo } from "../interfaces/Todo.interfaces";

export interface TodoItemProps extends Todo {
    onDeleteTodo: (id: number) => void;
    onToggleTodo: (id: number) => void;
}

const TodoItem = ({
    id,
    desc,
    done,
    onDeleteTodo,
    onToggleTodo,
}: TodoItemProps) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span
                className={`align-self-center ${
                    done ? "text-decoration-line-through" : ""
                }`}
                onClick={() => onToggleTodo(id)}
                aria-label="span"
            >
                {desc}
            </span>
            <button className="btn btn-danger" onClick={() => onDeleteTodo(id)}>
                Borrar
            </button>
        </li>
    );
};

export default TodoItem;
