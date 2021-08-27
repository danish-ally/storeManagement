import React from "react";
import "./WorkingExp.css";
import company1 from "../../../../images/company1.png"
import company2 from "../../../../images/company2.png"
import Goldman from "../../../../images/Goldman.png"
import company3 from "../../../../images/company3.png"

function WorkingExp() {
  return (
    <div className="WorkingExp-cont">
      <div className="left-cont">
        <div className="title" style={{
          justifyContent: "flex-start"
        }}>
          <h3>
          Working with these Institutions helped he gain experience over the years.
          </h3>
        </div>
        <div className="images">
          <div className="img1">
            <img src={company1} alt="1" />
          </div>
          <div className="img2">
          <img src={company2} alt="2" />
          </div>
          <div className="img3">
          <img src={Goldman} alt="goldman" />
          </div>
          <div className="img4">
          <img src={company3} alt="3" />
          </div>
          {/* <div className="img1"></div> */}
        </div>
      </div>
      {/* <div className="right-cont">
        <div className="circle2">
          <div className="espp1"></div>
          <div className="espp2"></div>
          <div className="espp3"></div>
          <div className="espp4"></div>
          <div className="espp5"></div>
        </div>
      </div> */}
    </div>
  );
}

export default WorkingExp;
