
import React from 'react';
import styled from 'styled-components/macro';
import {  useDispatch } from 'react-redux';
import {addToCart} from '../../store/cartSlice';

function Item({item}) {

  const dispatch = useDispatch();
function buyProduct(){
  dispatch(addToCart(item));
}
  return (
    <S.ItemWrapper>
      <S.ItemTumblr>
        <S.Tumblr src={item.srcUrl} alt={item.name} />
      </S.ItemTumblr>
      <S.P>{item.name}</S.P>
      <S.Price>{item.price}$</S.Price>
      <S.BuyButton onClick={buyProduct} className='buy-btn'>Add to cart</S.BuyButton>
    </S.ItemWrapper>
  )
}

const S={};
S.BuyButton = styled.div`
  background-color: #1b1a20;
  color: #fff;
  padding: 15px 0;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.2s;

`
S.ItemWrapper =styled.div`
  text-align: center;
  box-sizing: border-box;
  border: 1px solid transparent;
  cursor: pointer;
  padding-top:5px;
  &:hover {
    border: 1px solid #eee;
    .buy-btn {
    background-color: #eabf00;
      
    }
  }
`
S.ItemTumblr = styled.div`
  
`
S.Tumblr = styled.img`
  width:150px;
  height:150px;
`
S.P= styled.p`
  position: relative;
  padding: 0 20px;
  height: 45px;
`
S.Price = styled.b`
  
`

export default Item;
