import { ACTION_TYPES } from "../../src/helpers/constants";
import {
    todoReducer,
    InitialState,
    Action,
} from "../../src/useReducer/todoReducer";

describe("Pruebas en el todoReducer", () => {
    const inicialState: InitialState[] = [
        {
            id: 1,
            desc: "Demo Todo",
            done: false,
        },
    ];

    test("debe de regresar el estado inicial", () => {
        const newState = todoReducer(inicialState, { type: "", payload: "" });
        expect(newState).toBe(inicialState);
    });

    test("debe de agregar un todo", () => {
        const actionAdd: Action = {
            type: ACTION_TYPES.Add,
            payload: {
                id: 2,
                desc: "Demo Todo 2",
                done: false,
            },
        };

        const newState = todoReducer(inicialState, actionAdd);
        expect(newState.length).toBe(2);
        expect(newState).toContain(actionAdd.payload);
    });

    test("debe de eliminar un TODO", () => {
        const actionRemove: Action = {
            type: ACTION_TYPES.Delete,
            payload: 1,
        };

        const newState = todoReducer(inicialState, actionRemove);
        expect(newState.length).toBe(0);
    });

    test("debe de realizar el Toggle del todo", () => {
        const actionRemove: Action = {
            type: ACTION_TYPES.Toggle,
            payload: 1,
        };

        const newState = todoReducer(inicialState, actionRemove);
        expect(newState[0].done).toBe(true);
    });
});
