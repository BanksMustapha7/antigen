import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import RequireAuth from "./Redux/Auth/RequireAuth";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import Homepage from "./Pages/Home/Homepage";
import Fp from "./Pages/ForgotPassword/Fp";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Blog from "./Pages/Dashboard/Blog/Blog";
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
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/forgot_password" element={<Fp />} />
              <Route path="/Dashboard" element={<Dashboard />}>
                <Route path="blog" element={<Blog />} />
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
