import { loadCartFromLocalStorage } from '@/utils';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: loadCartFromLocalStorage() || [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // Check if the item already exists in the cart
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        // If the item exists, increase its quantity by 1
        existingItem.quantity++;
      } else {
        // If the item doesn't exist, add it with a quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
      saveCartToLocalStorage(state.items);
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveCartToLocalStorage(state.items);
    },
    updateItemQuantity: (state, action) => {
      const { itemId, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.id === itemId);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
        saveCartToLocalStorage(state.items);
      }
    },
    clearCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state.items);
    },
  },
});

export default cartSlice.reducer;
