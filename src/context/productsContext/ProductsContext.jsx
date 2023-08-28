import { createContext, useMemo, useState, useEffect } from "react";
// import { addCollectionAndDocuments } from "utils/firebase/config";
import { getCategoriesAndDocuments } from "utils/firebase/config";

export const ProductsContext = createContext({
  products: []
}) 

export const ProductsContextProvider = ({children}) => {
  const [products, setProducts] = useState([]);

 /*
 ADD PRODUCTS FROM JS FILE TO FIRESTORE
  useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA)
  }, []);
*/
  
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories')
      console.log(categoryMap)
    }

    getCategoriesMap()
  }, []);

  const value = useMemo(() => ({
    products
  }), [products])

  return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
}