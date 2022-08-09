import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../ThemeContext/ThemeContext";
import "./Navbar.css";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const toggleTheme = () => {
    if (darkMode) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else theme.dispatch({ type: "DARKMODE" });
  };

  return (
    <div
      className={`${
        darkMode ? "bg-dark-nav" : "bg-violate"
      }  text-white d-flex justify-content-between p-2`}
    >
      <ul className="mb-0 d-flex">
        <div className="">
          <img
            className="mi-logo"
            src="https://git.mindinventory.com/uploads/-/system/appearance/header_logo/1/mi-logo.png"
            alt=""
          />
        </div>
        <li className="list-style-none ps-3">GitLab Demo</li>
      </ul>
      <div className="d-flex">
        <button
          className="me-3 bg-transparent text-white border-0"
          onClick={toggleTheme}
        >
          <i class={`fa-solid fa-${darkMode ? "sun" : "moon"}`}></i>
        </button>
        <div
          className={`me-5 ${
            darkMode ? "bg-dark-nav-search" : "bg-light-violate"
          } pe-2 br-3 d-flex  align-items-center`}
        >
          <input
            type="text "
            className={`${
              darkMode ? "bg-dark-nav-search" : "bg-light-violate"
            } border-0 text-light-blue ps-2 outline-none search_input`}
            placeholder="Search or jump to..."
          />
          <i className="fa-solid fa-magnifying-glass f-14 text-light-blue"></i>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
