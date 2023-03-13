import React from "react";
import "./success.css";
import SuccessImg from "../../../../assets/success.png";
import { updatedVaccineDetails } from "../../../../Redux/VaccinationSchedule/vaccinationDetailsSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Success() {
  const navigate = useNavigate();
  const updatedUserVaccineDetails = useSelector(updatedVaccineDetails);
  const { appointmentDate, appointmentTime } = updatedUserVaccineDetails;

  const returnToHomePage = () => {
    localStorage.removeItem("persist:vaccinationDetails");
    navigate("/dashboard/home");
  };

  return (
    <div className="successpage">
      <div>
        <img src={SuccessImg} alt="Success" />
        <h3>Appointment Booked Successfully!</h3>
        <h4>
          Your next appointment is schecduled for {appointmentTime},{" "}
          {appointmentDate}
        </h4>
      </div>
      <button onClick={returnToHomePage}>Done</button>
    </div>
  );
}

export default Success;
