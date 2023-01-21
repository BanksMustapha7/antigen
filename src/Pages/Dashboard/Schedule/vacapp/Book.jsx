import React from "react";
import "./book.css";
import { Link } from "react-router-dom";

function Book() {
  return (
    <div className="book">
      <div className="top">
        <h1>Vaccination Appointment</h1>
        <small>
          Select date and time for your vaccination appointment here.
        </small>
      </div>

      <div className="book_body">
        <div className="date">
          <h3>Select date</h3>
        
          <button className="button">
            <Link
              to="/dashboard/appointment_details"
              style={{ color: "white", textDecoration: "none" }}
            >
              {" "}
              Proceed
            </Link>
          </button>
        </div>

        <div className="time">
          <h3>Select Time:</h3>
          <div className="time">
            <div className="info">
              <h4>Morning</h4>
              <small>9:00AM to 12:00PM</small>
            </div>

            <div className="time"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
