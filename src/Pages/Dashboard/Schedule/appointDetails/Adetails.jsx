import React, { useState } from "react";
import "./adetails.css";

function Adetails() {
  const [success, setSuccess] = useState(false);
  return (
    <div className="adetails">
      {success === false && (
        <div>
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

              <button>edit</button>
            </div>

            <div className="body_tile">
              <div className="">
                <h4>Vaccination Type</h4>
                <small>COVID-19 Vaccine</small>
              </div>

              <button>edit</button>
            </div>

            <div className="body_tile">
              <div className="">
                <h4>Patient Name</h4>
                <small>Joshua Jide</small>
              </div>

              <button>edit</button>
            </div>
            <div className="body_tile">
              <div className="">
                <h4>Appointment Date</h4>
                <small>8th of August, 2022</small>
              </div>

              <button>edit</button>
            </div>
            <div className="body_tile">
              <div className="">
                <h4>Time</h4>
                <small>9:00Am</small>
              </div>

              <button onClick={setSuccess(true)}>edit</button>
            </div>

            <button className="button">Book Appointment</button>
          </div>
          || (<div>Success!!</div>)
        </div>
      )}
    </div>
  );
}

export default Adetails;
