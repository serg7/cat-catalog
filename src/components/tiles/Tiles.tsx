import React  from 'react';
import classNames from 'classnames';

export const Tiles = (props: { shown: boolean }): JSX.Element => {
    const { shown } = props;

    console.log('shown1', shown);
    
    return (
        <div className={classNames('tiles-container', { show: shown, hide: !shown })}>
            Tiles
        </div>
    )
}


export default Tiles
