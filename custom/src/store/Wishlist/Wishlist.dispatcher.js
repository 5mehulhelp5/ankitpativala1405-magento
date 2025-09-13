import {
    isWishlistEnabled as sourceIsWishlistEnabled,
    WishlistDispatcher as SourceWishlistDispatcher,
} from 'SourceStore/Wishlist/Wishlist.dispatcher';

// TODO: implement isWishlistEnabled
export const isWishlistEnabled = sourceIsWishlistEnabled;

/** @namespace Custom/Store/Wishlist/Dispatcher */
export class WishlistDispatcher extends SourceWishlistDispatcher {
    async addItemToWishlist(
        dispatch,
        options
    ) {
        console.log(options, "Dememdme");
    }
}

export default new WishlistDispatcher();
