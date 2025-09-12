/* eslint-disable babel/semi */
/* eslint-disable no-console */
/* eslint-disable no-trailing-spaces */
/* eslint-disable padding-line-between-statements */
/* eslint-disable @scandipwa/scandipwa-guidelines/use-namespace */
/* eslint-disable simple-import-sort/imports */
import { connect } from "react-redux";
import MonthlySaleComponents from "./MonthlySale.component";

export const mapStateToProps = (state) => {
    console.log("Full Redux State:", state);
    const slice = state?.MonthlySaleReducer || {};
    return {
        value: slice.value ?? 0,
        isLoading: slice.isLoading ?? false
    };
};

export const mapDispatchToProps = () => ({
   
});

export default connect(mapStateToProps, mapDispatchToProps)(MonthlySaleComponents);
