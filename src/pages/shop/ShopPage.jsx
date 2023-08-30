import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom"
import { setCategoriesAction } from "store/categories/categories.types";
import { getCategoriesAndDocuments } from "utils/firebase/config";

export const ShopPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments('categories')
      dispatch(setCategoriesAction(categoryMap))
    }

    getCategoriesMap()
  }, [dispatch]);


  return (
    <>
      <Outlet/>
    </>
  )
}