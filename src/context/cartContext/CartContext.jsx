import { createContext, useCallback, useEffect, useMemo, useState } from "react";

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

export const CartProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [itemsInCart, setItemsInCart] = useState(0);
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    const cartItems = cart.reduce((acc, cur) => acc + cur.quantity, 0)
    const total = cart.reduce((acc, cur) => acc + cur.quantity * cur.price, 0)
    setItemsInCart(cartItems)
    setTotalSum(total)
  }, [cart]);

  const addItemToCart = useCallback((newCartItem) => {
    setCart(addCartItem(cart, newCartItem))
  }, [cart])

  const removeItemFromCart = useCallback((itemId) => {
    setCart(decreaseCartItem(cart, itemId))
  }, [cart])

  const deleteItem = useCallback((id) => {
    setCart(prev => prev.filter(item => item.id !== id))
  }, [])
  
  const value = useMemo(() => ({
    isOpen, setIsOpen, cart, addItemToCart, itemsInCart, totalSum, deleteItem, removeItemFromCart
  }), [addItemToCart, cart, deleteItem, isOpen, itemsInCart, removeItemFromCart, totalSum])


  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}