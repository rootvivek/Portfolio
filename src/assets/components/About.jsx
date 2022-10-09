import React from "react";
import about from "../img/about.png";
import Navbar from "./Navbar";

function About() {
  return (
    <div className="background">
      <div className="container pt-4">
        <Navbar/>
        <div className="about">
            <div className="col-lg-3 about-img">
              <img src={about} alt="#" />
            </div>
            <div className="col-lg-9 about-right">
              <h2>Hello, there</h2>
              <p className="about-data my-4">
                I'm Vimal Kumar and friends call me Vivek. I'm frontend web developer and UI designer. recently i completed Masters in Computer
                Applications degree at Graphic Era University, Dehradun.Solving problems via digital products has
                been my passion over the years.Currently, I’m based in Dehradun, but originally from the cultural
                capital Uttarakhand, India.
              </p>
              <p className="about-data my-4">
                In my free time, I love to draw 🎨, Learning to bake 🍪, and eat out with friends :) 🍜I'm always down for a chat.
              </p>
            </div>
        </div>
          
      <div className="about-edu">
        <div className="hobbies py-3">
          <h1 className="title">My Hobbies</h1>
              <h2>
                <span style={{ color: "#F1F1F1;" }}>
                  🎨 ♟ ✈ 🎮&nbsp; 📸&nbsp;{" "}
                </span>
              </h2>
          </div>
        
        <div className="about-edu-pg py-4">
          <h1 className="title">Education</h1>
            <h5>Masters in Computer Applications, Graphic Era University</h5>
            <p>Sep 2020 - Aug 2022</p>
            <h5>Bachelor in Computer Applications, Shriram Institute of Management & Technology</h5>
            <p>Sep 2017 - Aug 2020</p>
          </div>
        </div>
        </div>
        </div>
  );
}

export default About;
