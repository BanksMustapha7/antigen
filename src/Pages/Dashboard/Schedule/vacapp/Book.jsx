/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { DatePicker } from "antd";
import "./book.css";
import { useDispatch, useSelector } from "react-redux";
import {
  updatedVaccineDetails,
  updateVaccinationDetails,
} from "../../../../Redux/VaccinationSchedule/vaccinationDetailsSlice";

function Book() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //useState for time for appointment chosen
  const [chosenTime, setChosenTime] = useState(null);
  const [chosenDate, setChosenDate] = useState("");

  const updatedUserVaccineDetails = useSelector(updatedVaccineDetails);
  console.log(updatedUserVaccineDetails);

  const dateFormat = "DD/MM/YYYY";
  const onChange = (date, dateString) => {
    setChosenDate(dateString);
    console.log(date, dateString);
  };

  const timeOptions = [
    "8:00AM",
    "8:30AM",
    "9:00AM",
    "9:30AM",
    "10:00AM",
    "10:30AM",
    "11:00AM",
    "11:30AM",
    "12:00PM",
  ];

  //gets the value of selected time
  const selectTime = (e) => {
    console.log(e.target.value);
    setChosenTime(e.target.value);
  };

  const progressToFinalPage = () => {
    //I added the alerts here so you can do proper error handling and form validation
    if (chosenTime === null) {
      alert("Please select a time!!");
      return;
    }

    if (chosenDate === "") {
      alert("Please select a date!!");
      return;
    }

    dispatch(
      updateVaccinationDetails({
        ...updatedUserVaccineDetails,
        appointmentDate: chosenDate,
        appointmentTime: chosenTime,
      })
    );

    navigate('/dashboard/appointment_details')
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

          <DatePicker onChange={onChange} format={dateFormat} />

          <button className="button" onClick={progressToFinalPage}>
              {" "}
              Proceed
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
                  {time}
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
