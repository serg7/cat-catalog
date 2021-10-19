import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './DetailsPopup.css';
import './CommonPopup.css';
import featuresWithLevel from './Features';
import Cat from './Cat';

export const DetailsPopup = (props: { show: boolean; cat: Cat }): JSX.Element => {
  const { cat } = props;
  const [show, setIsShow] = useState(props.show);

  useEffect(() => {
    setIsShow(props.show);
  }, [props]);

  const renderFeatureLevels = (cat: any): JSX.Element[] =>
    featuresWithLevel.map((feature: string, index: number) => (
      <div className="feature-container" key={index}>
        <div className="feature">{feature}</div>
        <div className={`level-${cat[feature]}`}></div>
      </div>
    ));

  return (
    <div className={classNames('popup', { show })} id="modal">
      <span className="close" onClick={() => setIsShow(false)}>
        &times;
      </span>
      <div className="popup-content">
        <div className="header">
          <div className="short-info">
            <div className="name">{cat.name}</div>
            <div className="origin">Origin: {cat.origin}</div>
          </div>
          <img className="image" src={cat?.image?.url} />
        </div>
        <div className="levels">{renderFeatureLevels(cat)}</div>
      </div>
    </div>
  );
};

export default DetailsPopup;