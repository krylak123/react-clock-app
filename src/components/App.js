import React, { useState } from 'react';
import GlobalStyles from '../styles/GlobalStyles';

import Header from './Header';

const App = () => {
  const [currentMode, setCurrentMode] = useState('clock');

  return (
    <>
      <GlobalStyles />
      <Header />
      <div>
        <p>React App</p>
      </div>
    </>
  );
};

export default App;
