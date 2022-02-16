import React, { useContext }  from 'react';
import classNames from 'classnames';
import { ViewModeContext } from '../../App';


export const Tiles = (): JSX.Element => {
    const showTiles = useContext(ViewModeContext);

    return (
        <div className={classNames('tiles-container', { show: showTiles, hide: !showTiles })}>
            Tiles
        </div>
    )
}


export default Tiles
