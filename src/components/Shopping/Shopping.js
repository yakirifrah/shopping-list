import {useState,useEffect,useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {filterByCategory,searchProduct} from '../../store/shoppingSlice';
import { Dropdown,Search,Form } from '../Shared/Form';
import {Spinner} from '../Shared';
import ShoppingList from './ShopingList';
import styled from 'styled-components/macro';

function Shopping () {
  const { products,categories } = useSelector(state => state.shopping);
  const dispatch = useDispatch();
  const [value,setValue] = useState('Show all categories');
  const searchEl = useRef();
  const [loading,setLoading] = useState(true);

  useEffect(()=> {
    setLoading('true');
    const subscription = window.setTimeout(() => {
      setLoading(false);
    },750)
    return() => {
      window.clearTimeout(subscription);
    }
  },[value])

   function handleSelect(event)  {
     setValue(event.target.value);
    dispatch(filterByCategory(event.target.value));
  }
  function handleSubmit(event) {
    event.preventDefault();
    if (searchEl.current.value) dispatch(searchProduct(searchEl.current.value));
  }

  return (
    <S.ShoppingContanier>
      <S.ShoppingHeader>
        <Form onSubmit={handleSubmit}>
          <Search placeholder='Search ...' ref={searchEl} />
        </Form>
          <Dropdown options={categories} onChange={handleSelect} value={value} />
      </S.ShoppingHeader>
      <S.Containt>
        {loading && (<Spinner/>)}
        {!loading && <ShoppingList list={products}/>
        }
      </S.Containt>
    </S.ShoppingContanier>
  )
}

const S = {};
S.ShoppingContanier = styled.div`

`;
S.ShoppingHeader = styled.div`
  display:flex;
  margin-bottom:3rem;
  justify-content:center;
`
S.Containt=styled.div`
  display:grid;
  
  justify-content:center;
  grid-template-rows: repeat(5,1fr);
  
  
  grid-template-columns: repeat(4,10%);
  grid-column-gap: 4rem;
  grid-row-gap: 4rem;
`

export default Shopping;
