import CounterQuery from 'Query/Counter.query';
// TODO update this import when action is done
import { action } from 'Store/Counter/Counter.action';
import { showNotification } from 'Store/Notification/Notification.action';
import { QueryDispatcher } from 'Util/Request/QueryDispatcher';

/** @namespace Custom/Store/Counter/Dispatcher */
export class CounterDispatcher extends QueryDispatcher {
    constructor() {
        super('Counter');
    }

    onSuccess(data, dispatch, options) {
        // TODO implement state update
        // dispatch(action(data));
    }

    onError(error, dispatch, options) {
        dispatch(showNotification('error', 'Error fetching Counter!', error));
    }

    prepareRequest(options) {
        // TODO implement query retrieval
        // return CounterQuery.getQuery(options);
    }
}

export default new CounterDispatcher();
