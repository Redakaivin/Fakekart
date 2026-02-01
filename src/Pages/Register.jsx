import React from 'react'
import { Link } from 'react-router-dom'
import './Register.css'

function Register() {
  return (
    <div className="page-container">
      <div className="register-page">
        <h1>Registration page</h1>
        <h2>Already registered ? Click <Link to="/login"> Login </Link> to login </h2>
      </div>
    </div>
  )
}

export default Register