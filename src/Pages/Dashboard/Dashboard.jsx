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
import User from "../../assets/user.png";
import Home from "./Home/Home";
function Dashboard() {
  return (
    <div className="dashboard">
      <div className="sidebar">
        <div className="logo">
          <img src={Group286} alt="logo" />
        </div>

        <hr />

        <div className="ul">
          <button>
            <img src={HomeIcon} alt="" />
            <span>Home</span>
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
          Ohaiyo!
          <Home />
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
