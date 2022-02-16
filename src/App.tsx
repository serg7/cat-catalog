import React, { useState, createContext } from 'react';
import Grid from './components/grid/Grid';
import { Switch } from './components/switch/Switch';
import Tiles from './components/tiles/Tiles';

export const ViewModeContext = createContext(false);

const App = (): JSX.Element => {
  const [showTiles, setShowTiles] = useState(true);

  return (
    <div className="App">
      <ViewModeContext.Provider value={showTiles}>
         <Switch onChange={() => setShowTiles(!showTiles)} />
         <Grid />
         <Tiles />
      </ViewModeContext.Provider>
    </div>
  );
}

export default App;
