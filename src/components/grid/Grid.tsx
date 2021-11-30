import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import HttpService from '../../services/HttpService';
import DetailsPopup from '../popups/details/DetailsPopup';
import ErrorPopup from '../popups/error/ErrorPopup';
import Cat from '../popups/details/Cat';
import '../../App.css';

const httpService = new HttpService();

export const Grid = (): JSX.Element => {
  const [cats, setCats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDetailsPopupShown, setIsDetailsPopupShown] = useState(false);
  const [isErrorPopupShown, setIsErrorPopupShown] = useState(false);
  const [errorMessage, setErrorMessage] = useState('')
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
        setErrorMessage((e as Error).message);
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
    <div className='grid-container' >
      <table data-testid="grid">
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
      <DetailsPopup show={isDetailsPopupShown} setIsShown={setIsDetailsPopupShown} cat={cat as Cat} />
      <ErrorPopup show={isErrorPopupShown} setIsShown={setIsErrorPopupShown} message={errorMessage} />
      <div className={classNames('overlay', { show: isDetailsPopupShown, hide: !isDetailsPopupShown })}></div>
    </div>
  );
};

export default Grid;
