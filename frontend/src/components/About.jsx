import React from "react";
import styles from "../pages/About.module.css";
import Header from "./Header";
import Footer from "./Footer";

const About = () => {
  return (
    <>
    <Header/>
    <div className={styles.aboutPage}>
      {/* Top Section */}
      <section className={styles.topSection}>
        <h1>About Boora Classes</h1>
        <p>We help you reach your academic goals with expert guidance.</p>
        <div className={styles.hero}>
          <img
            src="https://images.unsplash.com/photo-1607746882042-944635dfe10e"
            alt="Instructor"
            className={styles.heroImage}
          />
          <div className={styles.heroText}>
            <h2>Learn from the Best</h2>
            <p>
              At Boora Classes, our mission is to empower students by providing quality education,
              expert mentors, and a thriving learning community.
            </p>
            <button>Explore Courses</button>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className={styles.teamSection}>
        <h2>Meet Our Expert Team</h2>
        <div className={styles.teamGrid}>
          {["https://randomuser.me/api/portraits/men/32.jpg", "https://randomuser.me/api/portraits/women/44.jpg", "https://randomuser.me/api/portraits/men/55.jpg"].map((url, idx) => (
            <div className={styles.teamCard} key={idx}>
              <img src={url} alt="Team Member" />
              <h3>{["Abhishek", "Sneha", "Ravi"][idx]}</h3>
              <p>{["Full Stack Mentor", "Frontend Expert", "Backend Guide"][idx]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Statistics Section */}
      <section className={styles.statsSection}>
        <div className={styles.stat}>
          <h3>20+</h3>
          <p>Expert Mentors</p>
        </div>
        <div className={styles.stat}>
          <h3>500+</h3>
          <p>Enrolled Students</p>
        </div>
        <div className={styles.stat}>
          <h3>95%</h3>
          <p>Success Rate</p>
        </div>
      </section>

     <section className={styles.bottomSection}>
  <h2>Our Journey</h2>
  <p>
    Since our launch, Boora Classes has helped hundreds of students crack competitive exams,
    secure jobs in top companies, and build strong academic foundations.
  </p>
  <img
    src="https://images.pexels.com/photos/3182742/pexels-photo-3182742.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    alt="Our Team"
  />
</section>
    </div>
    <Footer />
    </>
  );
};

export default About;
