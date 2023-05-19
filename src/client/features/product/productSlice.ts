import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../app/store'
import { Product } from '../../../types'

// Define a type for the slice state
interface ProductsState {
  products: Product[],
  loading: boolean,
  error: string | null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async () => {
  console.log('fetchProducts pressed')
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  console.log(data);
  return data as Product[];
});


// Define the initial state using that type
const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null
}

//hold all products in state
//for search purposes 
//getAllProducts: () => make Fetch request to API and store all items in a products array state (WHY? bc making API calls are expensive)
//getProduct: (payload) => returns a type of product
    //getWomensClothing: () => filter all products and retuern to UI ana rray of womens clothing
    //getMensClothing: () => filter all products and return to UI an array with mens clothing
    //getElectronics: () => filter all products and return 

export const productSlice = createSlice({
  name: 'products',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => { //AsyncThunk<Product[], void, AsyncThunkConfig>
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? 'Error fetching products';
      });
  },
})

export default productSlice.reducer;

// Other code such as selectors can use the imported `RootState` type
// export const selectShoppingCart = (state: RootState) => state.shoppingCart.products;

// export default productSlice.reducer

//function that filters according to appearance of search term in title
// const filterSearchTerm = (products: Product[], searchTerm : string) =>{
//     let filteredArray = [];
//     for(let i = 0; i < products.length; i++){
//         let newProduct = products.title;
//         if(newProduct.search(/searchTerm/i) !== -1){
//             filteredArray.push(products[i])
//         }
//     }
//     return filteredArray;
// }