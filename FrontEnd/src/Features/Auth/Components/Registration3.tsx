import { FC } from 'react';
import { useForm } from '../../../Hooks/useForm';
import './Registration.css';
import { registrationValidations } from '../../../Validations/registration.validation';

interface User {
  name: string;
  age: number;
  email: string;
  gender: Gender;
  password: string;
}

// interface User {
//   firstName: string;
//   lastName: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
//   department: string;
//   jobTitle: string;
// }

type Gender = 'male' | 'female' | 'non-binary';

interface User {
  name: string;
  age: number;
  email: string;
  gender: Gender;
  password: string;
}

const Registration3: FC = () => {
  const {
    handleSubmit,
    handleChange,
    data: user,
    errors,
  } = useForm<User>({
    validations: registrationValidations,
    onSubmit: () => alert('User submitted!'),
  });

  return (
    <form className='registration-wrapper' onSubmit={handleSubmit}>
      <h1>Registration</h1>
      <input
        placeholder='Name*'
        value={user.name || ''}
        onChange={handleChange('name')}
        required
      />
      {errors.name && <p className='error'>{errors.name}</p>}
      <input
        placeholder='Age'
        type='number'
        value={user.age || ''}
        onChange={handleChange<number>('age', (value) => parseInt(value, 10))}
      />
      {errors.age && <p className='error'>{errors.age}</p>}
      <input
        placeholder='Email*'
        type='email'
        value={user.email || ''}
        onChange={handleChange('email')}
      />
      {errors.email && <p className='error'>{errors.email}</p>}
      <input
        placeholder='Password*'
        type='password'
        value={user.password || ''}
        onChange={handleChange('password')}
      />
      {errors.password && <p className='error'>{errors.password}</p>}
      <select onChange={handleChange('gender')} required>
        <option value='' disabled selected>
          Select gender*
        </option>
        <option value='male' selected={user.gender === 'male'}>
          Male
        </option>
        <option value='female' selected={user.gender === 'female'}>
          Female
        </option>
        <option value='non-binary' selected={user.gender === 'non-binary'}>
          Non-binary
        </option>
      </select>
      <button type='submit' className='submit'>
        Submit
      </button>
    </form>
  );
};

export default Registration3;
