import styled from 'styled-components/macro';

function Header({ title, size }) {
  return <S.Header size={size}>{title}</S.Header>;
}

const S={};
S.Header = styled.h1`
  font-family: 'Chango', cursive;
  font-size: ${({size})=> size === 'xl' && '4rem'}
 
`
export default Header;
