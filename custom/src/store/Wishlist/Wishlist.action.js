import {
    clearWishlist as sourceClearWishlist,
    removeItemFromWishlist as sourceRemoveItemFromWishlist,
    updateAllProductsInWishlist as sourceUpdateAllProductsInWishlist,
    updateIsLoading as sourceUpdateIsLoading,
} from 'SourceStore/Wishlist/Wishlist.action';

// TODO: implement removeItemFromWishlist
export const removeItemFromWishlist = sourceRemoveItemFromWishlist;

// TODO: implement updateAllProductsInWishlist
export const updateAllProductsInWishlist = sourceUpdateAllProductsInWishlist;

// TODO: implement updateIsLoading
export const updateIsLoading = sourceUpdateIsLoading;

// TODO: implement clearWishlist
export const clearWishlist = sourceClearWishlist;
