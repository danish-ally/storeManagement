import { React } from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import frontPic from "../../../../src/images/frontPic.png"

const Home = (props) => {
  return (
    <div className="home-cont">
      <div
        className="intro"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "initial",
        }}
      >
        <div className="desc">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi. I am Nadeem. I am a Wealth Manager.")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Hi. I am Nadeem. I am a Wealth Manager.")
                .start();
            }}
          />
        </div>
      </div>
      <div className="photo">
        <img src={frontPic} alt="frontpic" />
      </div>
    </div>
  );
};

export default Home;
