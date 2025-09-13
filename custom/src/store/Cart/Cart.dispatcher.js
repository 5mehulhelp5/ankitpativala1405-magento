import {
    CartDispatcher as SourceCartDispatcher,
    CURRENT_WEBSITE as SOURCE_CURRENT_WEBSITE,
} from 'SourceStore/Cart/Cart.dispatcher';

// TODO: implement CURRENT_WEBSITE
export const CURRENT_WEBSITE = SOURCE_CURRENT_WEBSITE;

/** @namespace Custom/Store/Cart/Dispatcher */
export class CartDispatcher extends SourceCartDispatcher {
    async addProductToCart(
        dispatch,
        options,
    ) {
        console.log(options, "==>options");

        return Promise.resolve();
    }
}

export default new CartDispatcher();
