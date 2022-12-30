import React from "react";

function Schedule() {
  return (
    <div>
      <div className="tabs">
        <button>VACCINATION</button>
        <button>MEDICATION</button>
      </div>

      <div className="hospital">
        <div className="box">
          <h3>Hospital</h3>
          <small>Show favorite hospital</small>
        </div>

        <input type="search" name="hospitals" id="" />
      </div>
    </div>
  );
}

export default Schedule;
