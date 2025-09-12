// TODO update this import when renamed
import { ACTION_TYPE } from './Counter.action';

/** @namespace Custom/Store/Counter/Reducer/getInitialState */
export const getInitialState = () => ({
    // TODO set initial state
});

/** @namespace Custom/Store/Counter/Reducer/CounterReducer */
export const CounterReducer = (state = getInitialState(), action) => {
    switch (action.type) {
    case ACTION_TYPE:
        // const { payload } = action;

        return {
            ...state,
            // TODO implement payload handling
        };

    default:
        return state;
    }
};

export default CounterReducer;
