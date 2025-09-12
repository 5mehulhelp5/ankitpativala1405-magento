/* eslint-disable simple-import-sort/imports */
/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */
/* eslint-disable import/first */
import { INCREASE, DECREASE, RESET } from "./Counter.type";

/** @namespace Custom/Store/Counter/Action/action */
export const increase = () => ({
    type: INCREASE
});

export const decrease = () => ({
    type: DECREASE
});

export const reset = () => ({
    type: RESET
});
