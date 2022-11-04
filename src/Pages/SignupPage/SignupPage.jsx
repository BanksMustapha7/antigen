import React, { useState } from "react";
import "../loginpage.css";
import Group287 from "../../assets/Group287.png";
import Google from "../../assets/google.png";
import Cross from "../../assets/cross.png";
import Group6 from "../../assets/Group 6.png";
function SignupPage() {
  //controls password requirements
  const [showRequire, setShow] = useState(true);

  //controls character password length
  const [char, setChar] = useState(false);

  //control casing of password
  const [casing, setCase] = useState(false);

  //controls number requirement of password
  const [num, setNum] = useState(false);

  const styles = {
    passwordRequire: {
      color: char === false ? "red" : "green",
    },
  };
  const show = () => (setShow(false) ? setShow(true) : setShow(false));

  return (
    <div className="div">
      <div className="top">
        <img src={Group287} alt="antigen-logo" srcset="" />
        <h1>Sign Up</h1>
      </div>

      <div className="bottom">
        <form action="">
          <div>
            <input type="text" name="" id="" placeholder="First Name" />
            <input type="text" name="" id="" placeholder="Last Name" />
            <input type="email" placeholder="Email Address" />
            <input type="password" placeholder="Password" />

            {/* If show require is true, it would list the password requirement */}
            {showRequire && (
              <div className="require">
                <small style={styles.passwordRequire}>
                  <span>
                    {/* if the password doesnt contain up to 8 letter, char is false then X is displayed, if char is true green check is shown */}
                    <img
                      className="required"
                      src={(char === false && Cross) || Group6}
                      alt="tick"
                      srcset=""
                    />
                  </span>
                  8 Characters Minimum
                </small>
                <small style={styles.passwordRequire}>
                  <span>
                    {/* if the password doesnt contain a capital and small letter, casing is false then X is displayed, if char is true green check is shown */}
                    <img
                      className="required"
                      src={(casing === false && Cross) || Group6}
                      alt="tick"
                    />
                  </span>
                  One Uppercase and One Lowercase
                </small>
                <small style={styles.passwordRequire}>
                  <span>
                    {/* if the password doesnt contain number, num is false then X is displayed, if char is true green check is shown */}
                    <img
                      className="required"
                      src={(num === false && Cross) || Group6}
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
