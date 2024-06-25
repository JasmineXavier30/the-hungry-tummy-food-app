import { configureStore } from "@reduxjs/toolkit";
import cartSliceReducer from "./slices/cartSlice";

const appStore = configureStore({
    reducer: {
        cartReducer: cartSliceReducer
    }
});

export default appStore;