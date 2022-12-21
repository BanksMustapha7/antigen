import React, { useState } from "react";
import "../loginpage.css";
import Group287 from "../../assets/Group287.png";
import Google from "../../assets/google.png";
import Cross from "../../assets/cross.png";
import Group6 from "../../assets/Group 6.png";
function SignupPage() {
  //controls password requirements
  const [showRequirements, setShowRequirements] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [minChars, setMinChars] = useState(false);
  const [caseCheck, setCaseCheck] = useState(false);
  const [numCheck, setNumCheck] = useState(false);

  const checkPwd = (currentPassword) => {
    console.log(currentPassword, "currentpassword");
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

  // const show = () => (setShow(false) ? setShow(true) : setShow(false));

  return (
    <div className="div">
      <div className="top">
        <img src={Group287} alt="antigen-logo" srcset="" />
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
            />
            <input
              type="text"
              name=""
              id=""
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyUp={(e) => checkPwd(e.target.value)}
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
                      srcset=""
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

            <input type="password" placeholder="Confirm Password" />
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
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
