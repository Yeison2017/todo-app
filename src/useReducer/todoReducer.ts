import { ACTION_TYPES } from "../helpers/constants";

interface InitialState {
    id: number;
    desc: string;
    done: boolean;
}

interface Action {
    type: string;
    payload?: any;
}

export const todoReducer = (
    initialState: InitialState[] = [],
    action: Action
) => {
    switch (action.type) {
        case ACTION_TYPES.Add:
            return [...initialState, action.payload];

        case ACTION_TYPES.Delete:
            return initialState.filter((todo) => todo.id !== action.payload);

        case ACTION_TYPES.Toggle:
            return initialState.map((todo) => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    };
                }

                return todo;
            });
        default:
            return initialState;
    }
};
