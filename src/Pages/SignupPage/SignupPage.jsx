import React, { useRef, useState } from "react";
import {  useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../../Redux/Auth/authApiSlice";
import "../loginpage.css";
import Group287 from "../../assets/Group287.png";
import Google from "../../assets/google.png";
import Cross from "../../assets/cross.png";
import Group6 from "../../assets/Group 6.png";

function SignupPage() {
  //controls password requirements
  const [showRequirements, setShowRequirements] = useState(true);

  const [firstName, setFirstName] = useState("");
  const firstNameRef = useRef();
  const [lastName, setLastName] = useState("");
  const lastNameRef = useRef();
  const [email, setEmail] = useState("");
  const emailRef = useRef();
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  const [pwd2, setpwd2] = useState("");
  const [ConfirmPassword, setConfirmedPassword] = useState(false);
  const [Error, setError] = useState("");
  const errorRef = useRef();

  const [minChars, setMinChars] = useState(false);
  const [caseCheck, setCaseCheck] = useState(false);
  const [numCheck, setNumCheck] = useState(false);

  const checkPwd = (currentPassword) => {
    if (/[A-Z]/.test(currentPassword) && /[a-z]/.test(currentPassword)) {
      setCaseCheck(true);
    } else setCaseCheck(false);

    // Check for number of Characters
    if (Number(String(currentPassword).length) >= 8) {
      setMinChars(true);
    } else setMinChars(false);

    if (/\d/.test(currentPassword)) {
      setNumCheck(true);
    } else {
      setNumCheck(false);
    }

    if (caseCheck && minChars && numCheck) {
      setShowRequirements(false);
    } else setShowRequirements(true);
  };

  const checkConfirmPassword = () => {
    if (pwd2 === password) {
      setConfirmedPassword(true);
    } else setConfirmedPassword(false);
  };

  const [register, { isLoading, isError, isSuccess }] = useRegisterMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(!firstName || !lastName || !email || !password ||!pwd2) {
      return;
    }
    // console.log(Boolean(error))
    try {
     await register({
        firstName,
        lastName,
        email,
        password,
      }).unwrap();

      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setpwd2("");
      // console.log(userData)
      navigate("/login");
    } catch (error) {
      if (!error?.status) {
        setError("No Server Response");
      } else if (error?.status === 400) {
        if (!firstName) {
          setError("Missing First Name");
          firstNameRef.current.focus();
        } else if (!lastName) {
          setError("Missing Last Name");
          lastNameRef.current.focus();
        } else if (!email) {
          setError("Missing Email");
          emailRef.current.focus();
        } else if (!password) {
          setError("Missing Password");
          passwordRef.current.focus();
        } else {
          setError("Please Fill all fields");
          firstNameRef.current.focus();
        }
      } else if (error.status === 401) {
        setError("Unathorized");
      } else {
        setError("Login Failed");
      }
      // errorRef.current.focus();
    }
  };

  return (
    <div className="div">
      <div className="top">
        <img src={Group287} alt="antigen-logo" srcSet="" />
        <h1>Sign Up</h1>
      </div>

      <div className="bottom">
        <form action="">
          <div>
            <input
              type="text"
              name=""
              id=""
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              ref={firstNameRef}
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              ref={lastNameRef}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              ref={emailRef}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={(e) => checkPwd(e.target.value)}
              ref={passwordRef}
            />

            {/* If show require is true, it would list the password requirement */}
            {showRequirements && (
              <div className="require">
                <small style={{ color: !minChars ? "red" : "green" }}>
                  <span>
                    {/* if the password doesnt contain up to 8 letter, char is false then X is displayed, if char is true green check is shown */}
                    <img
                      className="required"
                      src={(!minChars && Cross) || Group6}
                      alt="tick"
                      srcSet=""
                    />
                  </span>
                  8 Characters Minimum
                </small>
                <small style={{ color: !caseCheck ? "red" : "green" }}>
                  <span>
                    {/* if the password doesnt contain a capital and small letter, casing is false then X is displayed, if char is true green check is shown */}
                    <img
                      className="required"
                      src={(!caseCheck && Cross) || Group6}
                      alt="tick"
                    />
                  </span>
                  One Uppercase and One Lowercase
                </small>
                <small style={{ color: !numCheck ? "red" : "green" }}>
                  <span>
                    {/* if the password doesnt contain number, num is false then X is displayed, if char is true green check is shown */}
                    <img
                      className="required"
                      src={(!numCheck && Cross) || Group6}
                      alt="tick"
                    />
                  </span>
                  A Number
                </small>
              </div>
            )}

            <input
              type="password"
              placeholder="Confirm Password"
              value={pwd2}
              onChange={(e) => setpwd2(e.target.value)}
              onKeyUp={checkConfirmPassword}
            />
            {pwd2 !== "" && (
              <small style={{ color: !ConfirmPassword ? "red" : "green" }}>
                <span>
                  {/* if the password doesnt contain number, num is false then X is displayed, if char is true green check is shown */}
                  <img
                    className="required"
                    src={(!ConfirmPassword && Cross) || Group6}
                    alt="tick"
                  />
                </span>
                {ConfirmPassword ? "Password match" : "password Does not match"}
              </small>
            )}
          </div>
          <button type="submit" className="click" onClick={handleSubmit}>
            {isLoading? "Loading" : "REGISTER"}
          </button>
        </form>

        <hr />

        <div className="authbox">
          <button className="google click">
            <img src={Google} alt="google" />
            <span>SIGN IN WITH GMAIL</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;

/*
Note
- Pls create a unique ID for all of the input fields.
- The Error Responses You get when you the Register button is Clicked should displayed
- Where they will be displayed and how they will be displayed depends on you.
-Also, I think You should create a page that or a modal that lets the user knows that a verification mail has been sent to the email they provided.
-You will use the "isSuccess" value provided to execute that.

Then you may have to do a little manipulation to the useRef and do a little bit of tweaking to the error messages too.
Then if You are going with the option of creating a page for informing the user to verify their email, which I advice you do (But if you cannot, there is no need, direct them to the login page, you will do the error rendering on the login page there), the page should navigate to there instead of the login page.
*/
