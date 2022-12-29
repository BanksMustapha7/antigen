import React, { useState } from "react";
import Profileicon from "../../assets/profileicon.png";
import "./userdetails.css";
function Userdetails() {
  const [file, setFile] = useState();
  function handleChange(e) {
    console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]));
  }

  return (
    <div className="details">
      <form className="image">
        <img src={file || Profileicon} alt="User Profile" srcset="" />
        <input
          className="file_input"
          type="file"
          placeholder="Upload Image"
          onChange={handleChange}
          alt="Profile Image"
        />
      </form>
      <form className="form" action="">
        <div className="rows">
          <div className="">
            <label htmlFor="">First Name</label>
            <input type="text" />
          </div>
          <div className="">
            <label htmlFor="">Last Name</label>
            <input type="text" />
          </div>
        </div>
        <div className="rows">
          <div className="">
            <label htmlFor="sex">Sex</label>
            <select name="sex" id="sex">
              <option value="">---</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Others">Others</option>
            </select>
          </div>
          <div className="">
            <label htmlFor="">Date of Birth</label>
            <input type="date" />
          </div>
        </div>
        <div className="rows">
          <div className="">
            <label htmlFor="">Country</label>
            <input type="text" />
          </div>
          <div className="">
            <label htmlFor="">Phone Number</label>
            <input type="text" />
          </div>
        </div>
        <button className="button">Update Details</button>
      </form>
    </div>
  );
}

export default Userdetails;
