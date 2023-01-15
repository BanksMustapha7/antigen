import React from "react";
import "./book.css";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
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
          <Calendar />
          <button className="button">Proceed</button>
        </div>

        <div className="time"></div>
      </div>
    </div>
  );
}

export default Book;
