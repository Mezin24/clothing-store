import { Routes, Route } from 'react-router';
import { HomePage } from 'pages/home/HomePage';
import { Layout } from 'components/layout/Layout';
import { Authentication } from 'pages/Authentication/Authentication';
import { Shop } from 'pages/shop/Shop';
import { Checkout } from 'pages/checkout/Checkout';
import Category from 'pages/Category/Category';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='shop'>
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
