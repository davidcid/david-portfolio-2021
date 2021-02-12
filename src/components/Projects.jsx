import "../stylesheets/projects.scss";
import Project from "./Project";

const Projects = ({ language }) => {
  const content = {
    spanish: {
      title: "Proyectos en los que he participado",
    },
    english: {
      title: "Projects I have participated",
    },
  };

  const text =
    language === "es" || language === "es-ES"
      ? content.spanish
      : content.english;

  return (
    <div className="projects" id="projects">
      <div className="container">
        <h2 className="projects-title">{text.title}</h2>
        <div className="projects-container">
          <Project project="amphosfarmacia" language={language} />
          <Project project="careexpand" language={language} />
          <Project project="sonospine" language={language} />
          <Project project="strongboot" language={language} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
