import React, { useState } from "react";
import "./Login.css";
import { login, signup } from '../FireBase';
const Login = () => {
  const [signState, setsignState] = useState("Sign In");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [load,setLoad] = useState(false)

  const user_auth = async (event) => {
    event.preventDefault();
    setLoad(true);
    if (signState === "Sign In") {
      await login(email, password);
    } else {
      await signup(name, email, password);
    }
    setLoad(false)
  };

  return (
    load?
    <div class="loader">
      <span class="loader-text">loading</span>
        <span class="load"></span>
    </div>
  :
    <div className="login">
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Sign Up" ? (
            <input
              value={name}
              onChange={(e) => {
                setname(e.target.value);
              }}
              type="text"
              placeholder="Your Name"
            />
          ) : (
            <></>
          )}
          <input
            value={email}
            onChange={(e) => {
              setemail(e.target.value);
            }}
            type="email"
            placeholder="Email"
          />
          <input
            value={password}
            onChange={(e) => {
              setpassword(e.target.value);
            }}
            type="password"
            placeholder="Password"
          />
          <button onClick={user_auth} type="submit">
            {signState}
          </button>
          <div className="form-help">
            <div className="remember">
              <input type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Sign In" ? (
            <p>
            
              <span onClick={() => setsignState("Sign Up")}>Sign Up </span>
            </p>
          ) : (
            <p>
              
              <span onClick={() => setsignState("Sign In")}>Sign In</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
