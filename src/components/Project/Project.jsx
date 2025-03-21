import { Container } from "./styles";
import githubIcon from "../../assets/github.svg";
import externalLink from "../../assets/external-link.svg";
import ScrollAnimation from "react-animate-on-scroll";
import { projects } from "../../data/project";


// Reusable ProjectCard component
const ProjectCard = ({ title, description, tech, github, external }) => (
  <ScrollAnimation animateIn="flipInX">
    <div className="project">
      <header>
        <svg 
          width="50" 
          xmlns="http://www.w3.org/2000/svg" 
          role="img" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="#23ce6b" 
          strokeWidth="1" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <title>Folder</title>
          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
        </svg>
        <div className="project-links">
          {github && (
            <a href={github} target="_blank" rel="noreferrer">
              <img src={githubIcon} alt="GitHub" />
            </a>
          )}
          {external && (
            <a href={external} target="_blank" rel="noreferrer">
              <img src={externalLink} alt="Visit site" />
            </a>
          )}
        </div>
      </header>
      <div className="body">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <footer>
        <ul className="tech-list">
          {tech.map((techItem, index) => (
            <li key={index}>{techItem}</li>
          ))}
        </ul>
      </footer>
    </div>
  </ScrollAnimation>
);

export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">
        {projects.map((project, index) => (
          <ProjectCard 
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            github={project.github}
            external={project.external}
          />
        ))}
      </div>
    </Container>
  );
}