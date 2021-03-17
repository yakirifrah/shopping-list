import React from 'react';
import styled from 'styled-components/macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';


const Search = React.forwardRef(({placeholder},ref)=>{
  return (
    <S.SearchWrapper>
      <S.Input placeholder={placeholder} ref={ref} />
      <S.Button type="submit" >
        <FontAwesomeIcon icon={faSearch}/>
      </S.Button>
    </S.SearchWrapper>
  );
})


const S={};

S.SearchWrapper = styled.div`
  width: 30vw;
  position: relative;
  display: flex;
  //height:-webkit-fill-available;
  margin-right: 3rem;
`
S.Input = styled.input`
  width: 100%;
  border: 3px solid #00B4CC;
  border-right: none;
  padding: 10px;
  border-radius: 5px 0 0 5px;
  outline: none;
  color: #9DBFAF;

  &:focus {
    border: 3px solid #0ce5c6;
  }
`
  S.Button = styled.button`
    width: 40px;
    height: inherit;
    border: 1px solid #00B4CC;
    background: #00B4CC;
    text-align: center;
    color: #fff;
    border-radius: 0 5px 5px 0;
    cursor: pointer;
    font-size: 20px;
    &:hover {
      color:#61dafb;
    }
    
    
  `

export default Search;
