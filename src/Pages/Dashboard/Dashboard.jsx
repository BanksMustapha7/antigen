import React, { useState } from "react";
import "./dashboard.css";
import Group286 from "../../assets/Group 286.png";
import Chaticon from "../../assets/chaticon.png";
import Rarr from "../../assets/rarr.png";
import HomeIcon from "../../assets/homeicon.png";
import LogoutIcon from "../../assets/logout.png";
import ProfileIcon from "../../assets/profileicon.png";
import Blogicon from "../../assets/blogicon.png";
import ScheduleIcon from "../../assets/scheduleicon.png";
import SettingIcon from "../../assets/settingicon.png";
import Addicon from "../../assets/add.png";
import Clock from "../../assets/clock.png";
import Notification from "../../assets/notification.png";
import User from "../../assets/user.png";
import Layout from "../../Components/Layout";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  setCurrentUserEmail,
  setFirstName,
  setLastName,
  setProfilePic,
  setUserId,
} from "../../Redux/Auth/authSlice";
import { useGetvaccinationsQuery } from "../../Redux/Vaccinations/vaccinationApiSlice";

function Dashboard() {
  const [close, setClose] = useState(true);
  const [direction, setDirection] = useState(true);

  const email = useSelector(setCurrentUserEmail);
  const firstName = useSelector(setFirstName);
  const lastName = useSelector(setLastName);
  const profilePic = useSelector(setProfilePic);
  const userId = useSelector(setUserId);

  // console.log(user);

  
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

  return (
    <div className="dashboard">
      <div className={`sidebar + ${close ? "mobileSlide" : ""}`}>
        <img
          src={Rarr}
          alt="sidebar"
          className="open"
          onClick={closeMenu}
          style={direction === true ? styles.changeD : { display: "block" }}
        />

        <div className="logo">
          <img src={Group286} alt="logo" />
        </div>

        <hr />

        <div className="ul">
          <Link to="home" className="link">
            <img src={HomeIcon} alt="" />
            <span>Home</span>
          </Link>

          <Link className="link" to="schedule">
            <img src={ScheduleIcon} alt="" />
            <span>Schedule</span>
          </Link>
          <Link className="link">
            <img src={Clock} alt="" />
            <span>Tracker</span>
          </Link>
          <Link className="link">
            <img src={Chaticon} alt="" />
            <span>Chat with Doctor</span>
          </Link>
          <Link className="link">
            <img src={Blogicon} alt="" />
            <span>Blog</span>
          </Link>

          <Link to="addchild" className="link">
            <img src={Addicon} alt="" />
            <span>Add Child</span>
          </Link>

          <Link to="profile" className="link">
            <img src={ProfileIcon} alt="" />
            <span>My Profile</span>
          </Link>

          <Link className="link">
            <img src={SettingIcon} alt="" />
            <span>Settings</span>
          </Link>
          <Link className="link" to="/login">
            <img src={LogoutIcon} alt="" />
            <span>Logout</span>
          </Link>
        </div>
      </div>
      <div className="body">
        <div className="topbar">
          <div>
            <button>
              <img src={Notification} alt="notification" />
            </button>
            <div className="user">
              <img src={profilePic} alt="User" />
              <div className="">
                <h4>{firstName} {lastName}</h4>
                <small>Patient</small>
              </div>
            </div>
          </div>
        </div>

        <div className="main">
          <Layout/>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

/*
Note

Here You have all the details you need already. The Firsname, last name, email, profile picture
- For the section where you have to display the vaccinations, the successful and pending ones, I will suggest you do a client side sorting to differentiate which is successful and which is pending.
There is a vaccination status key that is returned from the api so you can use that to sort.
*/
