import {  createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name:'cartStore',
  initialState:{
    cart:[],
    sumOfQuantity: 0,
  },

  reducers:{
    addToCart:(state,action) => {
      const { payload } = action;
      const { id } = payload;
      state.sumOfQuantity += 1;
      if (state.cart.findIndex(el=>el?.id === id) === -1)
        state.cart.push({ ...payload, quantity: 1 })
      else {
        const idx = state.cart.findIndex(el=>el?.id === id);
        state.cart[idx].quantity = state.cart[idx].quantity + 1;
      }
    },
    delFromCart:(state,action) => {
      const {payload:product} = action;
      const {quantity,id} = product;
      state.sumOfQuantity -= quantity;
     state.cart = state.cart.filter(el=>el.id!== id);

    }
  }
})





export const {addToCart,delFromCart} = cartSlice.actions;


export default cartSlice.reducer;
