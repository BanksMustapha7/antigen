import React, { useState } from "react";
import "../loginpage.css";
import Rarr from "../../assets/rarr.png";
function Fp() {
  const [email, setEmail] = useState();
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log(email);
  };
  const handleSubmit = () => {};
  return (
    <div className="fp_div">
      <div className="top">
        <img src={Rarr} alt="back" />
        <h1>Forgot Password</h1>
      </div>
      <div className="body">
        <form action="" onSubmit={handleSubmit}>
          <h3>
            Please enter your email address. The reset link will be sent to your
            email.
          </h3>
          <input
            type="email"
            name=""
            id=""
            onChange={(e) => handleEmail(e)}
            placeholder="Email Address"
          />
          <button type="submit">Recover Password</button>
        </form>
      </div>
    </div>
  );
}

export default Fp;
