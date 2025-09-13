import {
    addProductToCart as sourceAddProductToCart,
    applyCouponToCart as sourceApplyCouponToCart,
    removeCouponFromCart as sourceRemoveCouponFromCart,
    removeProductFromCart as sourceRemoveProductFromCart,
    updateIsLoadingCart as sourceUpdateIsLoadingCart,
    updateShippingPrice as sourceUpdateShippingPrice,
    updateTotals as sourceUpdateTotals,
} from 'SourceStore/Cart/Cart.action';

// TODO: implement addProductToCart
export const addProductToCart = sourceAddProductToCart;

// TODO: implement removeProductFromCart
export const removeProductFromCart = sourceRemoveProductFromCart;

// TODO: implement updateTotals
export const updateTotals = sourceUpdateTotals;

// TODO: implement updateShippingPrice
export const updateShippingPrice = sourceUpdateShippingPrice;

// TODO: implement applyCouponToCart
export const applyCouponToCart = sourceApplyCouponToCart;

// TODO: implement removeCouponFromCart
export const removeCouponFromCart = sourceRemoveCouponFromCart;

// TODO: implement updateIsLoadingCart
export const updateIsLoadingCart = sourceUpdateIsLoadingCart;
