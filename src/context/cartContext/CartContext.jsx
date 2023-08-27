import { createContext, useCallback, useEffect, useState } from "react";

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


export const CartContext = createContext({
  isOpen: false,
  setIsOpen: () => {},
  cart: [],
  addItemToCart: (newItem) => {},
  itemsInCart: 0
}) 

export const CartProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);

  useEffect(() => {
    const cartItems = cart.reduce((acc, cur) => acc + cur.quantity, 0)
    setItemsInCart(cartItems)
  }, [cart]);

  const addItemToCart = useCallback((newCartItem) => {
    setCart(addCartItem(cart, newCartItem))
  }, [cart])
  
  const value = {
    isOpen, setIsOpen, cart, addItemToCart, itemsInCart
  }


  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}