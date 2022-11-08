import React from "react";
import "./dashboard.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Group286 from "../../assets/Group 286.png";
import Chaticon from "../../assets/chaticon.png";
import HomeIcon from "../../assets/homeicon.png";
import LogoutIcon from "../../assets/logout.png";
import ProfileIcon from "../../assets/profileicon.png";
import Blogicon from "../../assets/blogicon.png";
import ScheduleIcon from "../../assets/scheduleicon.png";
import SettingIcon from "../../assets/settingicon.png";
import Addicon from "../../assets/add.png";
import Clock from "../../assets/clock.png";
import Notification from "../../assets/notification.png";
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo">
          <img src={Group286} alt="logo" />
        </div>

        <hr />

        <ul>
          <li>
            <img src={HomeIcon} alt="" />
            <span>Home</span>
          </li>
          <li>
            <img src={ScheduleIcon} alt="" />
            <span>Schedule</span>
          </li>
          <li>
            <img src={Clock} alt="" />
            <span>Tracker</span>
          </li>
          <li>
            <img src={Chaticon} alt="" />
            <span>Chat with Doctor</span>
          </li>
          <li>
            <img src={Blogicon} alt="" />
            <span>Blog</span>
          </li>
          <li>
            <img src={Addicon} alt="" />
            <span>Add Child</span>
          </li>
          <li>
            <img src={ProfileIcon} alt="" />
            <span>My Profile</span>
          </li>
          <li>
            <img src={SettingIcon} alt="" />
            <span>Settings</span>
          </li>
          <li>
            <img src={LogoutIcon} alt="" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
      <div className="body">
        <div className="topbar">
          <div>
            <button>
              <img src={Notification} alt="notification" />
            </button>
            <div className="user">
              <h4>John Doe</h4>
              <small>Patients</small>
            </div>
          </div>
        </div>

        <div className="main">
          Ohaiyo!
          {/**
     
          <Router>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/login" element={<Chat />} />
              <Route path="/signup" element={<Schedule />} />
            </Routes>
          </Router>*/}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
