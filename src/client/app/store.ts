import { configureStore } from "@reduxjs/toolkit";
import { productSlice } from "../features/product/productSlice";
import shoppingCartSlice from "../features/shoppingCart/shoppingCartSlice";

export const store = configureStore({
    reducer:{
        product: productSlice.reducers,
        cart: shoppingCartSlice.reducers,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
