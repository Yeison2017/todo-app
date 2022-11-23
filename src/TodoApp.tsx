import { useEffect, useReducer } from "react";
import { TodoAdd, TodoList } from "./components";
import { ACTION_TYPES } from "./helpers/constants";
import { ITEM_LOCAL_STORAGE } from "./helpers/itemsLocalStorage";
import { Todo } from "./interfaces/Todo.interfaces";
import { todoReducer } from "./useReducer/todoReducer";

const initialState: Todo[] = [];

const init = () => {
    return JSON.parse(localStorage.getItem(ITEM_LOCAL_STORAGE.todo)!) || [];
};

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
        localStorage.setItem(ITEM_LOCAL_STORAGE.todo, JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo: Todo) => {
        const action = {
            type: ACTION_TYPES.Add,
            payload: todo,
        };

        dispatch(action);
    };

    return (
        <div className="container">
            <h2>
                TodoApp: 10 <small>pendientes: 2</small>
            </h2>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </div>
    );
};

export default TodoApp;
