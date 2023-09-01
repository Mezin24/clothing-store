import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";
import { fetchCategoriesAsync } from "store/categories/categories.types";

export const ShopPage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const getCategoriesMap = async () => {
      dispatch(fetchCategoriesAsync())
    }
    getCategoriesMap()
  }, [dispatch]);


  return (
    <>
      <Outlet/>
    </>
  )
}