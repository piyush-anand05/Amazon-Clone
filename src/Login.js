import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import "./Login.css";

function Login() {
    const history = useNavigate();   //useHistory hook 
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const login = event => {
        event.preventDefault();  //this stops the refresh
        //do the logi logic...

        auth.signInWithEmailAndPassword(email, password)
        .then((auth) => {
            //logged in, redirect to the home page...
            history.push('/');
        })
        .catch((e) => alert(e.message));
    };

    const register = event => {
        event.preventDefault();  //this stops the refresh
        ///do the register logic...

        auth.createUserWithEmailAndPassword(email, password)
        .then((auth) => {
            //create a user and loged in...

        })
        .catch((e) => alert(e.message));
    }

  return (
    <div className="login">
      <Link to="/">
        <img
          className="login_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/640px-Amazon_logo.svg.png"
          alt=""
        />
      </Link>

      <div className="login_container">
        <h1>Sign In</h1>
        <form>
          <h5>E-Mail</h5>
          <input value={email} onChange={event => setEmail(event.target.value)} type="text" />
          <h5>Password</h5>
          <input value={password} onChange={event => setPassword(event.target.value)} type="password" />
          <button onClick={login} type="submit" className="login_signInButton">Sign In</button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>

        <button onClick={register} className="login_registerButton">Create Your Amazon Account</button>
      </div>
    </div>
  );
}

export default Login;
