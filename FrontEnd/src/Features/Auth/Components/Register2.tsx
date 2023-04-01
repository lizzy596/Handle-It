import React, { FC } from 'react';


interface RegisterProps {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  department: string;
  jobTitle: string;
}

const Register = ({
  firstName,
  lastName,
  email,
  password,
  confirmPassword,
  department,
  jobTitle,
}: RegisterProps) => {
  return (
    <form>
      <label>
        First Name:
        <input type='text' name='firstName' value={firstName} />
      </label>
      <label>
        Last Name:
        <input type='text' name='lastName' value={lastName} />
      </label>
      <label>
        Email:
        <input type='email' name='email' value={email} />
      </label>
      <label>
        Password:
        <input type='password' name='password' value={password} />
      </label>
      <label>
        Confirm Password:
        <input type='password' name='confirmPassword' value={confirmPassword} />
      </label>
      <label>
        Department:
        <input type='text' name='department' value={department} />
      </label>
      <label>
        Job Title:
        <input type='text' name='jobTitle' value={jobTitle} />
      </label>
    </form>
  );
};

export default Register;
