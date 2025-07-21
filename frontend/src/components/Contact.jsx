import styles from "../pages/Contact.module.css";
import Header from "./Header";
import Footer from "./Footer";
const Contact = () => (
  <>
    <Header />
    <div className={styles.contactContainer}>
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.cardAnimated}>
        <p className={styles.text}>
          Have questions or need help? Reach out to us!<br/><br/>
          <span className={styles.highlight}>Email:</span> <a className={styles.link} href="mailto:info@booraclasses.com">info@booraclasses.com</a><br/>
          <span className={styles.highlight}>Phone:</span> <a className={styles.link} href="tel:+919306098396">+91 99999 99999</a><br/>
          <span className={styles.highlight}>Address:</span> Jind, Haryana, India
        </p>
      </div>
    </div>
    <Footer />
  </>
);
export default Contact;
