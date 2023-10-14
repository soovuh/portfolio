import base_styles from "../styles/base.module.css";
import styles from "../styles/home.module.css";
import photo from "../official-crop.jpg";

const Home = () => {
  return (
    <div className={base_styles.base_wrapper}>
      <div className={styles.wrapper}>
        <div className={styles.image_wrapper}>
          <img className={styles.image} src={photo} />
        </div>
        <div className={styles.text}>
          <p>
            Hi, I'm Illia Klymenko Backend Web Developer I have been actively
            engaged in programming for 1 year. During this time, I have learned
            and applied several technologies and approaches to creating web
            applications. I continuously enhance my knowledge every day and am
            excited to work on even more interesting projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
