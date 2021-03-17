import React,{useState} from 'react';

function CartProduct({product,removeProduct}) {

  const [isMouseOver,setIsMouseOver]= useState(false);
  const classes = ['shelf-item'];
  if (!!isMouseOver) {
    classes.push('shelf-item--mouseover');
  }
  const handleMouseOver = () => {
    setIsMouseOver(true);
  };

  const handleMouseOut = () => {
    setIsMouseOver(false);
  };
  return (
      <div className={classes.join(' ')}>
        <div
          className="shelf-item__del"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={()=>removeProduct(product)}
        />
        <img
          className="shelf-item__thumb"
          src={product.srcUrl}
          alt={product.name}
        />
        <div className="shelf-item__details">
          <p className="title">{product.name}</p>
          <p className="desc">
            Quantity: {product.quantity}
          </p>
        </div>
        <div className="shelf-item__price">
          <b>{product.price}$</b>
        </div>
        <div className="clearfix" />
      </div>
  )
}



export default CartProduct;
