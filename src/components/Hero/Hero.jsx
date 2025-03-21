import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Illustration from "../../assets/illustration.svg";
import { NavHashLink } from "react-router-hash-link";

import {
  devIcon,
  linkedinIcon,
  githubIcon,
  HelloIcon,
  gmailIcon,
} from "../Icons/Icons";

export function Hero() {
  const animations = [
    { content: <p>Hello <img src={HelloIcon} alt="Hello" width="20px" />, I'm</p>, delay: 0 },
    { content: <h1>Deepanshu Verma</h1>, delay: 0.2 },
    { content: <h3>MERN Stack Developer</h3>, delay: 0.4 },
    { content: <p className="small-resume">5+ Years of Experience</p>, delay: 0.6 },
    { 
      content: (
        <BrowserRouter>
          <NavHashLink smooth to="#contact" className="button">
            Contact
          </NavHashLink>
        </BrowserRouter>
      ), 
      delay: 0.8 
    },
  ];

  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/deepanshu-v-964126139/",
      imgSrc: linkedinIcon,
      alt: "Linkedin",
    },
    {
      href: "https://github.com/deepanshu0verma",
      imgSrc: githubIcon,
      alt: "GitHub",
    },
    {
      href: "https://dev.to/deepanshu_verma_1543",
      imgSrc: devIcon,
      alt: "Dev",
    },
    {
      href: `mailto:${process.env.REACT_APP_EMAIL}`,
      imgSrc: gmailIcon,
      alt: "Gmail",
    },
  ];

  return (
    <Container id="home">
      <div className="hero-text">
        {animations.map(({ content, delay }, index) => (
          <ScrollAnimation key={index} animateIn="fadeInUp" delay={delay * 1000}>
            {content}
          </ScrollAnimation>
        ))}
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            {socialLinks.map(({ href, imgSrc, alt }, index) => (
              <a key={index} href={href} target="_blank" rel="noreferrer">
                <img src={imgSrc} alt={alt} />
              </a>
            ))}
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={1 * 1000}>
          <img src={Illustration} alt="Illustration" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
