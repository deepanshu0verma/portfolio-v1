import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";

// Import all images at once using an object for better organization
import {
  aboutMeImage,
  htmlIcon,
  cssIcon,
  jsIcon,
  nodeIcon,
  reactIcon,
  typescriptIcon,
  vueIcon,
  boostrapIcon,
  retoolIcon,
  nextIcon,
} from "../Icons/Icons"; // You'll need to create this file to centralize imports

// Define skills data for better maintenance
const skills = [
  { name: "Retool", icon: retoolIcon, delay: 0.1 },
  { name: "Next", icon: nextIcon, delay: 0.12 },
  { name: "React", icon: reactIcon, delay: 0.13 },
  { name: "TypeScript", icon: typescriptIcon, delay: 0.14 },
  { name: "Vue", icon: vueIcon, delay: 0.15 },
  { name: "Node", icon: nodeIcon, delay: 0.16 },
  { name: "HTML", icon: htmlIcon, delay: 0.17 },
  { name: "CSS", icon: cssIcon, delay: 0.18 },
  { name: "Bootstrap", icon: boostrapIcon, delay: 0.19 },
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
      <img src={skill.icon} alt={skill.name} />
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
            building dynamic, high-performance web applications. With expertise
            in MongoDB, Express.js, React, Node.js, Next.js, MySQL, and more, I
            craft tailored digital solutions that bring your ideas to life.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.2}>
          <p style={{ marginTop: "2rem", marginBottom: "2rem" }}>
            Beyond the MERN stack, I’m skilled in leveraging cutting-edge
            technologies like Next.js for seamless front-end experiences and
            MySQL for robust data management. I’m also committed to continuous
            learning, always exploring new tools and techniques to stay ahead in
            the ever-evolving tech world.
          </p>
        </AnimatedText>

        <AnimatedText delay={0.3}>
          <p>
            Whether you need a stunning new website, a powerful web app, or a
            complete overhaul of your online presence, I’d love to collaborate
            with you. Let’s connect and turn your vision into a reality with
            innovative, future-ready solutions!
          </p>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <h3>Here are my main skills:</h3>
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
