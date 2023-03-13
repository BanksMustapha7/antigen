import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  setCurrentUserEmail,
  setFirstName,
  setLastName,
  setUserId,
} from "../../../Redux/Auth/authSlice";
import {
  updateVaccinationDetails,
} from "../../../Redux/VaccinationSchedule/vaccinationDetailsSlice";
import "./schedule.css";
function Schedule() {
  const vaccines = [
    {
      id: 1,
      vaccineName: "Covid-19 Vaccine",
    },
    {
      id: 2,
      vaccineName: "Polio Vaccine",
    },
    {
      id: 3,
      vaccineName: "Monkeypx Vaccine",
    },
    {
      id: 4,
      vaccineName: "Hepatitis-A Vaccine",
    },
    {
      id: 5,
      vaccineName: "Hepatitis-B Vaccine",
    },
    {
      id: 6,
      vaccineName: " Smallpox vaccine",
    },
    {
      id: 7,
      vaccineName: "Measles Vaccine",
    },
    {
      id: 8,
      vaccineName: "Yellow Fever Vaccine",
    },
  ];
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const email = useSelector(setCurrentUserEmail);
  const userId = useSelector(setUserId);
  const firstName = useSelector(setFirstName);
  const lastName = useSelector(setLastName);
  const [hospitalName, setHospital] = useState("");

  const moveToNextPage = (selectedVaccineName) => {
    if (hospitalName === "") {
      alert("Please Provide An hospital name");
      return;
    }

    console.log(firstName, lastName);

    const userVaccinationData = {
      patientName: `${firstName} ${lastName}`,
      patientId: userId,
      patientEmail: email,
      vaccinationType: selectedVaccineName,
      hospitalName: `${hospitalName}`,
      appointmentDate: "",
      appointmentTime: "",
      vaccineDescription: "",
    };

    console.log(userVaccinationData);
    dispatch(updateVaccinationDetails(userVaccinationData));
    navigate("/dashboard/vaccination_appointment");
  };

  return (
    <div className="schedule">
      <div className="stg1">
        <div className="tabs">
          <button className="activeTab">VACCINATION</button>
          <button>MEDICATION</button>
        </div>

        <div className="hospital">
          <div className="box">
            <h3>Hospital</h3>
            <small>Show favorite hospital</small>
          </div>

          <input
            type="search"
            name="hospitals"
            id=""
            placeholder="search for hospital"
            onChange={(e) => setHospital(e.target.value)}
          />
        </div>

        <div className="vaccinesType">
          <div className="hospital vactype">
            <div className="box">
              <h3>Vaccination Type</h3>
              <small>Select the vaccination type you’ll like to get</small>
            </div>

            <input
              type="search"
              name=""
              id=""
              className="vacType"
              placeholder="search for vaccination here"
            />
          </div>

          <div className="vaccines">
            {vaccines.map(({ id, vaccineName }) => {
              return (
                <button key={id} onClick={() => moveToNextPage(vaccineName)}>
                  {vaccineName}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;

/*
I don't know how many hospital, tesla has in mind to work with, but what I did on this page is quite simple
It is the name the user types in that they put as the hospital name
so what you can do is have an array of hospitals, once a user types in a name, they get suggestions from that hospital names array
And then they can easily click on the hospital  name and select.
This also implies that you will need to do some validation check too to confirm if the user actually chooses a hospital name from the names in the array, you get?
*/
