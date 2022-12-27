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
import Home from "./Home/Home";
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
          <button>
            <Link to="blog">
              <img src={HomeIcon} alt="" />
              <span>Home</span>
            </Link>
          </button>
          <button>
            <img src={ScheduleIcon} alt="" />
            <span>Schedule</span>
          </button>
          <button>
            <img src={Clock} alt="" />
            <span>Tracker</span>
          </button>
          <button>
            <img src={Chaticon} alt="" />
            <span>Chat with Doctor</span>
          </button>
          <button>
            <img src={Blogicon} alt="" />
            <span>Blog</span>
          </button>
          <button>
            <img src={Addicon} alt="" />
            <span>Add Child</span>
          </button>
          <button>
            <img src={ProfileIcon} alt="" />
            <span>My Profile</span>
          </button>
          <button>
            <img src={SettingIcon} alt="" />
            <span>Settings</span>
          </button>
          <button>
            <img src={LogoutIcon} alt="" />
            <span>Logout</span>
          </button>

          <Outlet />
        </div>
      </div>
      <div className="body">
        <div className="topbar">
          <div>
            <button>
              <img src={Notification} alt="notification" />
            </button>
            <div className="user">
              <img src={User} alt="User" />
              <div className="">
                <h4>John Doe</h4>
                <small>Patient</small>
              </div>
            </div>
          </div>
        </div>

        <div className="main">
          <Home />
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
