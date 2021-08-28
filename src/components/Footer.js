import React from "react";
import "../components/Footer.css";
import Gmail from "../images/gmail.png"
import Linkedin from "../images/linkedin.png"

function Footer() {
  return (
      <>
    <div className="footer">
      <h2>NadeemSheikh.market</h2>
      <span>Get in touch with me</span>
    <div className="socialMedia">
        <img src={Gmail} alt="gmail" />
        <img src={Linkedin} alt="linkedin" />
    </div>
    </div>
    </>
  );
}

export default Footer;
