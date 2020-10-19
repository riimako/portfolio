import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Login.css';

import Input from '../../components/Input/Input';

interface UserLogin {
  username: string;
  password: string;
}

const Login = () => {
  const [user, setUser] = useState({username: "", password: ""})
  const { register, handleSubmit, errors } = useForm<UserLogin>();
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({...user, [e.target.name]: e.target.value});
  };
  
  const login = async (user: UserLogin) => {
    return await axios.post('http://localhost:3002/login', user);
  } 
  
  const onSubmit = () => {
    console.log(user);
    login(user)
    .then(res => console.log(res))
    .catch(res => console.log("error"))
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input 
          error={errors.username} 
          type="text" 
          name="username" 
          text="Username" 
          onChange={handleChange} 
          register={register} 
          required 
        />
        <Input 
          error={errors.password} 
          type="password" 
          name="password" 
          text="Password" 
          onChange={handleChange} 
          register={register} 
          required 
        />
        <div className="item">
          <button type="submit" id="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login
