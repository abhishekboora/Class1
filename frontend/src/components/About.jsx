import styles from "./Common.module.css";
import Header from "./Header";
import Footer from "./Footer";
const About = () => (
  <>
    <Header />
    <div className={styles.page}><h1>About Us</h1></div>
    <Footer />
  </>
);
export default About;
