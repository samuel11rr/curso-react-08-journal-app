import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'

export const RegisterScreen = () => {

  const [ formValues, handleInputChange ] = useForm({
    name: 'Brenda',
    email: 'bren@example.com',
    password: '123456',
    password2: '123456'
  });

  const { name, email, password, password2 } = formValues;

  const handleRegister = ( e ) => {
    e.preventDefault();
    console.log({ name, email, password, password2 });
  }

  return (
    <>
      <h3 className="auth__title"> Register </h3>

      <form onSubmit={ handleRegister } autoComplete="off">
        <input 
          type="text" 
          placeholder="Name"
          name="name"
          value={ name }
          className="auth__input"
          onChange={ handleInputChange }
        />

        <input 
          type="text" 
          placeholder="Email"
          name="email"
          value={ email }
          className="auth__input"
          onChange={ handleInputChange }
        />

        <input 
          type="password"
          placeholder="Password"
          name="password"
          value={ password }
          className="auth__input"
          onChange={ handleInputChange }
        />

        <input 
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={ password2 }
          className="auth__input"
          onChange={ handleInputChange }
        />

        <button 
          type="submit" 
          className="btn btn-primary btn-block mb-5"
        >
          Register
        </button>
        


        <Link to="/auth/login" className="link">
          Already register?
        </Link>
      </form>
    </>
  )
}
