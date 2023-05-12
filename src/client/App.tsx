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
import './tailwind.css'
const App = () =>{
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
      return (
        <>
           <RouterProvider router = {router}/>
        </>
      )
}


export default App;
