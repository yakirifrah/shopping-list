import { createSlice } from '@reduxjs/toolkit'
import { products } from '../lib/products';

export const shoppingSlice = createSlice({
  name:'shopping',
  initialState:{
    products:Object.values(products).flat(2),
    categories:['Show all categories'].concat(Object.keys(products))
  },

  reducers: {
    filterByCategory:(state,action) => {
      const {payload}= action;
      state.products = products;
      if (payload === 'Show all categories') {
         state.products = Object.values(products).flat(2);
      }
      else {
         state.products = state.products[`${payload}`];
      }
    },
    searchProduct:(state,action) => {
      const {payload} = action;
      state.products = state.products.filter(el => el.name.toLowerCase().includes(payload.toLowerCase()));
    }
  }
});



export const {filterByCategory,searchProduct} = shoppingSlice.actions;


export default shoppingSlice.reducer;

