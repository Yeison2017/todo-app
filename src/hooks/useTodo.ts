import { useEffect, useReducer, useState } from "react";
import { Todo } from "..//interfaces/Todo.interfaces";
import { ACTION_TYPES } from "../helpers/constants";
import { ITEM_LOCAL_STORAGE } from "../helpers/itemsLocalStorage";
import { todoReducer } from "../useReducer/todoReducer";

const init = () => {
    return JSON.parse(localStorage.getItem(ITEM_LOCAL_STORAGE.todo)!) || [];
};

const useTodo = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init);
    // const [todosCount, setTodosCount] = useState(0);
    // const [pendingTodosCount, setPendingTodosCount] = useState(0);

    useEffect(() => {
        localStorage.setItem(ITEM_LOCAL_STORAGE.todo, JSON.stringify(todos));
        // setTodosCount(todos.length);
        // setPendingTodosCount(todos.filter((todo) => !todo.done).length);
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
        todosCount: todos.length,
        pendingTodosCount: todos.filter((todo) => !todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    };
};

export default useTodo;
