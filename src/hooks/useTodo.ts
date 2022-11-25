import { useEffect, useReducer } from "react";
import { Todo } from "..//interfaces/Todo.interfaces";
import { ACTION_TYPES } from "../helpers/constants";
import { ITEM_LOCAL_STORAGE } from "../helpers/itemsLocalStorage";
import { todoReducer } from "../useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem(ITEM_LOCAL_STORAGE.todo)!) || [];
};

const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);

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

    const handleDeleteTodo = (id: number) => {
        dispatch({
            type: ACTION_TYPES.Delete,
            payload: id,
        });
    };

    const handleToggleTodo = (id: number) => {
        dispatch({
            type: ACTION_TYPES.Toggle,
            payload: id,
        });
    };
    return {
        todos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    };
};

export default useTodo;
