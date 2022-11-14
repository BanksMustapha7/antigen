import React from "react";
import "./home.css";
import Welcome from "../../../assets/welcome.png";
function Home() {
  const time = new Date().getHours();
  let greeting;
  if (time < 10) {
    greeting = "Good morning";
  } else if (time < 16) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good evening";
  }

  const user = "John";
  return (
    <div className="home">
      <div className="card greet" style={{ background: "#fff" }}>
        <div>
          <h2>
            {greeting}, <span>{user}</span>
          </h2>
          <p>Welcome to Antigen!</p>
          <button>Chat with a doctor</button>
        </div>
        <img src={Welcome} alt="welcome" srcset="" />
      </div>
    </div>
  );
}

export default Home;
