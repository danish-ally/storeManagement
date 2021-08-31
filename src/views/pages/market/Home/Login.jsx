import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Login.css";
import { logUserIn } from "../../../../redux/auth/actions";
import { useSelector, useDispatch } from "react-redux";
import "./Login.css";
import validator from "validator";

export default function SignIn(props) {
  const authState = useSelector((state) => state.authState);
  const dispatch = useDispatch();

  const [state, setState] = React.useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = React.useState(null);
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
    console.log(state);
  };

  const [EmailError, setEmailError] = useState("");  
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logUserIn(state));
    console.log(state.email, state.password);
  };

  // if (validator.isEmail(state.email)) {
  //   setEmailError("Valid Email :)");
  // } else {
  //   setEmailError("Enter valid Email!");
  // }

  return (
    <div className="login-cont">
      <div className="left-cont">
        <div
          className="title"
          style={{
            justifyContent: "flex-start",
          }}
        >
          Client Login?
        </div>
        <div className="cnt-form">
          <form onSubmit={handleSubmit}>
            <input
              class="input100"
              type="text"
              name="email"
              placeholder="Username"
              onChange={handleChange}
            />
            <span
              style={{
                fontWeight: "bold",
                color: "red",
              }}
            >
              {/* {emailError} */}
            </span>
            <input
              class="input100"
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
            />
            <div
              className="error-msg"
              style={{
                color: "red",
                display: "flex",
                alignItems: "flex-start",
              }}
            >
              {authState.error}
            </div>
            <div
              class="container-login100-form-btn"
              style={{
                alignItems: "center",
              }}
            >
              <button
                class="login100-form-btn"
                style={{
                  background: "#dbdbdb",
                  paddingLeft: "0",
                  border: "none",
                }}
              >
                <div class="button2">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Submit
                </div>
              </button>
              <NavLink to="/contact">
                <div class="button2">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  Request Access
                </div>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
      {/* <div className="mid-btn">
        <div class="button2">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Submit
        </div>
        <NavLink to="/contact">
          <div class="button2">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            Request Access
          </div>
        </NavLink>
      </div> */}
      {/* <div className="right-circle">
        <div className="esp1"></div>
        <div className="esp2"></div>
        <div className="esp3"></div>
        <div className="esp4"></div>
        <div className="esp5"></div>
      </div> */}
    </div>
    // <div class="limiter">
    //   <Header title="NadeemShiekh.market"/>
    //   <div class="container-login100" style={{
    //     minHeight: "78vh"
    //   }}>
    //     <div class="wrap-login100" style={{
    //     height: "50vh",
    //     display: "flex",
    //     alignItems: "center"
    //   }}>
    //       <form class="login100-form validate-form" onSubmit={handleSubmit}>
    //         <div
    //           class="wrap-input100 validate-input m-b-26"
    //           data-validate="Username is required"
    //         >
    //           <span class="label-input100">Username</span>
    //           <input
    //             class="input100"
    //             type="text"
    //             name="email"
    //             placeholder="Enter Username"
    //             onChange={handleChange}
    //           />
    //           <span class="focus-input100"></span>
    //         </div>

    //         <div
    //           class="wrap-input100 validate-input m-b-18"
    //           data-validate="Password is required"
    //         >
    //           <span class="label-input100">Password</span>
    //           <input
    //             class="input100"
    //             type="password"
    //             name="password"
    //             placeholder="Enter password"
    //             onChange={handleChange}
    //           />
    //           <span class="focus-input100"></span>
    //         </div>

    //         <div class="flex-sb-m w-full p-b-30">
    //           <div className="error-msg" style={{
    //             color: "red",
    //           }}>{authState.error}</div>
    //         </div>

    //         <div class="container-login100-form-btn">
    //           <button class="login100-form-btn">Login</button>
    //         </div>
    //         <NavLink to="/register">
    //           <div>
    //             <a class="txt1">Not Registered?</a>
    //           </div>
    //         </NavLink>
    //       </form>
    //     </div>
    //   </div>
    // </div>
  );
}
