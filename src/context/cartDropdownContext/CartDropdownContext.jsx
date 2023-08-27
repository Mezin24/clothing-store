import { createContext, useMemo, useState } from "react";

export const CartDropdownContext = createContext({
  isOpen: false,
  setIsOpen: () => {}
}) 

export const CartDropdownProvider = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  const value = useMemo(() => ({
    isOpen, setIsOpen
  }), [isOpen, setIsOpen])

  return <CartDropdownContext.Provider value={value}>{children}</CartDropdownContext.Provider>
}