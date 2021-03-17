

import styled from 'styled-components/macro';
export default function Form(props) {
  return(
    <S.Form onSubmit={props.onSubmit}>
      {props.children}
    </S.Form>
  )
}

const S = {};
S.Form = styled.form`
  `
