/* eslint-disable babel/semi */
/* eslint-disable no-console */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padding-line-between-statements */
/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */
/* eslint-disable simple-import-sort/imports */
import { connect } from "react-redux";
import MonthlySaleComponents from "./MonthlySale.component";
import {
    decrementMonthlySale,
    incrementMonthlySale,
} from "Store/MonthlySale/MonthlySale.action";

export const mapStateToProps = (state) => {
    const slice = state.MonthlySaleReducer || state.MonthlySale || {};
    console.log("slice", slice);
    const value = typeof slice.value === 'number' ? slice.value : 0;
    console.log("value", value)
    return { value };
};

export const mapDispatchToProps = (dispatch) => ({
    increment: () => dispatch(incrementMonthlySale()),
    decrement: () => dispatch(decrementMonthlySale()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthlySaleComponents);
