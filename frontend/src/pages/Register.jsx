import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./Register.module.css";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [step, setStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    if (!email) {
      toast.warning("Please enter your email");
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
        toast.success("OTP sent to your email.");
        setStep(2);
      } else {
        toast.error(data.message || "Failed to send OTP");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleVerifyOtp = async () => {
    if (!otp) {
      toast.warning("Please enter the OTP");
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
        toast.success("Registration successful! Check your email.");
        setTimeout(() => navigate('/login'), 2000);
      } else {
        toast.error(data.message || "OTP verification failed");
      }
    } catch (error) {
      toast.error("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <ToastContainer position="top-center" />
      <h2>Welcome to Boora Classes Registration</h2>
      <p style={{ marginBottom: 20 }}>
        Please enter your email to register. You will receive an OTP for verification.
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
      <p>Already registered? <Link to="/login">Login here</Link></p>
      <p><Link to="/forgot-password">Forgot Password?</Link></p>
    </div>
  );
};

export default Register;
