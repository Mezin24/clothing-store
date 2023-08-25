import { Routes, Route } from 'react-router';
import { HomePage } from 'pages/home/HomePage';
import { Layout } from 'components/layout/Layout';

const Shop = () => {
  return <h1>I am a shop component</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;