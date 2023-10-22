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
        <Link to={""}>
          <LinkedInIcon fontSize="large" />
        </Link>
        <Link to={""}>
          <TelegramIcon fontSize="large" />
        </Link>
        <Link to={""}>
          <MailIcon fontSize="large" />
        </Link>
      </div>
    </div>
  );
};

export default Contacts;
