import { React, useState } from "react";
import "./Contact.css";
// import GetStart from "../components/GetStart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";

function Contact() {
  const [state, setstate] = useState({
    firstname: "",
    lastname: "",
    Email: "",
    subject: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setstate((prevstate) => ({ ...prevstate, [name]: value }));
    console.log(state);
  };
  const handleSubmit = (e) => {
    console.log(state.firstname, state.lastname, state.Email, state.subject);
  };

  const notify = () => {
    toast.success("Submitted succesfully!");
  };

  let history = useHistory();
  const callContact = () => {
    console.log("Clicked");
    history.push("/contact");
  };
  return (
    <div className="contact-cont">
      <div className="left-cont1">
        <div className="title2">
          <h3>Get in touch..</h3>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            {/* <label for="fname">First Name</label> */}
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="First Name"
              onChange={handleChange}
            />

            {/* <label for="lname">Last Name</label> */}
            <input
              type="text"
              id="lname"
              name="lastname"
              placeholder="Last Name"
              onChange={handleChange}
            />
            {/* <label for="email">Email</label> */}
            <input
              type="text"
              id="Email"
              name="Email"
              placeholder="Email"
              onChange={handleChange}
            />

            {/* <label for="subject">Subject</label> */}
            <textarea
              id="subject"
              name="subject"
              placeholder="What's on your mind?"
              style={{
                height: "200px",
              }}
              onChange={handleChange}
            ></textarea>
          </form>
        </div>
      </div>
      <div className="middle-btn">
        {state.firstname === "" ||
        state.lastname === "" ||
        state.Email === "" ||
        state.subject === "" ? (
          <>
            <div class="button2" style={{ cursor: "not-allowed" }}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </div>
          </>
        ) : (
          <>
            <div class="button2" onClick={notify}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </div>
            <ToastContainer />
          </>
        )}
      </div>
      <div className="right-circle">
        <div className="esp1"></div>
        <div className="esp2"></div>
        <div className="esp3"></div>
        <div className="esp4"></div>
        <div className="esp5"></div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Contact;
