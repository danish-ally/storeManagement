import React from "react";
import "../components/GetStart.css";
import { useHistory } from "react-router";

function GetStart() {
  let history = useHistory();
  const callContact = () => {
    console.log("Clicked");
    history.push("/contact");
  };
  return (
      <div className="btn-conta" >
    <div class="button2" onClick={callContact}style={{ marginLeft: "0",marginTop: "20px" }} >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Get Started
    </div>
    </div>
  );
}

export default GetStart;
