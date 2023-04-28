import React from 'react'
import ReactDOM from 'react-dom/client'
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from './pages/HomePage';
import AccountPage from './pages/AccountPage';
import AddressesPage from './pages/AddressesPage';
import CheckoutPage from './pages/CheckoutPage';
import OrdersPage from './pages/OrdersPage';
import PaymentMethodPage from './pages/PaymentMethodPage';

import ProductPage from './pages/ProductPage' 
import ProductSearch from './pages/ProductSearch';
import ShoppingCartPage from './pages/ShoppingCartPage';
import './index.css'

const router = createBrowserRouter([
  {
    path: "/", 
    element: <HomePage />
  },
  {
    path: "/account", 
    element: <AccountPage/>
  },
  {
    path: '/addresses',
    element: <AddressesPage />
  },
  {
    path: '/checkout',
    element: <CheckoutPage />
  },
  {
    path: "/orders", 
    element: <OrdersPage />
  },
   {
    path: "/paymentmethods", 
    element: <PaymentMethodPage/>
  },
  {
    path: "/product", 
    element: <ProductPage/>
  },
  {
    path: "/productsearch", 
    element: <ProductSearch/>
  },
  {
    path: "/shoppingcart", 
    element: <ShoppingCartPage/>
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
  </React.StrictMode>,
)


// <BrowserRouter>
// <Routes>
//   <Route path="/" element={<App />}></Route>
//   <Route path="/product" element={<ProductPage />}></Route>
// </Routes>

// </BrowserRouter>