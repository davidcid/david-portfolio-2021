import "../stylesheets/projects.scss";
import Project from "./Project";

const Projects = () => {
    return ( 
        <div className="projects" id="projects">
            <h1 className="projects-title">Proyectos profesionales</h1>
            <Project project="careexpand"/>
        </div>
     );
}
 
export default Projects;