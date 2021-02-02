import "../stylesheets/projects.scss";
import Project from "./Project";

const Projects = () => {
    return ( 
        <div className="projects" id="projects">
            <div className="container">
                <h2 className="projects-title">Proyectos en los que he participado</h2>
                <div className="projects-container">
                    <Project project="amphosfarmacia"/>
                    <Project project="careexpand"/>
                    <Project project="sonospine"/>
                </div>
            </div>
        </div>
     );
}
 
export default Projects;