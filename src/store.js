import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./feature/cart-slice.js";
import productsReducer from "./feature/products-slice.js";
import categoriesReducer from "./feature/categories-slice.js";
import checkoutReducer from "./feature/checkout-slice.js";
export const store = configureStore({
    reducer: {
        cart: cartReducer,
        products: productsReducer,
        categories: categoriesReducer,
        checkout: checkoutReducer
    }
});