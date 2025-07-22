import React from "react";
import styles from "./Home.module.css";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.heroSection}>
        <div className={styles.left}>
          <h1>
            Welcome <br />
            <span className={styles.highlight}>To </span>  <br />
            <span className={styles.future}>Boora Classes</span>
          </h1>
          <p>
            Our e-learning programs have been developed to be a vehicle of delivering multimedia
            learning solutions for your career.
          </p>
          <div className={styles.ctaGroup}>
            <button className={styles.contactBtn}>Contact</button>
            <div className={styles.stats}>
              <div><strong>50+</strong><br />Career Courses</div>
              <div><strong>1M+</strong><br />Our Students</div>
            </div>
          </div>
        </div>

        <div className={styles.right}>
          <img
            src="https://img.freepik.com/free-photo/young-happy-college-student-with-backpack-books-cheerful-gesture-isolated-orange-background_74952-3761.jpg?w=740"
            alt="Student"
            className={styles.heroImg}
          />
        </div>
      </main>

      <section className={styles.coursesSection}>
        <h2>Browse Top Essential Career Courses</h2>
        <div className={styles.cardGrid}>
          <div className={styles.card} style={{ background: "#ff9a9e" }}>UI/UX Design</div>
          <div className={styles.card} style={{ background: "#fdbb2d" }}>Web Development</div>
          <div className={styles.card} style={{ background: "#90f7ec" }}>Digital Marketing</div>
          <div className={styles.card} style={{ background: "#c3cfe2" }}>Practical Learning</div>
          <div className={styles.browseAll}>→</div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
