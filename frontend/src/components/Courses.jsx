import styles from "../pages/Courses.module.css";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from "react";

const subjects = [
  { name: "Web Development", price:  100 },
  { name: "Data Structures", price: 200 },
  { name: "Algorithms", price: 300 },
  { name: "Database Systems", price: 400 },
  { name: "Operating Systems", price: 500 },
  { name: "Networking", price: 600 },
  { name: "Machine Learning", price: 699 },
  { name: "Cloud Computing", price: 749 },
  { name: "Cyber Security", price: 849 },
  { name: "Mobile App Dev", price: 999 }
];

const RAZORPAY_KEY_ID = "rzp_test_NAqhdTa27x5Avk";

const Courses = () => {
  const [processingIdx, setProcessingIdx] = useState(null);
  const [failedIdx, setFailedIdx] = useState(null);

  const handleBuy = async (course, idx) => {
    setProcessingIdx(idx);
    setFailedIdx(null);
    try {
      const res = await fetch(`${process.env.REACT_APP_API_URL}/api/payment/create-order`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amount: course.price, currency: "INR" })
      });
      const order = await res.json();
      if (order.id) {
        const options = {
          key: RAZORPAY_KEY_ID,
          amount: order.amount,
          currency: order.currency,
          name: "Boora Classes",
          description: course.name,
          order_id: order.id,
          handler: function (response) {
            alert("Payment successful! Payment ID: " + response.razorpay_payment_id);
            setProcessingIdx(null);
          },
          prefill: {
            name: "",
            email: "",
            contact: "",
          },
          theme: {
            color: "#6a82fb",
          },
          modal: {
            ondismiss: function () {
              setProcessingIdx(null);
              setFailedIdx(idx);
            }
          }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
      } else {
        window.alert("Failed to create Razorpay order.");
        setProcessingIdx(null);
        setFailedIdx(idx);
      }
    } catch (err) {
      window.alert("Payment error: " + err.message);
      setProcessingIdx(null);
      setFailedIdx(idx);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.coursesContainer}>
        <h1 style={{ color: '#222255', fontWeight: 700, fontSize: '2.5rem', marginBottom: 32, letterSpacing: 1 }}>IT Sector Courses</h1>
        <div className={styles.cardGrid}>
          {subjects.map((subj, idx) => (
            <div
              key={subj.name}
              className={`${styles.card} ${styles.animatedCard}`}
              style={{ background: '#6a82fb', color: '#fff', boxShadow: '0 8px 32px rgba(60,60,120,0.18)' }}
            >
              <h2 style={{ color: '#fff', fontWeight: 700, fontSize: '1.4rem', marginBottom: 10, textShadow: '1px 1px 4px #22225555' }}>{subj.name}</h2>
              <p style={{ fontWeight: 600, fontSize: '1.2rem', margin: '10px 0', color: '#fff', textShadow: '1px 1px 4px #22225555' }}>Price: ₹{subj.price}</p>
              <button
                className={styles.buyBtn}
                onClick={() => handleBuy(subj, idx)}
                disabled={processingIdx !== null}
                style={{
                  background: processingIdx === idx ? '#fc5c7d' : failedIdx === idx ? '#ff4d4f' : '#fff',
                  color: processingIdx === idx || failedIdx === idx ? '#fff' : '#222255',
                  fontWeight: 700,
                  fontSize: '1.1rem',
                  boxShadow: '0 2px 8px rgba(60,60,120,0.10)',
                  transition: 'all 0.2s',
                  border: 'none',
                  borderRadius: 8,
                  padding: '12px 0',
                  width: '100%',
                  marginTop: 10,
                  cursor: processingIdx !== null ? 'not-allowed' : 'pointer',
                  letterSpacing: 1
                }}
              >
                {processingIdx === idx ? "Processing..." : failedIdx === idx ? "Payment Failed" : "Buy Now"}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Courses;
