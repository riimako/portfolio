import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import './Login.css';

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
    return await axios.post('http://localhost:8000/users/login', user);
  } 
  
  const onSubmit = (user: UserLogin) => {
    console.log(user);
    login(user)
    .then(res => console.log(res))
    .catch(res => console.log("error"))
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="item">
          <div className={`fields ${errors.username?'error':''}`}>
            <input type="text" name="username" onChange={handleChange} ref={register({ required: true })}/>
            <span className="helperText">Username</span>
          </div>
          {errors.username && <div className="error">Username is required</div>}
        </div>
        <div className="item">
          <div className={`fields ${errors.username?'error':''}`}>
            <input type="password" name="password" onChange={handleChange} ref={register({ required: true })}/>
            <span className="helperText">Password</span>
          </div>
          {errors.password && <div className="error">Password is required</div>}
        </div>
        <div className="item">
          <button type="submit" id="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Login
