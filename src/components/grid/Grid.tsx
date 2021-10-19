import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import HttpService from '../../services/HttpService';
import { Popup } from '../popup/Popup';
import Cat from '../popup/Cat';
import '../../App.css';

const httpService = new HttpService();

export const Grid = (): JSX.Element => {
  const [cats, setCats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShownPopup, setIsShownPopup] = useState(false);
  const [cat, setCat] = useState({});

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const cats = await httpService.fetchCats();
      setCats(cats);
      setIsLoading(false);
    })();
  }, []);

  console.log(cats);

  const renderCats = () => {
    return cats.map((cat: Cat, index: number) => {
      return (
        <tr
          onClick={() => {
            setCat(cat);
            setIsShownPopup(true);
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
      <Popup show={isShownPopup} cat={cat as Cat} />
    </div>
  );
};

export default Grid;
