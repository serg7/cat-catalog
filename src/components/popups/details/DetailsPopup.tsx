import React from 'react';
import classNames from 'classnames';
import './DetailsPopup.css';
import '../CommonPopup.css';
import featuresWithLevel from './Features';
import Cat from './Cat';

export const DetailsPopup = (props: { show: boolean; setIsShown: (isShown: boolean) => void;  cat: Cat }): JSX.Element => {
  const { cat, show, setIsShown } = props;

  const renderFeatureLevels = (cat: any): JSX.Element[] =>
    featuresWithLevel.map((feature: string, index: number) => (
      <div className="feature-container" key={index}>
        <div className="feature">{feature}</div>
        <div className={`level-${cat[feature]}`}></div>
      </div>
    ));

  return (
    <div className={classNames('popup', { show })} id="modal" data-testid="details-popup">
      <span className="close" onClick={() => setIsShown(false)}>
        &times;
      </span>
      <div className="popup-content">
        <div className="header">
          <div className="short-info">
            <div className="name">{cat.name}</div>
            <div className="origin">Origin: {cat.origin}</div>
          </div>
          <a href={cat?.cfa_url}><img className="image" src={cat?.image?.url} /></a>
        </div>
        <div className="levels">{renderFeatureLevels(cat)}</div>
      </div>
    </div>
  );
};

export default DetailsPopup;
