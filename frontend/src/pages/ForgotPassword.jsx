import { useState } from "react";
import { Link } from "react-router-dom";


const ForgotPassword = () => {
  const [registrationId, setRegistrationId] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  

  const handleReset = async () => {
    setIsLoading(true);
    setMessage("");
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/auth/forgot-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ registrationId, email })
      });
      const data = await res.json();
      setMessage(data.message);
    } catch (error) {
      setMessage("Network error. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", padding: 24, border: "1px solid #ccc", borderRadius: 8, background: "white", }}>
      <h2>Forgot Password</h2>
      <input
        name="registrationId"
        value={registrationId}
        onChange={e => setRegistrationId(e.target.value)}
        placeholder="Registration ID"
        style={{ width: "100%", marginBottom: 12, padding: 8 }}
      />
      <input
        name="email"
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        placeholder="Email"
        style={{ width: "100%", marginBottom: 12, padding: 8 }}
      />
      <button onClick={handleReset} disabled={isLoading} style={{ width: "100%", padding: 10 }}>
        {isLoading ? "Processing..." : "Reset Password"}
      </button>
      {message && <p style={{ marginTop: 16 }}>{message}</p>}
      <p style={{ marginTop: 16 }}>
        <Link to="/login">Back to Login</Link>
      </p>
    </div>
  );
};

export default ForgotPassword; 