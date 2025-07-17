import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1); // 1: email, 2: otp
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!email) {
      alert("Please enter your email");
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email })
      });
      const data = await res.json();
      if (res.ok) {
        alert("OTP sent to your email.");
        setStep(2);
      } else {
        alert(data.message || "Failed to send OTP");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      alert("Please enter the OTP");
      return;
    }
    setIsLoading(true);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp })
      });
      const data = await res.json();
      if (res.ok) {
        alert("Registration successful! Check your email for Registration ID and Password.");
        navigate('/login');
      } else {
        alert(data.message || "OTP verification failed");
      }
    } catch (error) {
      alert("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h2>Welcome to Boora Classes Registration</h2>
      <p style={{ marginBottom: 20 }}>
        Please enter your email to register. You will receive an OTP for verification. After successful registration, your Registration ID and Password will be sent to your email.
      </p>
      {step === 1 && (
        <>
          <input 
            name="email" 
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Enter your email" 
          />
          <button onClick={handleSendOtp} disabled={isLoading}>
            {isLoading ? "Sending OTP..." : "Send OTP"}
          </button>
        </>
      )}
      {step === 2 && (
        <>
          <input 
            name="otp" 
            value={otp}
            onChange={(e) => setOtp(e.target.value)} 
            placeholder="Enter OTP" 
          />
          <button onClick={handleVerifyOtp} disabled={isLoading}>
            {isLoading ? "Verifying..." : "Verify OTP & Register"}
          </button>
        </>
      )}
      <p>You will receive an OTP via email to complete registration.</p>
      <p>
        Already registered?{' '}
        <a href="/login">Login here</a>
      </p>
      <p>
        <a href="/forgot-password">Forgot Password?</a>
      </p>
    </div>
  );
};

export default Register;
