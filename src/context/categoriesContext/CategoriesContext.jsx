import { createContext, useMemo, useState, useEffect } from "react";
// import { addCollectionAndDocuments } from "utils/firebase/config";
import { getCategoriesAndDocuments } from "utils/firebase/config";

export const CategoriesContext = createContext({
  categories: {}
}) 

export const CategoriesContextProvider = ({children}) => {
  const [categories, setCategories] = useState({});

 /*
 ADD Categories FROM JS FILE TO FIRESTORE
  useEffect(() => {
    addCollectionAndDocuments('categories', SHOP_DATA)
  }, []);
*/
  
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories')
      setCategories(categoryMap)
    }

    getCategoriesMap()
  }, []);

  const value = useMemo(() => ({
    categories
  }), [categories])

  return <CategoriesContext.Provider value={value}>{children}</CategoriesContext.Provider>
}