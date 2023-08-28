import {CategoriesList} from 'components/categories/CategoriesList/CategoriesList'
import { Outlet } from 'react-router';

export const HomePage = () => {
  return (
    <>
    <CategoriesList/>
    {<Outlet/>}
    </>
  )
}