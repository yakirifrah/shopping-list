import styled from 'styled-components/macro';

import FloatCart from './FloatCart';
import Shopping from './Shopping';
import { Header } from './Shared';
import '../App.scss';

function App() {
  return (
    <div className="App">
      <S.HeaderWrapper>
        <Header title='pc games' size='xl'/>
      </S.HeaderWrapper>
      <main>
        <Shopping />
      </main>
      <FloatCart/>
    </div>
  );
}
const S={};
S.HeaderWrapper = styled.div`
  margin-top:2rem;
  margin-bottom:2rem;
`
export default App;
