import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { logUserOut } from "../redux/auth/actions";
import { NavLink } from "react-router-dom";

function Nav(props) {
  const authState = useSelector((state) => state.authState);
  const dispatch = useDispatch();
  return (
    <section id="Header">
      <div
        style={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
          justifyContent: "space-between",
          borderRadius: 5,
          boxShadow: "5px 5px 10px #888888",
          margin: 10,
          padding: 10,
          backgroundColor: "white",
          width: "100%",
        }}
        className="container d-flex content"
      >
        <h2>Hi, {authState.userId}</h2>
        <NavLink to="/">
          <button
            onClick={() => {
              dispatch(logUserOut());
            }}
          >
            Logout
          </button>
        </NavLink>
      </div>
    </section>
  );
}

export default Nav;
