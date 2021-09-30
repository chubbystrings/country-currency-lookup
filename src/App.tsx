import React from 'react';
import { GlobalStyle } from './app/components/styles/App.style';
import Routes from './app/router/index';


function App() {
  return (
    <>
    <GlobalStyle />
      <Routes />
    </>
  );
}

export default App;
