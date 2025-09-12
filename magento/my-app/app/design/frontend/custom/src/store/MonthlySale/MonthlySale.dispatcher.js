/* eslint-disable simple-import-sort/imports */
/* eslint-disable no-unused-vars */
import { showNotification } from 'Store/Notification/Notification.action';
import { QueryDispatcher } from 'Util/Request/QueryDispatcher';
import { setMonthlySale } from './MonthlySale.action';

/** @namespace Custom/Store/MonthlySale/Dispatcher */
export class MonthlySaleDispatcher extends QueryDispatcher {
    constructor() {
        super('MonthlySale');
    }

    onSuccess(data, dispatch) {
        if (data && typeof data.value !== 'undefined') {
            dispatch(setMonthlySale(data.value));
        }
    }

    onError(error, dispatch) {
        dispatch(showNotification('error', 'Error fetching MonthlySale!', error));
    }

    prepareRequest(options) {
        // Example only. Replace with actual query if needed.
        // return MonthlySaleQuery.getQuery(options);
        return null;
    }
}

export default new MonthlySaleDispatcher();
