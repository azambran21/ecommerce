import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/product/productSlice";
import shoppingCartReducer from "../features/shoppingCart/shoppingCartSlice";

const store = configureStore({
  reducer: {
    products: productsReducer,
    shoppingCart: shoppingCartReducer
    // other reducers...
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch


export default store;