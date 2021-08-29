import { React } from "react";
import "./Home.css";
import GetStart from "../../../../src/components/GetStart";
import PhotoAnimation from "../../../../src/components/PhotoAnimation";
import Typewriter from "typewriter-effect";

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
                .typeString("Hi! I'm Nadeem. I am a Wealth Manager.")
                .pauseFor(2000)
                .deleteAll()
                .typeString("Hi! I'm Nadeem. I am a Wealth Manager.")
                .start();
            }}
          />
        </div>
        <div className="get-btn">
          <GetStart name="Get Started" />
        </div>
      </div>
      <div className="photo">
        <PhotoAnimation />
      </div>
    </div>
  );
};

export default Home;
