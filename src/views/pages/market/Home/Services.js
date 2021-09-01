import React from "react";
import "./Services.css";

function Services() {
  return (
    <div className="about-cont">
      <div className="experienceCont" style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }}>
        <h2>I work on..</h2>
        <div
          class="accordion accordion-flush"
          id="accordionFlushExample"
          style={{
            width: "100%",
            border: "none",
            marginTop: "30px",
          }}
        >
          <div
            class="accordion-item"
            // style={{
            //   borderColor: "white",
            // }}
            className="all-btn"
          >
            <h2 class="accordion-header" id="flush-headingOne">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={{
                  backgroundColor: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.2rem"
    
                }}
              >
                Investment Advisory Services
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingOne"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{
                  backgroundColor: "#fff",
                  textAlign: "justify",
                }}>
                We offer a suite of investment opportunities by carefully vetted
                external managers. Clients work with their Private Wealth
                Management teams to select from investment vehicles covering the
                entire asset spectrum—including cash, fixed income and equities,
                as well as a range of alternative offerings such as private
                equity and hedge funds. Our specialists also create custom
                investment vehicles that meet the needs of individual clients.{" "}
                <br />
                <br />
                Investment Strategy Group (ISG)—an independent team of global
                investment professionals—provides guidance on asset allocation
                and portfolio diversification. Clients can access ISG analyses
                of key investment issues and participate in timely discussions
                on market activity.
              </div>
            </div>
          </div>
          <div class="accordion-item"
          // style={{
          //     borderColor: "white",
          //   }}>
          className="all-btn"
          >
            <h2 class="accordion-header" id="flush-headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={{
                  backgroundColor: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.2rem"
                }}
              >
                Trading, Hedging and Structuring Solutions
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingTwo"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{
                  backgroundColor: "#fff",
                  textAlign: "justify",
                }}>
              we offer clients the ability to trade in multiple securities and asset classes around the world. Many of our clients look to us not only for our execution capabilities but also for hedging and structuring solutions that help them manage a broad spectrum of risks. By combining our understanding of a client’s objectives with our strong derivatives expertise, we provide industry-leading advice, solutions and liquidity.
              </div>
            </div>
          </div>
          <div class="accordion-item" className="all-btn">
            <h2 class="accordion-header" id="flush-headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                style={{
                  backgroundColor: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.2rem"
                }}
              >
                Wealth Advisory Services
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingThree"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{
                  backgroundColor: "#fff",
                  textAlign: "justify",
                }}>
              To address client needs for income, estate planning, gift planning, generation-skipping tax planning and philanthropy, our Wealth Advisory Services group can help to craft and implement holistic wealth management solutions.
              </div>
            </div>
          </div>
          <div class="accordion-item" className="all-btn">
            <h2 class="accordion-header" id="flush-headingFour">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFour"
                aria-expanded="false"
                aria-controls="flush-collapseFour"
                style={{
                  backgroundColor: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.2rem"
                }}
              >
                Trust and Estate Administration Services
              </button>
            </h2>
            <div
              id="flush-collapseFour"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFour"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{
                  backgroundColor: "#fff",
                  textAlign: "justify",
                }}>
              The dedicated team administers a wide variety of trusts, estates, foundations, and other fiduciary mandates that integrate a broad spectrum of wealth advisory services and investment strategies.
              </div>
            </div>
          </div>
          <div class="accordion-item" className="all-btn">
            <h2 class="accordion-header" id="flush-headingFive">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseFive"
                aria-expanded="false"
                aria-controls="flush-collapseFive"
                style={{
                  backgroundColor: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.2rem"
                }}
              >
                Advisory Services for Select Institutions
              </button>
            </h2>
            <div
              id="flush-collapseFive"
              class="accordion-collapse collapse"
              aria-labelledby="flush-headingFive"
              data-bs-parent="#accordionFlushExample"
            >
              <div class="accordion-body" style={{
                  backgroundColor: "#fff",
                  textAlign: "justify",
                }}>
              For US clients and Global clients our capabilities extend to managing the investment needs of small- to mid-size institutions such as foundations and endowments. Our specialized support and advice can be tailored to the organization’s needs and goals.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="circle">
        <div className="esp1"></div>
        <div className="esp2"></div>
        <div className="esp3"></div>
        <div className="esp4"></div>
        <div className="esp5"></div>
      </div> */}
    </div>
  );
}

export default Services;
