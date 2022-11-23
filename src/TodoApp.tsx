import { useReducer, useState } from "react";
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
];

const TodoApp = () => {
    const [todos, dispatch] = useReducer(todoReducer, initialState);

    return (
        <>
            <h1>TodoApp</h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                    </ul>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form action="">
                        <input
                            type="text"
                            placeholder="¿Qué hay que hacer?"
                            className="form-control"
                        />

                        <button
                            type="submit"
                            className="btn btn-outline-primary mt-1 btn-block"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default TodoApp;
