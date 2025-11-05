import React from 'react'
import {Link} from 'react-router-dom'
function Register() {
  return (
    <div>
        <h1>Registration page</h1>
        <h2>Already registered ? Click <Link to ="/login"> Login </Link> to login </h2>
    </div>
  )
}

export default Register