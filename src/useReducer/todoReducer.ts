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
        case "ABC":
            throw new Error("Not implemented");
        default:
            return initialState;
    }
};
