import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import RequireAuth from "./Redux/Auth/RequireAuth";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import Homepage from "./Pages/Home/Homepage";
import Fp from "./Pages/ForgotPassword/Fp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Home from "./Pages/Dashboard/Home/Home";
import Profile from "./Pages/Dashboard/Profile/Profile";
import Addchild from "./Pages/Dashboard/AddChild/Addchild";
import Schedule from "./Pages/Dashboard/Schedule/Schedule";
import { Notifications } from "./Pages/Notifications/Notifications";
import { Landingpage } from "./Pages/Landing page/Landingpage";
import { AdminDashboard } from "./Pages/Admin Dashboard/Dashboard";
import { Overview } from "./Pages/Admin Dashboard/Overview/Overview";
import { PatientDetails } from "./Pages/Admin Dashboard/Patient Details/PatientDetails";
import { ChildDetails } from "./Pages/Admin Dashboard/Patient Details/childDetails";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Public Routes */}

              <Route index element={<Homepage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/index" element={<Landingpage/>} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/forgot_password" element={<Fp />} />
              <Route path="/Dashboard" element={<Dashboard />}>
                <Route path="home" index element={<Home />} />
                <Route path="profile" element={<Profile />} />
                <Route path="addchild" element={<Addchild />} />
                <Route path="notifications" element={<Notifications />} />
                <Route path="schedule" element={<Schedule />} />
              </Route>
              <Route path="admindashboard" element={<AdminDashboard />}>
                <Route index element={<Overview />} />
                <Route path="patient-details" element={<PatientDetails/>} />
                <Route path="child-details" element={<ChildDetails/>} />
              </Route>

              {/* Protected Route  */}
              <Route element={<RequireAuth />}>
                <Route path="/Dashboard" element={<Dashboard />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;

/*
Note:

1. All pages that require a user to login first before they can access has to go into the route for the protected route just like the Dashboard Page You get?

*/
