import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import navStyles from "./Header.module.css";
import LogOut from "../assets/logout.png";

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.navContainer}>
        <div className={navStyles.centerNav}>
          <NavLink to="/home" className={({ isActive }) => `${navStyles.link} ${isActive ? navStyles.active : ""}`}>Home</NavLink>
          <NavLink to="/about" className={({ isActive }) => `${navStyles.link} ${isActive ? navStyles.active : ""}`}>About</NavLink>
          <NavLink to="/courses" className={({ isActive }) => `${navStyles.link} ${isActive ? navStyles.active : ""}`}>Courses</NavLink>
          <NavLink to="/contact" className={({ isActive }) => `${navStyles.link} ${isActive ? navStyles.active : ""}`}>Contact</NavLink>
        </div>

        <span className={navStyles.logoutBtn} onClick={handleLogout} title="Logout" role="button" tabIndex={0}>
          <img src={LogOut} alt="Logout" />
        </span>
      </div>
    </nav>
  );
};

export default Header;
