import styles from "./Home.module.css";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Boora Classes!</h1>
        <section style={{margin: '32px 0'}}>
          <h2 style={{color: '#fc5c7d', fontSize: '2rem', marginBottom: 12}}>Making Your Future Bright</h2>
          <p style={{fontSize: '1.15rem', color: '#444', lineHeight: 1.7}}>
            At Boora Classes, we are dedicated to empowering students with the knowledge and skills they need to excel in their academic and professional journeys. Our expert faculty, modern teaching methods, and supportive environment ensure that every student has the opportunity to shine.<br/><br/>
            Whether you are preparing for competitive exams, looking to strengthen your fundamentals, or seeking guidance for your career, Boora Classes is your trusted partner in success. Join us and take the first step towards a brighter future!
          </p>
        </section>
        <section style={{margin: '32px 0'}}>
          <h2 style={{color: '#6a82fb', fontSize: '1.7rem', marginBottom: 10}}>Why Choose Boora Classes?</h2>
          <ul style={{fontSize: '1.1rem', color: '#555', lineHeight: 1.7, paddingLeft: 24}}>
            <li>Experienced and passionate faculty</li>
            <li>Comprehensive and up-to-date study material</li>
            <li>Personalized attention and doubt-solving sessions</li>
            <li>Regular assessments and progress tracking</li>
            <li>Supportive and motivating learning environment</li>
          </ul>
        </section>
      </div>
      <Footer />
    </div>
  );
};
export default Home;
