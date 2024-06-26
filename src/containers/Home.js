import base_styles from "../styles/base.module.css";
import styles from "../styles/home.module.css";
import photo from "../images/official-crop.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className={base_styles.base_wrapper}>
      <div className={styles.wrapper}>
        <div className={styles.image_wrapper}>
          <img className={styles.image} src={photo} />
        </div>
        <div className={styles.text}>
          <h1>Hi, I'm Illia Klymenko</h1>
          <Link className={styles.resume_link} to={"/resume"}>
            Python Developer
          </Link>
          <div className={styles.about}>
          I have been actively engaged in programming for 1.5 years. During this time I have learned and applied many technologies and approaches to creating web applications and data processing. I continuously enhance my knowledge every day and am excited to work on even more interesting projects
          </div>
          <div className={styles.buttons}>
            <Link to="/contacts">Contact me</Link>
            <Link to="/projects">My projects</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
