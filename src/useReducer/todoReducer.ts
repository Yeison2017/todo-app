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
        default:
            return initialState;
    }
};
