import React, { useContext } from 'react';
import classNames from 'classnames';
import { ViewModeContext } from '../../App';
import { Tile } from './Tile/Tile';

export const Tiles = (): JSX.Element => {
  const { cats, showTiles } = useContext(ViewModeContext);
  console.log(showTiles);

  const renderCatTiles = () => {
    return cats.map((cat) => {
      return <Tile item={cat} />;
    });
  };

  return <div className={classNames('tiles-container', { show: !showTiles, hide: showTiles })}>{renderCatTiles()}</div>;
};

export default Tiles;
