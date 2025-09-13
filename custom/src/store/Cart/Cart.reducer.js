import {
    CART_TOTALS as SOURCE_CART_TOTALS,
    CartReducer as SourceCartReducer,
    getInitialState as sourceGetInitialState,
    updateCartTotals as sourceUpdateCartTotals,
    updateShippingPrice as sourceUpdateShippingPrice,
} from 'SourceStore/Cart/Cart.reducer';

// TODO: implement CART_TOTALS
export const CART_TOTALS = SOURCE_CART_TOTALS;

// TODO: implement updateCartTotals
export const updateCartTotals = sourceUpdateCartTotals;

// TODO: implement updateShippingPrice
export const updateShippingPrice = sourceUpdateShippingPrice;

// TODO: implement getInitialState
export const getInitialState = sourceGetInitialState;

// TODO: implement CartReducer
export const CartReducer = SourceCartReducer;

export default CartReducer;
