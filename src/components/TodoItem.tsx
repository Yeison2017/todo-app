import { Todo } from "../interfaces/Todo.interfaces";

interface TodoItemProps extends Todo {
    onDeleteTodo: (id: number) => void;
}

const TodoItem = ({ id, desc, onDeleteTodo }: TodoItemProps) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="align-self-center">{desc}</span>
            <button className="btn btn-danger" onClick={() => onDeleteTodo(id)}>
                Borrar
            </button>
        </li>
    );
};

export default TodoItem;
