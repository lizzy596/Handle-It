import React, {useState} from 'react';
import useForm from '../../../Hooks/useForm';


interface LoginProps {
  email: string;
  password: string;
}

const Login = ({ email, password }: LoginProps) => {

  

  return (
    <form>
      <label>
        Email:
        <input type="email" name="email" value={email} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={password} />
      </label>
    </form>
  );
};

export default Login;