import { CART_ACTIONS } from './cart.actions';

const INITIAL_STATE = {
  isOpen: false,
  cart: [],
  totalSum: 0,
  itemsInCart: 0,
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
        ...payload,
      };

    default:
      return state;
  }
};
