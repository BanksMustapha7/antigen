import React from "react";
import { updatedVaccineDetails } from "../../../../Redux/VaccinationSchedule/vaccinationDetailsSlice";
import { useNavigate } from "react-router-dom";
import "./adetails.css";
import Edit from "../../../../assets/edit.png";
import { useSelector } from "react-redux";
import { useCreateVaccinationMutation } from "../../../../Redux/VaccinationSchedule/vaccinationDetailsApiSlice";

function Adetails() {
  const navigate = useNavigate();
  const updatedUserVaccineDetails = useSelector(updatedVaccineDetails);
  console.log(updatedUserVaccineDetails);

  const {
    hospitalName,
    vaccinationType,
    patientName,
    appointmentDate,
    appointmentTime,
  } = updatedUserVaccineDetails;

  const [createVaccination, { isLoading, isError, isSuccess }] =
    useCreateVaccinationMutation();

  const bookAppointment = async () => {
    //I am only consoling the error in case there is one, You should do a better error handling
    try {
      await createVaccination({ ...updatedUserVaccineDetails })
        .unwrap()
        .then(() => {
          console.log("Fufilled");
          navigate("/dashboard/status");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {}
  };

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
            <small>{hospitalName}</small>
          </div>

          <button className="edit">
            <img src={Edit} alt="edit" />
          </button>
        </div>

        <div className="body_tile">
          <div className="">
            <h4>Vaccination Type</h4>
            <small>{vaccinationType}</small>
          </div>

          <button className="edit">
            <img src={Edit} alt="edit" />
          </button>
        </div>

        <div className="body_tile">
          <div className="">
            <h4>Patient Name</h4>
            <small>{patientName}</small>
          </div>

          <button className="edit">
            <img src={Edit} alt="edit" />
          </button>
        </div>
        <div className="body_tile">
          <div className="">
            <h4>Appointment Date</h4>
            <small>{appointmentDate}</small>
            {/* <small>8th of August, 2022</small> */}
          </div>

          <button className="edit">
            <img src={Edit} alt="edit" />
          </button>
        </div>
        <div className="body_tile">
          <div className="">
            <h4>Time</h4>
            <small>{appointmentTime}</small>
          </div>

          <button className="edit">
            <img src={Edit} alt="edit" />
          </button>
        </div>

        <button className="book" onClick={bookAppointment}>
          {isLoading ? "Processing...." : "Book Appointment"}
        </button>
      </div>
    </div>
  );
}

export default Adetails;

/*
 I dont know what the plan for those edit icons are. You might want to reach out to the UI/UX designer.
 Also, in place of that processing text I used when the vaccine appointment is still loading, you might want to implement a spinner.
*/