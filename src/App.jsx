import { Routes, Route } from 'react-router';
import { HomePage } from 'pages/home/HomePage';
import { Layout } from 'components/layout/Layout';
import { SignIn } from 'pages/signIn/SignIn';

const Shop = () => {
  return <h1>I am a shop component</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
