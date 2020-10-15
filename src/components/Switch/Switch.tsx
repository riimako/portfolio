import React, { useState } from 'react';
import './Switch.css';

interface SwitchProps {
  onClick: Function;
}
const Switch = ({onClick}:SwitchProps) => {
  const [checked, setChecked] = useState(false);
  const handleClick = () => {
    setChecked(!checked);
    onClick(!checked);
  }
  return (
    <div className={`switch ${checked?'on':'off'}`} onClick={handleClick}>
      <div className="button"></div>
    </div>
  )
}

export default Switch;
