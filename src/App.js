import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/LoginPage/LoginPage";
import SignupPage from "./Pages/SignupPage/SignupPage";
import Homepage from "./Pages/Home/Homepage";
import Fp from "./Pages/ForgotPassword/Fp";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/forgot_password" element={<Fp />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
