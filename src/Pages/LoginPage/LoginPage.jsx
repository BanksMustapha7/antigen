import React from "react";
import "./loginpage.css";
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
            <input type="email" />
            <input type="password" />
          </div>
          <button type="submit">LOGIN</button>
        </form>

        <hr />

        <div className="authbox">
          <button>
            <img src={Google} alt="google" />
            SIGN IN WITH GMAIL
          </button>
          <button>
            <img src={Fb} alt="FB" />
            CONTINUE WITH FACEBOOK
          </button>
        </div>

        <h4>
          Don't have an account? <span>Sign up here</span>
        </h4>
      </div>
    </div>
  );
}

export default LoginPage;
