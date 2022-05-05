import React from "react";
import about from "../img/about.jpg";
import Footer from "./Footer";


function About() {
  return (
    <>
      <div className="container">
        <div className="about d-flex justify-content-between">
          <div className="col-lg-6 about-right pt-4">
            <h2>👀 Hello, there👋</h2>
            <p className="about-data my-4">
              I'm Vimal Kumar and friends call me Vivek. I'm a FrontEnd Web
              Developer with a Bachelors degree in Computer Science &
              Engineering. Currently, I'm pursuing a Masters in Computer
              Applications at Graphic Era University, Dehradun. As a FrontEnd
              Web Developer, I would want to contribute to the complete project
              life cycle from the ideation phase to the implementation phase and
              also managing the same. Solving problems via digital products has
              been my passion over the years.
            </p>

            <p className="about-data my-4">
              Apart from my work, when I’m not behind my MacBook you can see me
              sitting in a cafe sipping a hot cup of cappuccino or in a
              restaurant trying out a new vegetarian dish or clicking
              photographs. I take occasional trips, at least once a year to
              detach myself from the daily routine and recharge myself.
              Currently, I’m based in Dehradun, but originally from the cultural
              capital Uttarakhand, India.
            </p>

            <label className="Hobbbies">My Hobbies</label>
            <h2>
              <span style={{ color: "#F1F1F1;" }}>
                🎨 ♟ ✈ 🎮&nbsp; 📸&nbsp;{" "}
              </span>
            </h2>
          </div>
          <div className="col-lg-5 about-img">
            <img src={about} alt="#" />
          </div>
        </div>
        <div className="about-edu">
          <h2 className="title py-4">🎓 Education</h2>
          <div className="about-edu-pg">
            <h6>Masters in Computer Applications, Graphic Era University</h6>
            <p>Sep 2020 - Aug 2022</p>
            <h6>
              Bachelor in Computer Applications, Shriram Institute of Management
              & Technology
            </h6>
            <p>Sep 2020 - Aug 2022</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;
