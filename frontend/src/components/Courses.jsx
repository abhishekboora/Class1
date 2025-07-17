import styles from "../pages/Courses.module.css";
import Header from "./Header";
import Footer from "./Footer";

const subjects = [
  { name: "Web Development", color: "#6a82fb" },
  { name: "Data Structures", color: "#fc5c7d" },
  { name: "Algorithms", color: "#43e97b" },
  { name: "Database Systems", color: "#f7971e" },
  { name: "Operating Systems", color: "#fd5c63" },
  { name: "Networking", color: "#11998e" },
  { name: "Machine Learning", color: "#a770ef" },
  { name: "Cloud Computing", color: "#f953c6" },
  { name: "Cyber Security", color: "#30cfd0" },
  { name: "Mobile App Dev", color: "#f7797d" }
];

const Courses = () => (
  <>
    <Header />
    <div className={styles.coursesContainer}>
      <h1>IT Sector Courses</h1>
      <div className={styles.cardGrid}>
        {subjects.map((subj, idx) => (
          <div
            key={subj.name}
            className={styles.card}
            style={{ background: subj.color }}
          >
            <h2>{subj.name}</h2>
            <button className={styles.buyBtn}>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
    <Footer />
  </>
);
export default Courses;
