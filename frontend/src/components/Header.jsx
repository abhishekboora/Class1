import navStyles from "./NavBar.module.css";
import { NavLink, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.centerNav}>
        <NavLink to="/home" className={({ isActive }) => `${navStyles.link} ${isActive ? navStyles.active : ""}`}>Home</NavLink>
        <NavLink to="/about" className={({ isActive }) => `${navStyles.link} ${isActive ? navStyles.active : ""}`}>About</NavLink>
        <NavLink to="/courses" className={({ isActive }) => `${navStyles.link} ${isActive ? navStyles.active : ""}`}>Courses</NavLink>
        <NavLink to="/contact" className={({ isActive }) => `${navStyles.link} ${isActive ? navStyles.active : ""}`}>Contact</NavLink>
      </div>
      <span className={navStyles.logoutIcon} onClick={handleLogout} title="Logout" role="button" tabIndex={0}>
         Logout
      </span>
    </nav>
  );
};
export default Header; 