import React from "react";
import "./AboutMe.css";
import WOW from "wow.js"
const AboutMe = () => {
  new WOW().init();
  return (
    
    <div className="aboutMe_screen">
      <div className="container_AboutMe container" id="aboutMe">
        <div className="aboutMe_titleContainer">
          <h2 className="aboutMe_titleBack">
            ОБО МНЕ<span className="aboutMe_title">ОБО МНЕ</span>
          </h2>
        </div>
        <div className="txt_AboutMe">
            <p className=" animate__animated animate__fadeInRight wow" data-wow-delay="0.1s">Lorem ipsum dolor, sit amet</p>
            <p className=" animate__animated animate__fadeInRight wow" data-wow-delay="0.2s">consectetur adipisicing elit. Veniam</p>
            <p className=" animate__animated animate__fadeInRight wow" data-wow-delay="0.3s">veritatis inventore perferendis</p>
            <p className=" animate__animated animate__fadeInRight wow" data-wow-delay="0.4s">harum asperiores consectetur</p>
            <p className=" animate__animated animate__fadeInRight wow" data-wow-delay="0.5s">temporibus accusantium unde id,</p>
            <p className=" animate__animated animate__fadeInRight wow" data-wow-delay="0.6s">consequatur numquam blanditiis</p>
            <p className=" animate__animated animate__fadeInRight wow" data-wow-delay="0.7s">saepe Reprehenderit.</p>

        </div>
      </div>
    </div>
  );
};

export default AboutMe;
