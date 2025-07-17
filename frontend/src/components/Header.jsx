import navStyles from "./NavBar.module.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };
  return (
    <nav className={navStyles.nav}>
      <div className={navStyles.navLinks}>
        <Link to="/home" className={`${navStyles.link} ${location.pathname === "/home" ? navStyles.active : ""}`}>Home</Link>
        <Link to="/about" className={`${navStyles.link} ${location.pathname === "/about" ? navStyles.active : ""}`}>About</Link>
        <Link to="/courses" className={`${navStyles.link} ${location.pathname === "/courses" ? navStyles.active : ""}`}>Courses</Link>
        <Link to="/contact" className={`${navStyles.link} ${location.pathname === "/contact" ? navStyles.active : ""}`}>Contact</Link>
      </div>
      <button onClick={handleLogout} className={navStyles.logoutBtn}>Logout</button>
    </nav>
  );
};
export default Header; 