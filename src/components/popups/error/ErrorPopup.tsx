import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import '../CommonPopup.css';

export const ErrorPopup = (props: { isShown: boolean }): JSX.Element => {
    const { isShown } = props;
    return (
        <div className={classNames('popup', { show: isShown })}>
           Network Error...
        </div>
    )
};

export default ErrorPopup;
