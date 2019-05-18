import React from 'react';
import { Leaves } from '../Leaves/Leaves';
import GlobalStyle from '../../styles/global-styles';
console.log(window.location.pathname);
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Leaves />
    </>
  );
}
export default App;
