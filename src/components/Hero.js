import { React} from "react";
import Planet from "../images/planet.svg";
import Planet2 from "../images/planet-2.svg";
import Planet3 from "../images/planet-3.svg";
import Planet4 from "../images/planet-4.svg";
import { useHistory } from "react-router";
import GetStart from "./GetStart";
import "../components/Hero.css";

const Hero = () => {
  let history = useHistory();

  const callHome = () => {
    console.log("Clicked");
    history.push("/home");
  };
  const callAbout = () => {
    console.log("Clicked");
    history.push("/about");
  };
  const callLogin = () => {
    console.log("Clicked");
    history.push("/login");
  };
  const callContact = () => {
    console.log("Clicked");
    history.push("/contact");
  };

  return (
    <div className="homeLayoutCont">
      <div className="circle">
        <img src={Planet} alt="planet" onClick={callHome} />
        <img src={Planet2} alt="planet2" onClick={callAbout} />
        <img src={Planet3} alt="planet3" onClick={callLogin} />
        <img src={Planet4} alt="planet4" onClick={callContact} />
      </div>
      <div className="getStartBtn">
        <GetStart />
      </div>
    </div>
  );
};

export default Hero;
