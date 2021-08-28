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
      <div className="btn-conta">
    <div class="button2" onClick={callContact}>
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
