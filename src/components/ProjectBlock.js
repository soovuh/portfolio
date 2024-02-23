import React, { useState, useEffect } from "react";
import styles from "../styles/portfolio.module.css";
import { Link } from "react-router-dom";
import { Skeleton } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const ProjectBlock = ({
  title,
  description,
  projectLink,
  githubLink,
  image,
  technologies,
  important,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoad = () => {
    setIsLoading(false);
  };
  return (
    <div className={`${styles.projectBlock} fadeInAnimation`}>
      {isLoading ? (
        <Skeleton animation="wave" variant="rect">
          <div className={styles.projectImage}>
            <Link className={styles.imgLink} to={projectLink}>
              <img src={image} alt={title} onLoad={handleLoad} />
            </Link>
          </div>
        </Skeleton>
      ) : (
        <div className={styles.projectImage}>
          <Link className={styles.imgLink} to={projectLink}>
            <img src={image} alt={title} onLoad={handleLoad} />
          </Link>
        </div>
      )}
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
          {githubLink &&
          <Link to={githubLink} className={styles.github}>
            <GitHubIcon className={styles.icon} fontSize="large" />
          </Link>}

        </div>
      </div>
    </div>
  );
};

export default ProjectBlock;
