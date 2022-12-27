import React from "react";
import "./home.css";
import Welcome from "../../../assets/welcome.png";
import Polio from "../../../assets/polio.png";
import Covid from "../../../assets/covid.png";
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
      <div className="top">
        <div className="box1">
          <div className="greeting">
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

          <div className="vaccineCount">
            <h3>Vaccination Overview</h3>
            <div className="boxes">
              <div
                className="card count"
                style={{ backgroundColor: "#084482" }}
              >
                <h4>TOTAL VACCINES GOTTEN</h4>
                <h3>14</h3>
              </div>
              <div
                className="card count"
                style={{ backgroundColor: "#003265" }}
              >
                <h4>NUMBER OF PENDING VACCINES</h4>
                <h3>7</h3>
              </div>
              <div className="card count" style={{ background: "#042241" }}>
                <h4>SUCCESS VACCINATION</h4>
                <h3>7</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="card rBlog">
          <h3>Recent Blog</h3>

          <div className="reads">
            <img src={Covid} alt="" />
            <div className="box">
              <p>3 mins read</p>
              <h3>The improtance of the COVID-19 vaccine</h3>
              <small>Read Blog -&gt;</small>
            </div>
          </div>
          <div className="reads">
            <img src={Polio} alt="" />
            <div className="box">
              <p>5 mins read</p>
              <h3>The polio vaccine for children</h3>
              <small>Read blog -&gt;</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
