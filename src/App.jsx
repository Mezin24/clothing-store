import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { HomePage } from 'pages/home/HomePage';
import { Layout } from 'components/layout/Layout';
import { Authentication } from 'pages/Authentication/Authentication';
import { Shop } from 'pages/shop/Shop';
import { Checkout } from 'pages/checkout/Checkout';
import Category from 'pages/Category/Category';
import { authObserver, createUserDocumentFromAuthData } from 'utils/firebase/config';
import { useDispatch } from 'react-redux';
import { setUserAction } from 'store/user/user.types';
import { ShopPage } from 'pages/shop/ShopPage';


const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    const unsubscribe = authObserver(user => {
      if (user) {
        createUserDocumentFromAuthData(user)
      }
      dispatch(setUserAction(user))
    })
    
    return unsubscribe
  }, [dispatch]);


  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<ShopPage/>}>
          <Route index element={<Shop />}/>
          <Route path=':category' element={<Category/>} />
        </Route>
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
