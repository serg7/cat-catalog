import React, { useState } from 'react';
import Grid from './components/grid/Grid';
import { Switch } from './components/switch/Switch';
import Tiles from './components/tiles/Tiles';

const App = (): JSX.Element => {
  const [showDefault, setShowDefault] = useState(true);

  return (
    <div className="App">
        <Switch onChange={() => setShowDefault(!showDefault)} />
        <Grid shown={showDefault}  />
        <Tiles shown={!showDefault} />
    </div>
  );
}

export default App;
