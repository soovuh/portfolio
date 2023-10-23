import { Link } from "react-router-dom";
import styles from "../styles/base.module.css";
import GitHubIcon from "@mui/icons-material/GitHub";

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <div className={styles.link_wrapper}>
          <Link
            to="/"
            className={props.path === "/" ? styles.current : styles.link}
          >
            Home
          </Link>
        </div>
        <div className={styles.link_wrapper}>
          <Link
            to="/projects"
            className={
              props.path === "/projects" ? styles.current : styles.link
            }
          >
            Projects
          </Link>
        </div>
        <div className={styles.link_wrapper}>
          <Link
            to="/resume"
            className={props.path === "/resume" ? styles.current : styles.link}
          >
            Resume
          </Link>
        </div>
        <div className={styles.link_wrapper}>
          <Link
            to="/contacts"
            className={
              props.path === "/contacts" ? styles.current : styles.link
            }
          >
            Contacts
          </Link>
        </div>
        <div className={styles.link_wrapper}>
          <Link to="https://github.com/soovuh" className={styles.github}>
            <GitHubIcon className={styles.icon} fontSize="large" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
