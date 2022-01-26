import React from 'react'
import { Link } from 'react-router-dom'

const RegisterScreen = () => {
  return (
    <>
      <h3 className="auth__title">Register</h3>
      <form>
        <input
          autoComplete="off"
          className="auth__input"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          autoComplete="off"
          className="auth__input"
          type="text"
          placeholder="Email"
          name="email"
        />
        <input
          autoComplete="off"
          className="auth__input"
          type="password"
          name="password"
          placeholder="Password"
        />
        <input
          autoComplete="off"
          className="auth__input"
          type="password"
          name="password2"
          placeholder="Confirm your password"
        />
        <button className="btn btn-primary btn-block mb-5">Register</button>
        <Link to="/auth/login" className="link">
          Already register?
        </Link>
      </form>
    </>
  )
}

export default RegisterScreen
