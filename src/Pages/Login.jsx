import React, { useContext } from "react";
import "./Login.css";
import { UserContext } from "./UserContext";
import { Link, useNavigate } from "react-router-dom"


function Login() {

      let {user,setUser} = useContext(UserContext);
      let navigate=useNavigate()

      function handlesubmit(event){
        event.preventDefault();
        navigate('/')
      }

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form>
          <label>Username</label>
          <input type="text" placeholder="Enter email" onChange={(event) => {setUser(event.target.value)}}/> <br/>
          <label>Password</label>
          <input type="password" placeholder="Enter password" />
          <div>
            <button type="submit">Submit</button>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
