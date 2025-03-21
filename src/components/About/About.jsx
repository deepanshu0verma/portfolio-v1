import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

// Import all images at once using an object for better organization
import {
  aboutMeImage,
  materialUI,
  postgresSqlIcon,
  jsIcon,
  nodeIcon,
  reactIcon,
  typescriptIcon,
  mySqlIcon,
  mongoDbIcon,
  retoolIcon,
  nextIcon,
} from "../Icons/Icons";
import Tooltip from "../../util/tooltip";

// Define skills data for better maintenance
const skills = [
  { name: "Retool", icon: retoolIcon, delay: 0.1 },
  { name: "Next", icon: nextIcon, delay: 0.12 },
  { name: "React", icon: reactIcon, delay: 0.13 },
  { name: "TypeScript", icon: typescriptIcon, delay: 0.14 },
  { name: "MySQL", icon: mySqlIcon, delay: 0.15 },
  { name: "Node", icon: nodeIcon, delay: 0.16 },
  { name: "MaterialUI", icon: materialUI, delay: 0.17 },
  { name: "PostgreSql", icon: postgresSqlIcon, delay: 0.18 },
  { name: "MongoDB", icon: mongoDbIcon, delay: 0.19 },
  { name: "JavaScript", icon: jsIcon, delay: 0.19 },
];

// Create reusable components
const AnimatedText = ({ children, delay = 0 }) => (
  <ScrollAnimation animateIn="fadeInLeft" delay={delay * 1000}>
    {children}
  </ScrollAnimation>
);

const SkillIcon = ({ skill }) => (
  <div className="hability">
    <ScrollAnimation animateIn="fadeInUp" delay={skill.delay * 1000}>
      <Tooltip id="tooltip2" text={skill.name}>
        <img src={skill.icon} alt={skill.name} />
      </Tooltip>
    </ScrollAnimation>
  </div>
);

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <AnimatedText>
          <h2>About me</h2>
        </AnimatedText>

        <AnimatedText delay={0.1}>
          <p>
            Hello! I’m Deepanshu, a MERN stack developer passionate about
            developing high-performance, dynamic web-based applications. With
            experience in MongoDB, Express.js, React, Node.js, Next.js, MySQL,
            and many more, I create customized digital solutions that turn your
            visions into reality.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            Beyond the MERN stack, I’m skilled in leveraging cutting-edge
            technologies such as Next.js for smooth front-end experiences and
            MySQL for robust data management. I’m also committed to continuous
            learning, continually finding new tools and methods to remain at the
            forefront of the ever-evolving tech world.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <p>
            Whether you require a beautiful new website, a robust web
            application, or a complete overhaul of your online presence, I’d
            love to collaborate with you. Let's connect and make your dream come
            true with innovative, future-proof solutions!
          </p>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <h3>Explore My Core Strengths:</h3>
        </AnimatedText>

        <div className="hard-skills">
          {skills.map((skill, index) => (
            <SkillIcon key={index} skill={skill} />
          ))}
        </div>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.2 * 1000}>
          <img src={aboutMeImage} alt="Deepanshu Verma" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
