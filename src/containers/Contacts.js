import { Link } from "react-router-dom";
import base_styles from "../styles/base.module.css";
import styles from "../styles/contacts.module.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import MailIcon from "@mui/icons-material/Mail";

const Contacts = () => {
  return (
    <div className={base_styles.base_wrapper}>
      <div className={styles.wrapper}>
        <h1>Contact me!</h1>
        <Link
          className={styles.contact_btn}
          to={"https://www.linkedin.com/in/illia-klymenko/"}
        >
          LinkedIn
          <LinkedInIcon className={styles.icon} fontSize="large" />
        </Link>
        <Link className={styles.contact_btn} to={"https://t.me/soovuh"}>
          Telegram
          <TelegramIcon className={styles.icon} fontSize="large" />
        </Link>
        <Link
          className={styles.contact_btn}
          to={"mailto:klymenko.illia.dev@gmail.com"}
        >
          Mail
          <MailIcon className={styles.icon} fontSize="large" />
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
