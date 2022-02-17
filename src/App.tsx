import React, { useState, createContext, useEffect } from 'react';
import classNames from 'classnames';
import Grid from './components/grid/Grid';
import { Switch } from './components/switch/Switch';
import ErrorPopup from './components/popups/error/ErrorPopup';
import Tiles from './components/tiles/Tiles';
import HttpService from './services/HttpService';

export const ViewModeContext = createContext({
  showTiles: true,
  cats: [],
});
const httpService = new HttpService();

const App = (): JSX.Element => {
  const [showTiles, setShowTiles] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isErrorPopupShown, setIsErrorPopupShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [cats, setCats] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const cats = await httpService.fetchCats();
        setCats(cats);
        setIsLoading(false);
      } catch (e) {
        setIsErrorPopupShown(true);
        setErrorMessage((e as Error).message);
      }
    })();
  }, []);

  return (
    <div className="App">
      <ViewModeContext.Provider value={{ showTiles, cats }}>
        <Switch onChange={() => setShowTiles(!showTiles)} />
        <Grid />
        <Tiles />
        <ErrorPopup show={isErrorPopupShown} setIsShown={setIsErrorPopupShown} message={errorMessage} />
        <div className={classNames('loader', { show: isLoading, hide: !isLoading })}></div>
      </ViewModeContext.Provider>
    </div>
  );
};

export default App;
