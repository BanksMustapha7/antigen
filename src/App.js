import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import Homepage from "./Pages/Home/Homepage";
import Fp from "./Pages/ForgotPassword/Fp";
import Dashboard from "./Pages/Dashboard/Dashboard";
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
              <Route path="/Dashboard" element={<Dashboard />}></Route>

              {/* Protected Route  */}
              <Route element={<RequireAuth />}>
                <Route path="/Dashboard" element={<Dashboard />} />
              </Route>
            </Route>
            <Route path="/" element={<Layout />}>
              {/* Public Routes */}

              <Route index element={<Homepage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/forgot_password" element={<Fp />} />

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
