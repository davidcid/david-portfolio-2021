import "../stylesheets/skills.scss";
import { AiFillHtml5 } from "react-icons/ai";
import {
  FaReact,
  FaGitAlt,
  FaNodeJs,
  FaBitbucket,
  FaGithub,
  FaNpm,
  FaSlack,
  FaJira,
  FaFigma,
  FaTrello,
  FaAngular,
} from "react-icons/fa";
import { DiCss3, DiSass, DiPhotoshop, DiIllustrator } from "react-icons/di";
import { SiJavascript, SiTypescript, SiVisualstudio } from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";
import AnimatedBg from "./AnimatedBg";

const Skills = () => {
  return (
    <div className="skills" id="skills">
      <AnimatedBg />
      <div className="container skills-container">
        <div className="technologies">
          <h2>Tecnologías</h2>
          <ul className="skills-list">
            <li className="skills-element">
              <AiFillHtml5 />
              <p>HTML5</p>
            </li>
            <li className="skills-element">
              <DiCss3 />
              <p>CSS3</p>
            </li>
            <li className="skills-element">
              <DiSass />
              <p>Sass</p>
            </li>
            <li className="skills-element">
              <SiJavascript />
              <p>JavaScript</p>
            </li>
            <li className="skills-element">
              <FaReact />
              <p>React</p>
            </li>
            <li className="skills-element">
              <IoLogoVue />
              <p>Vue</p>
            </li>
            <li className="skills-element">
              <FaAngular />
              <p>Angular</p>
            </li>
            <li className="skills-element">
              <FaGitAlt />
              <p>Git</p>
            </li>
            <li className="skills-element">
              <SiTypescript />
              <p>TypeScript</p>
            </li>
            <li className="skills-element">
              <FaNodeJs />
              <p>Node</p>
            </li>
          </ul>
        </div>
        <div className="tools">
          <h2>Herramientas</h2>
          <ul className="skills-list">
            <li className="skills-element">
              <FaGithub />
              <p>Github</p>
            </li>
            <li className="skills-element">
              <FaBitbucket />
              <p>Bitbucket</p>
            </li>
            <li className="skills-element">
              <FaNpm />
              <p>NPM</p>
            </li>
            <li className="skills-element">
              <FaJira />
              <p>Jira</p>
            </li>
            <li className="skills-element">
              <SiVisualstudio />
              <p>VS Code</p>
            </li>
            <li className="skills-element">
              <FaFigma />
              <p>Figma</p>
            </li>
            <li className="skills-element">
              <DiPhotoshop />
              <p>Photoshop</p>
            </li>
            <li className="skills-element">
              <DiIllustrator />
              <p>Illustrator</p>
            </li>
            <li className="skills-element">
              <FaSlack />
              <p>Slack</p>
            </li>
            <li className="skills-element">
              <FaTrello />
              <p>Trello</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
