import { createSelector } from 'reselect';

const calcItemsInCart = (cart) =>
  cart.reduce((acc, cur) => acc + cur.quantity, 0);
const calcTotalSum = (cart) =>
  cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0);

const selectCartReducer = (state) => state.cart;

export const getCartItems = createSelector(
  selectCartReducer,
  (cart) => cart.cart
);
export const getCartIsOpen = createSelector(
  selectCartReducer,
  (cart) => cart.isOpen
);
export const getCartTotalSum = createSelector(selectCartReducer, (cart) =>
  calcTotalSum(cart.cart)
);
export const getItemsInCart = createSelector(selectCartReducer, (cart) =>
  calcItemsInCart(cart.cart)
);
