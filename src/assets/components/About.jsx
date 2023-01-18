import React from "react";
import about from "../img/about.jpg";
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
              <h3 className="fw-bold">Hello, there</h3>
              <p className="about-data my-4">
                My name is Vimal Kumar, but my friends call me Vivek. I am a passionate UX/UI designer with a recently completed Masters in Computer Applications degree from Graphic Era University in Dehradun. Solving problems through digital products has been a driving force in my career. Currently, I am based in Dehradun, but I am originally from the cultural capital of Uttarakhand, India.
                In my free time, I enjoy expressing my creativity through drawing and learning new baking techniques. I also love to socialize and try new foods with friends. I am always open for a conversation and connecting with new people.
              </p>
            </div>
        </div>
          
      <div className="about-edu">
        <div className="hobbies py-3">
          <h2 className="py-4 fw-bold">My Hobbies</h2>
              <h2>
                <span style={{ color: "#F1F1F1;" }}>
                  🎨 ♟ ✈ 🎮&nbsp; 📸&nbsp;{" "}
                </span>
              </h2>
          </div>
        
        <div className="about-edu-pg py-4">
          <h2 className="py-4 fw-bold">Education</h2>
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
