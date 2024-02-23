import React, { useEffect } from "react";
import ProjectBlock from "../components/ProjectBlock";
import base_styles from "../styles/base.module.css";
import styles from "../styles/portfolio.module.css";
import shoeShopImg from "../images/shoe_shop.png";
import TicTacToeImg from "../images/tic_tac_toe.png";
import UkraineMapCreatorImg from "../images/ukraine_map_creator.png"
import USavedWebsiteImg from "../images/u_saved_website.png"
import UReportsImg from "../images/u_reports.png"
import PhotograperPortfolioImg from "../images/photographer_portfolio.png";
import "../styles/animations.css";

const Portfolio = () => {
  const projects = [
    {
      title: "U-Reports Platform",
      description: "Contributed to the development of a donor-focused reporting platform for large charitable foundations, improving transparency and engagement. The U-Reports Platform utilizes cutting-edge technologies such as Django, Django Rest Framework, Bootstrap, JavaScript, CSS, HTML, Leaflet.js, and pandas to provide a seamless experience for donors. Through this platform, donors can access comprehensive reports, tabulated data, high-resolution photos, interactive maps, and intuitive dashboards with ease and efficiency.",
      projectLink: "https://u-reports.org/",
      githubLink: "",
      image: UReportsImg,
      technologies: [
        "Django",
        "Folium",
        "Bootstrap",
        "CSS",
      ],
    },
    {
      title: "U-Saved Website Django App",
      description:
        "As a member of U-Saved, I took the initiative to leverage my web development skills to establish a digital footprint for our charitable cause. Employing Django and Bootstrap frameworks, I crafted a dynamic website, serving as our organization's virtual calling card. Moreover, in addressing the need for visualizing CO activity through interactive mapping solutions, I harnessed the capabilities of the Folium framework, ensuring comprehensive data representation and user engagement.",
      projectLink: "https://u-saved.co/",
      githubLink: "",
      image: USavedWebsiteImg,
      technologies: [
        "Django",
        "Folium",
        "Bootstrap",
        "CSS",
      ],
    },
    {
      title: "Ukraine Map Creator Flask App",
      description:
        "Ukraine Map Creator is a web app utilizing Flask, SQLAlchemy, Folium, Bootstrap, and pandas. It enables users to easily generate customized maps with markers based on uploaded XLSX files containing latitude, longitude, and labels. Users can select column names, specify label uniqueness, and customize marker icons and colors. Maps can be downloaded as HTML or images, with registered users having the option to save maps to their dashboard for future access.",
      projectLink: "https://soovuh.pythonanywhere.com/",
      githubLink: "https://github.com/soovuh/Ukraine-Map-Creator",
      image: UkraineMapCreatorImg,
      technologies: [
        "Flask",
        "SQLAlchemy",
        "Folium",
        "Pandas",
        "Bootstrap",
      ],
    },
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
  useEffect(() => {
    const projectBlocks = document.querySelectorAll(".fadeInAnimation");
    projectBlocks.forEach((block, index) => {
      block.style.animation = `fadeIn 1s ${index * 0.5}s forwards`;
    });
  }, []);
  return (
    <div className={base_styles.base_wrapper}>
      <div className={styles.wrapper}>
        <h1>Projects</h1>
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
