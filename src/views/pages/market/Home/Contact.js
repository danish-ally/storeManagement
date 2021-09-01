import { React, useState } from "react";
import "./Contact.css";
// import GetStart from "../components/GetStart";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { submitContactUs } from "../../../../redux/contactUs/actions";

function Contact() {
  const [state, setstate] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setstate((prevstate) => ({ ...prevstate, [name]: value }));
    console.log(state);
  };
  const handleSubmit = (e) => {
    console.log(state.firstName, state.lastName, state.email, state.subject);
    e.preventDefault();
    dispatch(submitContactUs(state));
  };

  const notify = () => toast("Submitted successfully!");

  let history = useHistory();
  const callContact = () => {
    console.log("Clicked");
    history.push("/contact");
  };
  const dispatch = useDispatch();
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
              name="firstName"
              placeholder="First Name"
              onChange={handleChange}
            />

            {/* <label for="lname">Last Name</label> */}
            <input
              type="text"
              id="lname"
              name="lastName"
              placeholder="Last Name"
              onChange={handleChange}
            />
            {/* <label for="email">Email</label> */}
            <input
              type="text"
              id="email"
              name="email"
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
            {state.firstName === "" ||
            state.lastName === "" ||
            state.email === "" ||
            state.subject === "" ? (
              <>
                <button
                  class="button2"
                  style={{ cursor: "not-allowed", background: "#fff" }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </button>
              </>
            ) : (
              <>
                <button
                  class="button2"
                  onClick={notify}
                  style={{ background: "#fff" }}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </button>
                <ToastContainer />
              </>
            )}
          </form>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default Contact;
