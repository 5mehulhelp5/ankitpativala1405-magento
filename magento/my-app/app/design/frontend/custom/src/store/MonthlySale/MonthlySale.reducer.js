/* eslint-disable padding-line-between-statements */
import {
    MONTHLY_SALE_DECREMENT,
    MONTHLY_SALE_INCREMENT,
    MONTHLY_SALE_SET,
} from './MonthlySale.action';

/** @namespace Custom/Store/MonthlySale/Reducer/getInitialState */
export const getInitialState = () => ({
    value: 0,
});

/** @namespace Custom/Store/MonthlySale/Reducer/MonthlySaleReducer */
export const MonthlySaleReducer = (state = getInitialState(), action) => {
    switch (action.type) {
    case MONTHLY_SALE_INCREMENT:
        return { ...state, value: state.value + 1 };
    case MONTHLY_SALE_DECREMENT:
        return { ...state, value: state.value - 1 };
    case MONTHLY_SALE_SET: {
        const { value } = action.payload || {};
        return { ...state, value: Number(value) || 0 };
    }
    default:
        return state;
    }
};

export default MonthlySaleReducer;
