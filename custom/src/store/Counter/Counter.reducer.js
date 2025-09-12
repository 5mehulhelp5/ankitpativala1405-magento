/* eslint-disable simple-import-sort/imports */
/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */
/* eslint-disable @scandipwa/scandipwa-guidelines/export-level-one */
// TODO update this import when renamed
// import { ACTION_TYPE } from './Counter.action';
import { INCREASE, DECREASE, RESET } from './Counter.type';

/** @namespace Custom/Store/Counter/Reducer/getInitialState */
// export const getInitialState = () => ({
//     // TODO set initial state
// });

/** @namespace Custom/Store/Counter/Reducer/CounterReducer */
const initialState = {
    value: 0
};

export const CounterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREASE:
            return {
                ...state,
                value: state.value + 1
            };
        case DECREASE:
            return {
                ...state,
                value: state.value - 1
            };
        case RESET:
            return {
                ...state,
                value: 0
            };
        default:
            return state;
    }
};

export default CounterReducer;