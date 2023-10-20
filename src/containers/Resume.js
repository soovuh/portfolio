import base_styles from "../styles/base.module.css";
import styles from "../styles/resume.module.css";

const Resume = () => {
  return (
    <div className={base_styles.base_wrapper}>
      <iframe
        className={styles.resume_frame}
        src="https://drive.google.com/file/d/1c3XySKAurb7ZoFdMxmMEk86rOaB5mNU9/preview"
        width="850"
        height="1160"
        allow="autoplay"
      ></iframe>
    </div>
  );
};

export default Resume;
