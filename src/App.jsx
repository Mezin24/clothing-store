import { Routes, Route } from 'react-router';
import { HomePage } from 'pages/home/HomePage';
import { Layout } from 'components/layout/Layout';
import { Authentication } from 'pages/Authentication/Authentication';
import { Shop } from 'pages/shop/Shop';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<Shop />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
