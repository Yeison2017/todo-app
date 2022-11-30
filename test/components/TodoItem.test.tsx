import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import TodoItem from "../../src/components/TodoItem";
import { Todo } from "../../src/interfaces/Todo.interfaces";

describe("Pruebas en <TodoItem />", () => {
    const todo: Todo = {
        id: 1,
        desc: "Piedra del alma",
        done: false,
    };

    const onDeleteTodoMock: (id: number) => void = jest.fn();
    const onToggleTodoMock: (id: number) => void = jest.fn();

    beforeEach(() => jest.clearAllMocks());
    test("debe de mostrar el Todo Pendiente de completar", () => {
        render(
            <TodoItem
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
                {...todo}
            />
        );

        const liElement = screen.getByRole("listitem");
        expect(liElement.className).toBe(
            "list-group-item d-flex justify-content-between"
        );

        const spanElement = screen.getByLabelText("span");
        expect(spanElement.className).toContain("align-self-center");
        expect(spanElement.className).not.toContain(
            "text-decoration-line-through"
        );
    });

    test("debe de mostrar el Todo completado", () => {
        todo.done = true;

        render(
            <TodoItem
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
                {...todo}
            />
        );

        const spanElement = screen.getByLabelText("span");
        expect(spanElement.className).toContain("text-decoration-line-through");
    });

    test("debe de llamar el ToggleTodo cuando se hace click", () => {
        render(
            <TodoItem
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
                {...todo}
            />
        );

        const spanElement = screen.getByLabelText("span");
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
    });

    test("button debe de llamar el deleteTodo", () => {
        render(
            <TodoItem
                onDeleteTodo={onDeleteTodoMock}
                onToggleTodo={onToggleTodoMock}
                {...todo}
            />
        );

        const deleteButton = screen.getByRole("button");
        fireEvent.click(deleteButton);

        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
    });
});
