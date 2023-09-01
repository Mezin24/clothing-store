import { CART_ACTIONS } from './cart.types';

const INITIAL_STATE = {
  isOpen: false,
  cart: [],
};

export const cartReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case CART_ACTIONS.SET_IS_OPEN:
      return {
        ...state,
        isOpen: payload,
      };
    case CART_ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        cart: payload,
      };

    default:
      return state;
  }
};
