import { createAction } from 'utils/reducer/reducer';
import { CART_ACTIONS } from './cart.types';

export const setIsCartOpen = (isOpen) =>
  createAction(CART_ACTIONS.SET_IS_OPEN, isOpen);

const addCartItem = (cart, newItem) => {
  const existingCartItem = cart.find((cartItem) => cartItem.id === newItem.id);

  if (existingCartItem) {
    return cart.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cart, { ...newItem, quantity: 1 }];
};

const decreaseCartItem = (cart, itemId) => {
  return [...cart]
    .map((item) =>
      item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
    )
    .filter((item) => item.quantity > 0);
};

export const addItemToCart = (cart, newCartItem) => {
  const newCart = addCartItem(cart, newCartItem);
  console.log(newCart);
  return createAction(CART_ACTIONS.SET_CART_ITEMS, newCart);
};

export const removeItemFromCart = (cart, itemId) => {
  const newCart = decreaseCartItem(cart, itemId);
  return createAction(CART_ACTIONS.SET_CART_ITEMS, newCart);
};

export const deleteItem = (cart, id) => {
  const newCart = cart.filter((item) => item.id !== id);
  return createAction(CART_ACTIONS.SET_CART_ITEMS, newCart);
};
