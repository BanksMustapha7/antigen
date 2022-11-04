import React from "react";
import { Link } from "react-router-dom";
import "../loginpage.css";
import Group287 from "../../assets/Group287.png";
import Google from "../../assets/google.png";
import Fb from "../../assets/fb.png";
function LoginPage() {
  return (
    <div className="div">
      <div className="top">
        <img src={Group287} alt="antigen-logo" srcset="" />
        <h1>Welcome back</h1>
      </div>
      <div className="bottom">
        <form action="">
          <div>
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />
          </div>
          <button type="submit" className="click">
            LOGIN
          </button>
        </form>

        <hr />

        <div className="authbox">
          <button className="google click">
            <img src={Google} alt="google" />
            <span>SIGN IN WITH GMAIL</span>
          </button>
          <button className="fb click">
            <img src={Fb} alt="FB" />
            <span>CONTINUE WITH FACEBOOK</span>
          </button>
        </div>

        <h4>
          Don't have an account?
          <Link to="/signup">
            <span>Sign up here</span>
          </Link>
        </h4>
      </div>
    </div>
  );
}

export default LoginPage;
