import { configureStore } from '@reduxjs/toolkit';
import { productsAPI } from './slice/apiSlice';
import modalReducer from './slice/modalSlice';

const store = configureStore({
  reducer: {
    [productsAPI.reducerPath]: productsAPI.reducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsAPI.middleware),
});

export default store;
