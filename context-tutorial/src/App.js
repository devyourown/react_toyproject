import React from 'react';
import ColorContext, { ColorProvider } from './contexts/color';
import ColorBox from './contexts/ColorBox';
import SelectColor from './contexts/SelectColor';

const App = () => {
  return (
    <ColorProvider>
    <div>
      <SelectColor/>
      <ColorBox/>
    </div>
    </ColorProvider>
  );
};

export default App;
