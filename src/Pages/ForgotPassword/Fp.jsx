import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../loginpage.css";
import Rarr from "../../assets/rarr.png";
function Fp() {
  const [email, setEmail] = useState(" ");
  const [submit, setSubmit] = useState(false);
  const [warning, setWarning] = useState(false);
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.length < 8) {
      setWarning(true);
    } else setSubmit(true);
  };
  return (
    <div className="fp_div">
      <div className="top">
        <button>
          <Link to="/">
            <img src={Rarr} alt="back" />
          </Link>
        </button>
        <h1>Forgot Password</h1>
      </div>
      <div className="body">
        {(!submit && (
          <form action="" onSubmit={handleSubmit}>
            <h3>
              Please enter your email address. The reset link will be sent to
              your email.
            </h3>
            <div className="" style={{ display: "grid", gap: ".45rem" }}>
              <input
                type="email"
                name=""
                id=""
                onChange={(e) => handleEmail(e)}
                placeholder="Email Address"
              />
              {warning && (
                <small
                  style={{
                    color: "red",
                    textAlign: "right",
                    fontWeight: "bold",
                  }}
                >
                  Invalid Email Address!
                </small>
              )}
            </div>
            <button type="submit" className="click fp_button">
              Recover Password
            </button>
          </form>
        )) || (
          <div style={{ display: "grid", padding: "2rem" }}>
            <img src="" alt="" srcset="" />
            <h3 style={{ textAlign: "center" }}>
              A recovery mail has been sent to {email}
            </h3>
            <button className="fp_button">
              <Link
                to="/login"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                Click to go back to Login Page
              </Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Fp;
