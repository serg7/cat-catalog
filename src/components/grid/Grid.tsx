import React, { useState, useContext } from 'react';
import classNames from 'classnames';
import DetailsPopup from '../popups/details/DetailsPopup';
import Cat from '../popups/details/Cat';
import { ViewModeContext } from '../../App';
import '../../App.css';

export const Grid = (): JSX.Element => {
  const { cats, showTiles } = useContext(ViewModeContext);
  const [isDetailsPopupShown, setIsDetailsPopupShown] = useState(false);
  const [cat, setCat] = useState({});

  const renderCats = () =>
    cats.map((cat: Cat, index: number) => (
      <tr
        onClick={() => {
          setCat(cat);
          setIsDetailsPopupShown(true);
        }}
        key={index}
      >
        <td>
          <img className="image-thumb" src={cat?.image?.url} />
        </td>
        <td>{cat.name}</td>
        <td>{cat.origin}</td>
        <td>{cat.energy_level}</td>
        <td>{cat.temperament}</td>
      </tr>
    ));

  return (
    <div className={classNames('grid-container', { show: showTiles, hide: !showTiles })}>
      <table data-testid="grid">
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Origin</th>
            <th>Energy Level</th>
            <th>Temperament</th>
          </tr>
        </thead>
        <tbody>{renderCats()}</tbody>
      </table>
      <DetailsPopup show={isDetailsPopupShown} setIsShown={setIsDetailsPopupShown} cat={cat as Cat} />

      <div className={classNames('overlay', { show: isDetailsPopupShown, hide: !isDetailsPopupShown })}></div>
    </div>
  );
};

export default Grid;
