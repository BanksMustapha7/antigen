import React from "react";
import { Link } from "react-router-dom";
// import LoginPage from "../LoginPage/LoginPage";
// import SignupPage from "../SignupPage/SignupPage";
function Homepage() {
  return (
    <div style={{ display: "grid", placeContent: "center" }}>
      <ul>
        <li>
          <Link to="/signup">Signup Page</Link>
        </li>
        <li>
          <Link to="/login">Login Page</Link>
        </li>
        <li>
          <Link to="/forgot_password">Forgot Password</Link>
        </li>
        <li>
          <Link to="/dashboard/home">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}

export default Homepage;
