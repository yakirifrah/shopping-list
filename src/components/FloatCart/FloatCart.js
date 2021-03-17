import {useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {delFromCart} from '../../store/cartSlice'
import * as selectors from '../../store/selectors';
import CartProduct from './CartProduct';

import './style.scss';

function FloatCart(){
  const [isOpen,setIsOpen] =useState(false);
  const cart = useSelector(selectors.cartSelector);
  const dispatch = useDispatch();
  const  sumOfQuantity = useSelector(selectors.sumOfQuantitySelector);
  const totalPrice = useSelector(state => selectors.totalPrice(state));

  useEffect(()=> {
    if (sumOfQuantity>0){
      setIsOpen(true);
    }
  },[sumOfQuantity])
  let classes = ['float-cart'];

  if (!!isOpen) {
    classes.push('float-cart--open');
  }
  function closeFloatCart(){
    setIsOpen(false);
  }
  function openFloatCart(){
    setIsOpen(true);
  }
  function removeProduct(product){
   dispatch(delFromCart(product));
  }

  const products = cart.map(pr=>(
    <CartProduct product={pr} removeProduct={removeProduct} key={pr.id}/>
))

  const proceedToCheckout=()=>{
    console.log(cart);
  }

 return(
   <div className={classes.join(' ')}>
     {isOpen && (
       <div onClick={closeFloatCart} className='float-cart__close-btn'>
            X
       </div>
     )}
     {!isOpen && (
       <span onClick={openFloatCart} className='bag bag--float-cart-closed'>
          <span className="bag__quantity">{sumOfQuantity}</span>
       </span>
     )}

     <div className="float-cart__content">
       <div className="float-cart__header">
            <span className="bag">
              <span className="bag__quantity">{sumOfQuantity}</span>
            </span>
         <span className="header-title">Bag</span>
       </div>
       <div className="float-cart__shelf-container">
         {products}
         {!cart.length && (
           <p className="shelf-empty">
             Add some products in the bag <br />
             :)
           </p>
         )}
       </div>
       <div className="float-cart__footer">
         <div className="sub">SUBTOTAL</div>
         <div className="sub-price">
           <p className="sub-price__val">
             {totalPrice}$
           </p>
         </div>
         <div onClick={proceedToCheckout} className="buy-btn">
           Checkout
         </div>
       </div>
     </div>
   </div>
 )
}






export default FloatCart;
