import React, { useState } from "react";
import base_styles from "../styles/base.module.css";
import styles from "../styles/resume.module.css";
import { Skeleton } from "@mui/material";

const Resume = () => {
  const [isPDFLoading, setPDFLoading] = useState(true);

  const handlePDFLoad = () => {
    setPDFLoading(false);
  };

  return (
    <div className={base_styles.base_wrapper}>
      {isPDFLoading && (
        <Skeleton animation="wave" variant="rect">
          <iframe
            className={styles.resume_frame}
            src="https://drive.google.com/file/d/1c3XySKAurb7ZoFdMxmMEk86rOaB5mNU9/preview"
            width="850"
            height="1160"
            allow="autoplay"
            onLoad={handlePDFLoad}
          ></iframe>
        </Skeleton>
      )}
      {!isPDFLoading && (
        <iframe
          className={styles.resume_frame}
          src="https://drive.google.com/file/d/1c3XySKAurb7ZoFdMxmMEk86rOaB5mNU9/preview"
          width="850"
          height="1160"
          allow="autoplay"
          onLoad={handlePDFLoad}
        ></iframe>
      )}
    </div>
  );
};

export default Resume;
