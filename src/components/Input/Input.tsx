import React, { useState } from 'react';
import { FieldError } from 'react-hook-form';
import './Input.css';

interface InputProps {
  error: FieldError | undefined;
  type: string;
  name: string;
  text: string;
  onChange: Function;
  register: any;
  required: boolean;
}

const Input = ({error, type, name, text, onChange, register, required}:InputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  }

  const handlePassword = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="item">
      <div className={`field ${error?'error':''}`}>
        <input type={type==="password" && showPassword?"text":type} name={name} onChange={handleChange} ref={register({ required })}/>
        {type==="password" && <img src={`/img/${showPassword?'un':''}visible.svg`} alt="" className="eye" onClick={handlePassword} />}
        <span className="helperText">{text}</span>
      </div>
      {error && <div className="error">{text} is required</div>}
    </div>
  )
}

export default Input;
