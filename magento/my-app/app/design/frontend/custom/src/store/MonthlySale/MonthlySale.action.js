/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */
// Action types
export const MONTHLY_SALE_INCREMENT = 'MONTHLY_SALE_INCREMENT';
export const MONTHLY_SALE_DECREMENT = 'MONTHLY_SALE_DECREMENT';
export const MONTHLY_SALE_SET = 'MONTHLY_SALE_SET';

/** @namespace Custom/Store/MonthlySale/Action/increment */
export const incrementMonthlySale = () => ({
    type: MONTHLY_SALE_INCREMENT,
});

/** @namespace Custom/Store/MonthlySale/Action/decrement */
export const decrementMonthlySale = () => ({
    type: MONTHLY_SALE_DECREMENT,
});

/** @namespace Custom/Store/MonthlySale/Action/set */
export const setMonthlySale = (value) => ({
    type: MONTHLY_SALE_SET,
    payload: { value },
});

export default {
    incrementMonthlySale,
    decrementMonthlySale,
    setMonthlySale,
};
