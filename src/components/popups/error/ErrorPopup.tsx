import React from 'react';
import classNames from 'classnames';
import '../CommonPopup.css';

export const ErrorPopup = (props: { show: boolean, setIsShown: (isShown: boolean) => void;  message: string }): JSX.Element => {
    const { show, message, setIsShown } = props;


    return (
        <div className={classNames('popup', { show })} data-testid="error-popup">
          <span className="close" onClick={() => setIsShown(false)}>&times;</span>
          <div>{message}</div>  
        </div>
    )
};

export default ErrorPopup;
