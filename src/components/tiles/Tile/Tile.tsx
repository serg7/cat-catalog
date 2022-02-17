import React from 'react';
import './Tile.css';

export const Tile = (props: { item: any }): JSX.Element => {
  const { item } = props;

  console.log(item);

  return (
    <div className="card">
      <img src={item?.image?.url} alt={item.name} />
      <div className="container">
        <h4>
          <b>{item.name}</b>
        </h4>
        <p>Architect & Engineer</p>
      </div>
    </div>
  );
};
