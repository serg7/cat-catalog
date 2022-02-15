import React  from 'react';
import '../switch/Switch.css';

export const Switch = (props: { onChange: () => void }): JSX.Element => {
    const { onChange } = props;

    return (
        <label className="switch">
          <input type="checkbox" onChange={onChange} />
          <span className="slider round"></span>
       </label>
    )
}