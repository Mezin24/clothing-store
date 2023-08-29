import { createContext, useCallback, useEffect, useMemo, useReducer, useState } from "react";
import { createAction } from "utils/reducer/reducer";

const addCartItem = (cart, newItem) => {
  const existingCartItem = cart.find(
    (cartItem) => cartItem.id === newItem.id
  );

  if (existingCartItem) {
    return cart.map((cartItem) =>
      cartItem.id === newItem.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cart, { ...newItem, quantity: 1 }];
}

const decreaseCartItem = (cart, itemId) => {
  return [...cart]
    .map(item => item.id === itemId ? ({...item, quantity:  item.quantity - 1 }) : item)
    .filter(item => item.quantity > 0)
}

const calcItemsInCart = cart => cart.reduce((acc, cur) => acc + cur.quantity, 0)
const calcTotalSum = cart => cart.reduce((acc, cur) => acc +( cur.quantity * cur.price), 0)

export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cart: [],
  addItemToCart: (newItem) => {},
  removeItemFromCart: (itemId) => {},
  itemsInCart: 0,
  totalSum: 0,
  deleteItem: (id) => {}
}) 

const CART_ACTIONS = {
  SET_IS_OPEN: 'SET_IS_OPEN',
  SET_CART_ITEMS: 'SET_CART_ITEMS', 
}

const INITIAL_STATE = {
  isOpen: false,
  cart: [],
  totalSum: 0,
  itemsInCart: 0
}

const cartReducer = (state, {type, payload}) => {
  switch (type) {
    case CART_ACTIONS.SET_IS_OPEN:
      return {
        ...state,
        isOpen: payload
      }
    case CART_ACTIONS.SET_CART_ITEMS:
      return {
        ...state,
        ...payload
      }
  
    default:
      throw Error(`Invalid action type: ${type}`)
  }
}

export const CartProvider = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, INITIAL_STATE)
  const {isOpen, cart, totalSum, itemsInCart} = state

  const updateCartReducer = useCallback((type, cart) => {
    const itemsInCart = calcItemsInCart(cart)
    const totalSum = calcTotalSum(cart)
    dispatch(createAction(type, {
      cart,
      itemsInCart,
      totalSum
    }))
  }, [])

  const setIsOpen = useCallback((isOpen) => {
    dispatch(createAction(CART_ACTIONS.SET_IS_OPEN, isOpen))
  }, [])
  
  const addItemToCart = useCallback((newCartItem) => {
    const newCart = addCartItem(cart, newCartItem)
    updateCartReducer(CART_ACTIONS.SET_CART_ITEMS, newCart)
  }, [cart, updateCartReducer])
  
  const removeItemFromCart = useCallback((itemId) => {
    const newCart = decreaseCartItem(cart, itemId)
    updateCartReducer(CART_ACTIONS.SET_CART_ITEMS, newCart)
  }, [cart, updateCartReducer])

  const deleteItem = useCallback((id) => {
    const newCart = cart.filter(item => item.id !== id)
    updateCartReducer(CART_ACTIONS.SET_CART_ITEMS, newCart)
  }, [cart, updateCartReducer])
  
  const value = useMemo(() => ({
    isOpen, setIsOpen, cart, addItemToCart, itemsInCart, totalSum, deleteItem, removeItemFromCart
  }), [addItemToCart, cart, deleteItem, isOpen, itemsInCart, removeItemFromCart, setIsOpen, totalSum])


  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}