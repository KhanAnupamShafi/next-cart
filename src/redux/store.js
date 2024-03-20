import { configureStore } from '@reduxjs/toolkit';
import { productsAPI } from './slice/apiSlice';
import cartReducer from './slice/cartSlice';
import modalReducer from './slice/modalSlice';
const store = configureStore({
  reducer: {
    [productsAPI.reducerPath]: productsAPI.reducer,
    modal: modalReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware),
});

export default store;
