

 import { createSelector } from '@reduxjs/toolkit';

//cart selectors:

const cartSelector = ({cartStore:{cart}}) => cart
 const sumOfQuantitySelector = (state) => state.cartStore.sumOfQuantity

export const totalPrice = createSelector(
  cartSelector,
  cart => cart.reduce((subTotal,pr)=> subTotal + pr.quantity * pr.price,0)
)

//shopping selectors:


export {cartSelector,sumOfQuantitySelector}
