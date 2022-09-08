import React from "react";
import about from "../img/about.jpg";
import Navbar from "./Navbar";

function About() {
  return (
      <div className="container pt-4">
        <Navbar/>
        <div className="about d-flex justify-content-between">
          <div className="col-lg-5 about-img">
            <img src={about} alt="#" />
          </div>
          <div className="col-lg-6 about-right">
            <h2>👀 Hello, there👋</h2>
            <p className="about-data my-4">
              I'm Vimal Kumar and friends call me Vivek. I'm user interface designer. recently i completed Masters in Computer
              Applications degree at Graphic Era University, Dehradun.Solving problems via digital products has
              been my passion over the years.Currently, I’m based in Dehradun, but originally from the cultural
              capital Uttarakhand, India.
            </p>

            <p className="about-data my-4">
              In my free time, I love to draw 🎨, Learning to bake 🍪, and eat out with friends :) 🍜I'm always down for a chat.
            </p>

      <div className="about-edu">
        <div className="hobbies py-2">
        <h3 className="label">My Hobbies</h3>
            <h2>
              <span style={{ color: "#F1F1F1;" }}>
                🎨 ♟ ✈ 🎮&nbsp; 📸&nbsp;{" "}
              </span>
            </h2>
        </div>
        
        <div className="about-edu-pg py-2">
          <h3 className="label">🎓 Education</h3>
            <h6>Masters in Computer Applications, Graphic Era University</h6>
            <p>Sep 2020 - Aug 2022</p>
            <h6>Bachelor in Computer Applications, Shriram Institute of Management & Technology</h6>
            <p>Sep 2020 - Aug 2022</p>
          </div>
        </div>
          </div>
        </div>
      </div>
  );
}

export default About;
