import React from 'react';
import styled from 'styled-components/macro';
function Dropdown({ options,onChange,value }) {

  return (
    <S.DropdownWrapper>
      <S.Select onChange={onChange} value={value}>
        {React.Children.toArray(options.map((opt) => <option value={opt} name={opt}>{opt}</option>))}
      </S.Select>
    </S.DropdownWrapper>
  );

}
const S={};
S.DropdownWrapper = styled.div`
  

`
S.Select = styled.select`
  border-radius: 5px 0 0 5px;
  outline: none;
  border: 3px solid #00B4CC;
 padding:10px;
  &:focus{
    border: 3px solid #0ce5c6;
  }
  option{
  padding: 5px;
  height: 20px;
    
  }

`
export default Dropdown;
