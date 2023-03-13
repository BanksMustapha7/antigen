import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../loginpage.css";
import Group287 from "../../assets/Group287.png";
import Google from "../../assets/google.png";
import Fb from "../../assets/fb.png";
import { useDispatch } from "react-redux";
import { useLoginMutation } from "../../Redux/Auth/authApiSlice";
import { setCredentials } from "../../Redux/Auth/authSlice";

function LoginPage() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const errorRef = useRef();
  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setError("");
  }, [details]);

  function handleChange(evt) {
    const { name, value } = evt.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(Boolean(error))
    
    try {
      const { email, password } = details;
      const userData = await login({ email, password }).unwrap();
      console.log(userData);
      dispatch(setCredentials({ ...userData }));
      setDetails({
        email: "",
        password: "",
      });

      // console.log(userData)
      navigate("/Dashboard/home");
    } catch (error) {
      if (!error?.status) {
        setError("No Server Response");
      } else if (error?.status === 400) {
        if (!details.email) {
          setError("Missing email");
          emailRef.current.focus();
        } else if (!details.password) {
          setError("Missing Password");
          passwordRef.current.focus();
        } else if (!details.email && !details.password) {
          setError("Missing Email and Password");
          emailRef.current.focus();
        } else {
          setError("Incorrect Email Or Password");
          emailRef.current.focus();
        }
      } else if (error.status === 401) {
        setError("Unathorized");
      } else {
        setError("Login Failed");
      }
      errorRef.current.focus();
    }
  };

  return (
    <div className="div">
      <div className="top">
        <img src={Group287} alt="antigen-logo" srcSet="" />
        <h1>Welcome back</h1>
      </div>
      <div className="bottom">
        <form action="">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={details.email}
              ref={emailRef}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={details.password}
              ref={passwordRef}
              onChange={(e) => handleChange(e)}
            />
          </div>
          <button type="submit" className="click" onClick={handleSubmit}>
            {isLoading ? "Loading" : "LOGIN"}
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

/*
Note
- I have done the routing to the dashboard page
- All You have to do here is proper error handling.
I have set the errors with their appropriate responses.
All you need to do here is to choose where to display them.

*/
