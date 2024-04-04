import React from "react";
import logo from "./Images/netflix-logo.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <NavLink to="/">
      <div className="flex ms-24">
        <img src={logo} alt="Netflix-Logo" className="w-44 z-10" />
      </div>
    </NavLink>
  );
}
