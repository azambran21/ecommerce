import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'

// Define a type for the slice state
interface ShoppingCartState {
  products: Product[],
  total: number
}
type Product = {
  id:number,
  title: string,
  price: number,
  description: string,
  category: object,
  images: string[],
  quantity: number
}

// Define the initial state using that type
const initialState: ShoppingCartState = {
  products: [],
  total: 0
}
/*
products: [{
    name: '',
    description: '',
    price: 0.00,
    qty: 0
  }],
  total: 0
*/

// products.filter((product, i) => product[i].id === payload.id);
const deleteProduct = (products: Product[], target:number, quantity: number, deleteCompletely: boolean) => { 
  if(deleteCompletely){
    //delete product from product array

    return products;
  }
  for(let i = 0; i < products.length; i++){
    if(products[i].id === target){
      products[i]['quantity'] = quantity;
      if(products[i]['quantity'] === 0){
        //delete product from product array
      }
    }
  }
  return products;
}

const totalItems = (products: Product[]){
  let total = 0;
  for(let i = 0; i < products.length; i++){
    total += products[i]['quantity'];
  }
  return total;
}

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state = initialState) => {
      state.total += 1
    },
    decrement: (state = initialState) => {
      state.total -= 1
    },
    addToCart: (state: ShoppingCartState = initialState, action: PayloadAction<Product>, quantity: number) => {
      // let newState = [...state.products]; //[...initialState.products, state]
      // newState.push(action.payload);
      if(!action.payload['quantity']){
        action.payload['quantity'] = quantity;
      }
      else{
        action.payload['quantity'] += quantity;
      }
      state.total = totalItems(state.products);
      state.products.push(action.payload);
      
    },
    removeFromCart: (state = initialState, action: PayloadAction<number>) => {
      state.products = deleteProduct(state.products, action.payload)
      
    },
  },
})

export const { increment, decrement, addToCart, removeFromCart } = shoppingCartSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectShoppingCart = (state: RootState) => state.shoppingCart.products;

export default shoppingCartSlice.reducer