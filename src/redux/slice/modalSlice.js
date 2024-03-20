import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  modalType: null,
};
const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action) => {
      state.isOpen = true;
      state.modalType = action.payload.modalType;
    },
    closeModal: (state) => {
      state.isOpen = false;
      state.modalType = null;
    },
  },
});

export const { closeModal, openModal } = modalSlice.actions;
export default modalSlice.reducer;
