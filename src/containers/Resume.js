import React, { useState, useEffect } from "react";
import base_styles from "../styles/base.module.css";
import styles from "../styles/resume.module.css";
import { Skeleton } from "@mui/material";

const Resume = () => {
  const [isPDFLoading, setPDFLoading] = useState(true);
  const [PDFSize, setPDFSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const screenWidth = window.innerWidth;
    if (screenWidth > 850) {
      setPDFSize({ width: 850, height: 1160 });
    } else if (screenWidth > 650 && screenWidth < 850) {
      setPDFSize({ width: 650, height: 887 });
    } else if (screenWidth > 400 && screenWidth < 650) {
      setPDFSize({ width: 400, height: 580 });
    } else if (screenWidth < 400) {
      setPDFSize({ width: 320, height: 464 });
    }
  }, []);

  const handlePDFLoad = () => {
    setPDFLoading(false);
  };

  return (
    <div className={base_styles.base_wrapper}>
      <div className={styles.wrapper}>
        {isPDFLoading ? (
          <Skeleton animation="wave" variant="rect">
            <iframe
              className={styles.resume_frame}
              src="https://drive.google.com/file/d/1c3XySKAurb7ZoFdMxmMEk86rOaB5mNU9/preview"
              width={PDFSize.width}
              height={PDFSize.height}
              allow="autoplay"
              onLoad={handlePDFLoad}
            ></iframe>
          </Skeleton>
        ) : (
          <iframe
            className={styles.resume_frame}
            src="https://drive.google.com/file/d/1c3XySKAurb7ZoFdMxmMEk86rOaB5mNU9/preview"
            width={PDFSize.width}
            height={PDFSize.height}
            allow="autoplay"
            onLoad={handlePDFLoad}
          ></iframe>
        )}
      </div>
    </div>
  );
};

export default Resume;
