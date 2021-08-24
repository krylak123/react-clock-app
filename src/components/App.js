import React, { useState } from 'react';
import GlobalStyles from '../styles/GlobalStyles';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

const App = () => {
  const [currentMode, setCurrentMode] = useState('clock');

  return (
    <>
      <GlobalStyles />
      <Header />
      <Content mode={currentMode} />
      <Footer mode={currentMode} modeChanger={setCurrentMode} />
    </>
  );
};

export default App;
