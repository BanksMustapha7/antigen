import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./schedule.css";
function Schedule() {
  const [hospital, setHospital] = useState();
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
            onChange={(e) => setHospital(e)}
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
            <button>
              {" "}
              <Link to="/dashboard/vaccination_appointment">
                Covid-19 Vaccine{" "}
              </Link>
            </button>

            <button>
              {" "}
              <Link to="/dashboard/vaccination_appointment">Polio Vaccine</Link>
            </button>

            <button>
              <Link to="/dashboard/vaccination_appointment">
                Monkeypx Vaccine{" "}
              </Link>
            </button>

            <button>
              <Link to="/dashboard/vaccination_appointment">
                Hepatitis-A Vaccine{" "}
              </Link>
            </button>

            <button>
              <Link to="/dashboard/vaccination_appointment">
                Hepatitis-B Vaccine
              </Link>
            </button>

            <button>
              <Link to="/dashboard/vaccination_appointment">
                Smallpox vaccine{" "}
              </Link>
            </button>

            <button>
              <Link to="/dashboard/vaccination_appointment">
                Measles Vaccine{" "}
              </Link>
            </button>

            <button>
              <Link to="/dashboard/vaccination_appointment">
                Yellow Fever Vaccine{" "}
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Schedule;
