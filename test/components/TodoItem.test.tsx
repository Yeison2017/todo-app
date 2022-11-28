import React from "react";
import { render, screen } from "@testing-library/react";
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
});
