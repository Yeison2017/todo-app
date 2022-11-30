import React from "react";
import { render, screen } from "@testing-library/react";
import useTodo from "../src/hooks/useTodo";
import TodoApp from "../src/TodoApp";

jest.mock("../src/hooks/useTodo");
const useTodoMock = useTodo as jest.Mock;

describe("Pruebas en <TodoApp />", () => {
    useTodoMock.mockReturnValue({
        todos: [
            { id: 1, desc: "Aprender React", done: false },
            { id: 2, desc: "Aprender Angular", done: true },
        ],
        todosCount: 2,
        pendingTodosCount: 1,
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
    });

    test("debe de mostrar el componenete correctamente", () => {
        render(<TodoApp />);
        expect(screen.getByText("Aprender React")).toBeTruthy();
        expect(screen.getByText("Aprender Angular")).toBeTruthy();
        expect(screen.getByRole("textbox")).toBeTruthy();
    });
});
