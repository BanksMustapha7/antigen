import React, { useState } from "react";
import "./dashboard.css";
import Group286 from "../../assets/Group 286.png";
import add from '../../assets/add.png'
import patients from '../../assets/Patient.png'
import Rarr from "../../assets/rarr.png";
import LogoutIcon from "../../assets/logout.png";
import overview from '../../assets/Overview.png'
import SettingIcon from "../../assets/settingicon.png";
import Notification from "../../assets/notification.png";
import User from "../../assets/user.png";
import { Link, Outlet, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  setCurrentUserEmail,
  setFirstName,
  setLastName,
  setProfilePic,
  setUserId,
} from "../../Redux/Auth/authSlice";
import { useGetvaccinationsQuery } from "../../Redux/Vaccinations/vaccinationApiSlice";

export function AdminDashboard() {
  const [close, setClose] = useState(true);
  const [direction, setDirection] = useState(true);

  const email = useSelector(setCurrentUserEmail);
  const firstName = useSelector(setFirstName);
  const lastName = useSelector(setLastName);
  const profilePic = useSelector(setProfilePic);
  const userId = useSelector(setUserId);

  // console.log(user);

  const {
    data: vaccinationSchedules,
    isLoading,
    isError,
  } = useGetvaccinationsQuery(userId);
  console.log(vaccinationSchedules);
  console.log("email", email);
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
  console.log("Profile Picture:", profilePic);
  console.log("UserId:", userId);

  const closeMenu = () => {
    close === true ? setClose(false) : setClose(true);
    direction === true ? setDirection(false) : setDirection(true);
  };
  const mobileDir = () => {
    close === true ? setClose(false) : setClose(true);
  };
  const styles = {
    changeD: { right: "-1.5rem", transform: "rotate(180deg)" },
  };

  const navLinkStyles = ({isActive}) => {
    return {
      backgroundColor: isActive ? '#A69BE7' : '',
    }
  }

  return (
    <div className="dashboard">
      <div className={`sidebar + ${close ? "mobileSlide" : ""}`}>
        <img
          src={Rarr}
          alt="sidebar"
          className="open"
          onClick={closeMenu}
          style={direction === true ? styles.changeD : {  display: "block", }}
        />

        <div className="logo">
          <img src={Group286} alt="logo" />
        </div>

        <hr />

        <div className="ul">
          <NavLink to="/admindashboard" style={navLinkStyles} className="link">
            <img src={overview} alt="" />
            <span>Overview</span>
          </NavLink>

          <NavLink style={navLinkStyles} className="link" to="patient">
            <img src={patients} alt="" />
            <span>Patients</span>
          </NavLink>
          <NavLink style={navLinkStyles} className="link" to="/children">
            <img src={add} alt="" />
            <span>Children</span>
          </NavLink>
          <NavLink style={navLinkStyles} className="link" to="settings">
            <img src={SettingIcon} alt="" />
            <span>Settings</span>
          </NavLink>
          <NavLink style={navLinkStyles} className="link" to="/login">
            <img src={LogoutIcon} alt="" />
            <span>Logout</span>
          </NavLink>
        </div>
      </div>
      <div className="body">
        <div className="topbar">
          <div>
            <button>
              <Link to='notifications'><img src={Notification} alt="notification"/></Link>
            </button>
            <div className="user">
              <img src={User} alt="User" />
              <div className="">
                <h4>Shola Adeyemi</h4>
                <small>Administrator</small>
              </div>
            </div>
          </div>
        </div>

        <div className="main">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

/*
Note

Here You have all the details you need already. The Firsname, last name, email, profile picture
- For the section where you have to display the vaccinations, the successful and pending ones, I will suggest you do a client side sorting to differentiate which is successful and which is pending.
There is a vaccination status key that is returned from the api so you can use that to sort.
*/
