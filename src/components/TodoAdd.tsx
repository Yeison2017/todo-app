import React, { useState } from "react";
import { Todo } from "../interfaces/Todo.interfaces";

type IInputElement = React.ChangeEvent<HTMLInputElement>;
type IFormElement = React.FormEvent<HTMLFormElement>;

interface TodoAddProps {
    onNewTodo: (newTodo: Todo) => void;
}

function TodoAdd({ onNewTodo }: TodoAddProps) {
    const [value, setValue] = useState<string>("");

    const onChange = (e: IInputElement) => {
        setValue(e.target.value);
    };

    const onSubmit = (e: IFormElement) => {
        e.preventDefault();
        if (value.trim().length <= 1) return;

        const newTodo: Todo = {
            id: new Date().getTime(),
            desc: value,
            done: false,
        };
        onNewTodo(newTodo);
        setValue("");
    };

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <input
                type="text"
                placeholder="¿Qué hay que hacer?"
                onChange={onChange}
                className="form-control"
                value={value}
            />

            <button
                type="submit"
                className="btn btn-outline-primary mt-1 btn-block"
            >
                Agregar
            </button>
        </form>
    );
}

export default TodoAdd;
