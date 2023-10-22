import React from "react";
import styles from "../styles/portfolio.module.css";
import { Link } from "react-router-dom";

const ProjectBlock = ({
  title,
  description,
  projectLink,
  githubLink,
  image,
  technologies,
  important,
}) => {
  return (
    <div className={`${styles.projectBlock} fadeInAnimation`}>
      <div className={styles.projectImage}>
        <Link className={styles.imgLink} to={projectLink}>
          <img src={image} alt={title} />
        </Link>
      </div>
      <div>
        <h2>{title}</h2>
        <p>
          {description} <i>{important}</i>
        </p>
        <div className={styles.block_footer}>
          <div className={styles.technologies}>
            {technologies.map((technology, index) => (
              <span key={index} className={styles.technology}>
                {technology}
              </span>
            ))}
          </div>
          <Link to={githubLink} className={styles.github}>
            <ion-icon name="logo-github"></ion-icon>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;
