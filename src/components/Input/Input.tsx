import React from 'react';
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e);
  }

  return (
    <div className="item">
      <div className={`field ${error?'error':''}`}>
        <input type={type} name={name} onChange={handleChange} ref={register({ required })}/>
        <span className="helperText">{text}</span>
      </div>
      {error && <div className="error">{text} is required</div>}
    </div>
  )
}

export default Input;
