import React from "react";
import "./success.css";
import SuccessImg from "../../../../assets/success.png";
import { Link } from "react-router-dom";
function Success() {
  return (
    <div className="successpage">
      <div>
        <img src={SuccessImg} alt="Success" />
        <h3>Appointment Booked Successfully!</h3>
        <h4>Your next appointment is ono the 8th of August, 2022.</h4>
      </div>
      <Link to="/dashboard/home">
        <button>Done</button>
      </Link>
    </div>
  );
}

export default Success;
