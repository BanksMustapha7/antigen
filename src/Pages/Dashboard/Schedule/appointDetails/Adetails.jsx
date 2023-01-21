import React from "react";
import { Link } from "react-router-dom";
import "./adetails.css";
import Edit from "../../../../assets/edit.png";


function Adetails() {
  return (
    <div className="adetails">
      <div className="top">
        <h2>Appointment Details</h2>
        <small>Your appointment details are shown here.</small>
      </div>
      <div className="bodyy">
        <div className="body_tile">
          <div className="">
            <h4>Hospital Name</h4>
            <small>LASUTH</small>
          </div>

          <button className="edit">
            <img src={Edit} alt="edit" />
          </button>
        </div>

        <div className="body_tile">
          <div className="">
            <h4>Vaccination Type</h4>
            <small>COVID-19 Vaccine</small>
          </div>

          <button className="edit">
            <img src={Edit} alt="edit" />
          </button>
        </div>

        <div className="body_tile">
          <div className="">
            <h4>Patient Name</h4>
            <small>Joshua Jide</small>
          </div>

          <button className="edit">
            <img src={Edit} alt="edit" />
          </button>
        </div>
        <div className="body_tile">
          <div className="">
            <h4>Appointment Date</h4>
            <small>8th of August, 2022</small>
          </div>

          <button className="edit">
            <img src={Edit} alt="edit" />
          </button>
        </div>
        <div className="body_tile">
          <div className="">
            <h4>Time</h4>
            <small>9:00Am</small>
          </div>

          <button className="edit">
            <img src={Edit} alt="edit" />
          </button>
        </div>

        <Link to="/dashboard/status">
          <button className="book">Book Appointment</button>
        </Link>
      </div>
    </div>
  );
}

export default Adetails;
