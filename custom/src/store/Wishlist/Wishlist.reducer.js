import {
    clearWishlist as sourceClearWishlist,
    deleteProperty as sourceDeleteProperty,
    getInitialState as sourceGetInitialState,
    PRODUCTS_IN_WISHLIST as SOURCE_PRODUCTS_IN_WISHLIST,
    removeItemFromWishlist as sourceRemoveItemFromWishlist,
    updateAllProductsInWishlist as sourceUpdateAllProductsInWishlist,
    WishlistReducer as SourceWishlistReducer,
} from 'SourceStore/Wishlist/Wishlist.reducer';

// TODO: implement PRODUCTS_IN_WISHLIST
export const PRODUCTS_IN_WISHLIST = SOURCE_PRODUCTS_IN_WISHLIST;

// TODO: implement getInitialState
export const getInitialState = sourceGetInitialState;

// TODO: implement deleteProperty
export const deleteProperty = sourceDeleteProperty;

// TODO: implement removeItemFromWishlist
export const removeItemFromWishlist = sourceRemoveItemFromWishlist;

// TODO: implement clearWishlist
export const clearWishlist = sourceClearWishlist;

// TODO: implement updateAllProductsInWishlist
export const updateAllProductsInWishlist = sourceUpdateAllProductsInWishlist;

// TODO: implement WishlistReducer
export const WishlistReducer = SourceWishlistReducer;

export default WishlistReducer;
