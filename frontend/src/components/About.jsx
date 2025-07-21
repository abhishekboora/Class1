import styles from "../pages/About.module.css";
import Header from "./Header";
import Footer from "./Footer";

const About = () => (
  <>
    <Header />
    <div className={styles.aboutContainer}>
      <h1 className={styles.title}>About Us</h1>
      <div className={styles.cardAnimated}>
        <p className={styles.text}>
          Welcome to <span className={styles.brand}>Boora Classes</span>!<br/>
          We are dedicated to empowering students with the knowledge and skills they need to excel in their academic and professional journeys.<br/><br/>
          <span className={styles.highlight}>Why Choose Us?</span>
          <ul className={styles.list}>
            <li>Expert faculty and modern teaching methods</li>
            <li>Personalized attention and doubt-solving sessions</li>
            <li>Comprehensive and up-to-date study material</li>
            <li>Supportive and motivating learning environment</li>
          </ul>
        </p>
      </div>
    </div>
    <Footer />
  </>
);
export default About;
