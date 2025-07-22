import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [formData, setFormData] = useState({ registrationId: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    if (!formData.registrationId || !formData.password) {
      toast.warning("Please fill all fields");
      return;
    }

    setIsLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        toast.success(data.message || "Login successful!");
        localStorage.setItem("isLoggedIn", "true");
        setTimeout(() => navigate("/home"), 2000);
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (err) {
      toast.error("Network error. Try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <ToastContainer position="top-center" />
      <h2>Login</h2>

      <input 
        name="registrationId" 
        onChange={handleChange} 
        placeholder="Registration ID" 
      />

      <input 
        name="password" 
        type="password" 
        onChange={handleChange} 
        placeholder="Password" 
      />

      <button onClick={handleLogin} disabled={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </button>

      <p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>

      <div className={styles.registerRedirect}>
        <p>Not registered?</p>
        <button onClick={() => navigate("/register")} className={styles.registerBtn}>
          Register Here
        </button>
      </div>
    </div>
  );
};

export default Login;
