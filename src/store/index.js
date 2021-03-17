import { configureStore } from '@reduxjs/toolkit'
import  shoppingSlice   from './shoppingSlice';
import  cartSlice  from './cartSlice';

export default configureStore({
  reducer:{
    shopping:shoppingSlice,
    cartStore:cartSlice
  }
})
