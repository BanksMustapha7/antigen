import React, { useState } from "react";
import "../loginpage.css";
function Fp() {
  const [email, setEmail] = useState();
  const handleEmail = (e) => {
    setEmail(e.target.value);
    console.log;
  };
  const handleSubmit = () => {};
  return (
    <div className="div">
      <div className="top">
        <h1>Sign Up</h1>
      </div>
      <div className="body">
        <form action="" onSubmit={handleSubmit}>
          <h3>
            Please enter your email address. The reset link will be sent to your
            email.
          </h3>
          <input type="email" name="" id="" onChange={handleEmail(e)} />
          <button type="submit">Recover Password</button>
        </form>
      </div>
    </div>
  );
}

export default Fp;
