import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from 'context/userContext/UserContext';
import { ProductsContextProvider } from 'context/productsContext/ProductsContext';
import { CartDropdownProvider } from 'context/cartDropdownContext/CartDropdownContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <ProductsContextProvider>
          <CartDropdownProvider>
            <App />
          </CartDropdownProvider>
        </ProductsContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
