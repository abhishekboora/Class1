import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const [formData, setFormData] = useState({ registrationId: '', password: '' });
  const navigate = useNavigate();

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleLogin = async () => {
    const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    const data = await res.json();
    alert(data.message);
    if (res.ok) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Login</h2>
      <input name="registrationId" onChange={handleChange} placeholder="Registration ID" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <button onClick={handleLogin}>Login</button>
      <p>
        <Link to="/forgot-password">Forgot Password?</Link>
      </p>
    </div>
  );
};

export default Login;
