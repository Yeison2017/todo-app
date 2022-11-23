import { useReducer } from "react";
import { TodoAdd, TodoList } from "./components";
import { Todo } from "./interfaces/Todo.interfaces";
import { todoReducer } from "./useReducer/todoReducer";

const initialState = [
    {
        id: new Date().getTime(),
        desc: "Aprender React",
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        desc: "Aprender Angular",
        done: false,
    },
    {
        id: new Date().getTime() * 6,
        desc: "Aprender Vue",
        done: false,
    },
];

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    const handleNewTodo = (newTodo: Todo) => {
        console.log("newTodo: ", newTodo);
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
