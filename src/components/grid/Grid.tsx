import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import HttpService from '../../services/HttpService';
import DetailsPopup from '../popups/DetailsPopup';
import ErrorPopup from '../popups/error/ErrorPopup';
import Cat from '../popups/Cat';
import '../../App.css';

const httpService = new HttpService();

export const Grid = (): JSX.Element => {
  const [cats, setCats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDetailsPopupShown, setIsDetailsPopupShown] = useState(false);
  const [isErrorPopupShown, setIsErrorPopupShown] = useState(false);
  const [cat, setCat] = useState({});

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const cats = await httpService.fetchCats();
        setCats(cats);
        setIsLoading(false);
      }
      catch(e) {
        setIsErrorPopupShown(true);
        console.log(e);
      }
    })();
  }, []);

  const renderCats = () => {
    return cats.map((cat: Cat, index: number) => {
      return (
        <tr
          onClick={() => {
            setCat(cat);
            setIsDetailsPopupShown(true);
          }}
          key={index}
        >
          <td>{cat.name}</td>
          <td>{cat.origin}</td>
          <td>{cat.energy_level}</td>
        </tr>
      );
    });
  };

  return (
    <div className="grid-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Origin</th>
            <th>Energy Level</th>
          </tr>
        </thead>
        <tbody>{renderCats()}</tbody>
      </table>
      <div className={classNames('loader', { show: isLoading, hide: !isLoading })}></div>
      <DetailsPopup show={isDetailsPopupShown} cat={cat as Cat} />
      <ErrorPopup isShown={isErrorPopupShown} />
    </div>
  );
};

export default Grid;
