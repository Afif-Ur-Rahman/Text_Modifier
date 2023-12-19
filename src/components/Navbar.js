import React from "react";
import PropTypes from "prop-types";

export default function Navbar(props) {
  return (
    <>
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            {props.mode === "white" ? (
              <img
                src="logo_white.png"
                alt="logo-white"
                width={"270px"}
                height={"50px"}
              />
            ) : (
              <img
                src="logo_black.png"
                alt="logo-black"
                width={"270px"}
                height={"50px"}
              />
            )}
          </a>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>

          <div
            className={`form-check form-switch form-check-reverse text-${
              props.mode === "white" ? "black" : "white"
            }`}
          >
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Change Theme
            </label>
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggleMode}
            />
          </div>
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
