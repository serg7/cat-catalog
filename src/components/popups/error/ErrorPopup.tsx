import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import '../CommonPopup.css';

export const ErrorPopup = (props: { isShown: boolean }): JSX.Element => {
    const { isShown } = props;
    const [show, setIsShow] = useState(isShown);
    useEffect(() => {
       setIsShow(isShown);
    }, [props]);

    return (
        <div className={classNames('popup', { show })}>
          <span className="close" onClick={() => setIsShow(false)}>&times;</span>
           Network Error...
        </div>
    )
};

export default ErrorPopup;
