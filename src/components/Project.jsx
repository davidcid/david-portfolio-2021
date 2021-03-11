import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import "../stylesheets/project.scss";

import { BsBoxArrowUpRight } from "react-icons/bs";

import { Projects } from "../seed";

const Project = ({ project, language }) => {
  const selectedProject = Projects.filter((item) => item.name === project)[0];

  return (
    <div className="project">
      <div className="container project-container">
        <div className="legend">
          <h3 className="legend-title">
            <a
              className="legend-link"
              href={selectedProject.url}
              target="_blank"
              rel="noreferrer"
            >
              {selectedProject.title} <BsBoxArrowUpRight />
            </a>
          </h3>
          <p className="legend-text">
            {language === "es" || language === "es-ES"
              ? selectedProject.description_es
              : selectedProject.description_en}
          </p>
          <ul className="legend-techs">
            {selectedProject.technologies.map((tech, i) => (
              <li key={i} className="legend-tech">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <Carousel
          showArrows
          showStatus={false}
          autoPlay
          interval={4500}
          infiniteLoop={true}
          showThumbs={false}
          className="project-carousel"
        >
          {selectedProject.images.map((image, i) => (
            <div key={i} className="project-carousel-div">
              <img src={image.image} alt={image.alt} />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Project;
