import React from "react";
import "./schedule.css";
function Schedule() {
  return (
    <div className="schedule">
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
          <button>Covid-19 Vaccine</button>
          <button>Polio Vaccine</button>
          <button>Monkeypx Vaccine</button>
          <button>Hepatitis-A Vaccine</button>
          <button>Hepatitis-B Vaccine</button>
          <button>Measles Vaccine</button>
          <button>Smallpox vaccine</button>
          <button>Yellow Fever Vaccine</button>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
