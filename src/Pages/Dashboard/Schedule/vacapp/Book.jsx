/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { Link } from "react-router-dom";
import { useState, createContext } from "react";
import { DatePicker, Space } from "antd";
import "./book.css";

const T = createContext();

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

function Book() {
  //useState for time for appointment chosen
  const [chosenTime, setChosenTime] = useState(null);
  const timeOptions = [
    "8:00Am",
    "8:30Am",
    "9:00Am",
    "9:30Am",
    "10:00Am",
    "10:30Am",
    "11:00Am",
    "11:30Am",
    "12:00Pm",
  ];

  //gets the value of selected time
  const selectTime = (e) => {
    setChosenTime(e.target.value);
  };

  return (
    <div className="book">
      <div className="top">
        <h1>Vaccination Appointment</h1>
        <small>
          Select date and time for your vaccination appointment here.
        </small>
      </div>

      <div className="book_body">
        <div className="date sub">
          <h3 className="h3-info">Select Date : </h3>

          <DatePicker onChange={onChange} />

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

        <div className="time sub">
          <h3 className="h3-info">Select Time:</h3>
          <div className="box">
            <div className="info">
              <h4>Morning</h4>
              <small>8:00AM to 12:00PM</small>
            </div>

            <div className="options">
              {timeOptions.map((time) => (
                <button
                  className="timeOptions"
                  key={time}
                  value={time}
                  onClick={(e) => selectTime(e)}
                  style={{
                    background: chosenTime === time ? "#A69BE7" : "none",
                  }}
                >
                  <T.Provider value={time}>{time}</T.Provider>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Book;
export { T };
