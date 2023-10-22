import React from "react";
import ProjectBlock from "../components/ProjectBlock";
import base_styles from "../styles/base.module.css";
import styles from "../styles/portfolio.module.css";
import shoeShopImg from "../images/shoe_shop.png";
import TicTacToeImg from "../images/tic_tac_toe.png";
import PhotograperPortfolioImg from "../images/photographer_portfolio.png";

const Portfolio = () => {
  const projects = [
    {
      title: "Tic-Tac-Toe Online",
      description:
        "The project involved a combination of technologies, including Django Rest Framework for the API, React for the interactive frontend, Redis for caching, Django Channels for handling websockets, and CSS for styling. This experience helped me understand the complexities of real-time web applications.",
      projectLink: "https://tic-tac-toe-online-t78u.onrender.com/",
      githubLink: "https://github.com/soovuh/tic-tac-toe-app",
      image: TicTacToeImg,
      technologies: [
        "DRF",
        "React",
        "Django Channels",
        "Redis",
        "WebSockets",
        "CSS",
      ],
      important:
        "You need to wait a few minutes after clicking on the image because it’s a free hosting site and application rebuilt after 15 minutes inactive mode.",
    },
    {
      title: "Photographer Portfolio Django App",
      description:
        "I undertook a freelance project to create a photographer's portfolio website. This project was done pro bono for another individual. I utilized Django and Django templates to develop the website, and CSS for styling. This experience allowed me to apply my web development skills and contribute to showcasing the photographer's work effectively. This project utilizes Linux hosting, which I configured to run the Django application.",
      projectLink: "https://klymenkophoto.com.ua/en/",
      githubLink: "https://github.com/soovuh/photographer_portfolio",
      image: PhotograperPortfolioImg,
      technologies: ["Django", "Django Template", "CSS", "Linux"],
      important: null,
    },
    {
      title: "Shoe Shop Full-Stack App",
      description:
        "I worked on a pet project, creating an online shoe shop. I utilized Django Rest Framework for building the backend API, while the frontend was developed with JavaScript, HTML, and CSS. This project allowed me to gain valuable experience in web development and building e-commerce platforms.",
      projectLink: "https://shoes-shop-soovuh.onrender.com/",
      githubLink: "https://github.com/soovuh/Shoes-Shop-Site",
      image: shoeShopImg,
      technologies: ["DRF", "JavaScript", "HTML", "CSS"],
      important:
        "You need to wait a few minutes after clicking on the image because it’s a free hosting site and application rebuilt after 15 minutes inactive mode.",
    },
  ];
  return (
    <div className={base_styles.base_wrapper}>
      <div className={styles.wrapper}>
        <div className={styles.portfolioContainer}>
          {projects.map((project, index) => (
            <ProjectBlock key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
