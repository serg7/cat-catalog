import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import '../CommonPopup.css';

export const ErrorPopup = (props: { isShown: boolean, message: string }): JSX.Element => {
    const { isShown, message } = props;
    const [show, setIsShow] = useState(isShown);
    useEffect(() => {
       setIsShow(isShown);
    }, [props]);

    return (
        <div className={classNames('popup', { show })}>
          <span className="close" onClick={() => setIsShow(false)}>&times;</span>
          <div>{message}</div>  
        </div>
    )
};

export default ErrorPopup;
