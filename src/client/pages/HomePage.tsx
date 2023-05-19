import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Layout from '../components/Layout';
import { fetchProducts } from '../features/product/productSlice';
import { RootState } from '../app/store';
// import type { AppDispatch } from '@reduxjs/toolkit'


// const getProducts = () =>{
//   const dispatch = useDispatch();
//   const { products, loading, error } = useSelector((state: RootState) => state.products);
//   return dispatch(fetchProducts())
// }

const HomePage = () => {
   const dispatch = useDispatch();
   const { products, loading, error } = useSelector((state: RootState) => state.products);

  // useEffect(() => {
  //   dispatch(fetchProducts);
  // }, [dispatch]);

  return (
    <Layout>
      <h1 className='bg-green-500 text-2xl py-8'>THIS IS THE HOME PAGE</h1>
      <button onClick = {() => dispatch(fetchProducts())}>
        Fetch Products
      </button>
    </Layout>
  )
};

export default HomePage;

/* 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productsSlice';

const ProductsList = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: RootState) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
 



*/