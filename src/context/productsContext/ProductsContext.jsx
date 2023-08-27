import { createContext, useMemo, useState } from "react";
import SHOP_DATA from 'shop-data.json';

export const ProductsContext = createContext({
  products: []
}) 

export const ProductsContextProvider = ({children}) => {
  const [products, setProducts] = useState(SHOP_DATA);
  const value = useMemo(() => ({
    products
  }), [products])

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}