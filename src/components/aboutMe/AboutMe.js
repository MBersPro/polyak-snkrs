import React from "react";
import "./AboutMe.css";
import MovingText from "react-moving-text";

const AboutMe = () => {
  return (
    <div className="aboutMe_screen">
      <div className="container_AboutMe container" id="aboutMe">
        <div className="aboutMe_titleContainer">
          <h2 className="aboutMe_titleBack">
            ОБО МНЕ<span className="aboutMe_title">ОБО МНЕ</span>
          </h2>
        </div>
        <div className="aboutMe_square">
          {/* <p className="txt_AboutMe">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            veritatis inventore perferendis harum asperiores consectetur
            temporibus accusantium unde id, consequatur numquam blanditiis saepe
            aut. Reprehenderit.
          </p> */}
          <MovingText
            className="txt_AboutMe"
            type="fadeInFromRight"
            duration="1000ms"
            delay="3s"
            direction="normal"
            timing="ease"
            iteration={1}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam
            veritatis inventore perferendis harum asperiores consectetur
            temporibus accusantium unde id, consequatur numquam blanditiis saepe
            aut. Reprehenderit.
          </MovingText>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
