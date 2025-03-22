import { Container } from "./styles";
import {
  instagramIcon,
  githubIcon,
  linkedinIcon,
  reactIcon,
  devIcon,
  gmailIcon,
} from "../Icons/Icons";

export function Footer() {
  const socialLinks = [
    {
      href: "https://www.linkedin.com/in/deepanshu-v-964126139/",
      icon: linkedinIcon,
      alt: "LinkedIn",
    },
    {
      href: "https://github.com/deepanshu0verma",
      icon: githubIcon,
      alt: "GitHub",
    },
    {
      href: "https://dev.to/deepanshu_verma_1543",
      icon: devIcon,
      alt: "Dev.to",
    },
    {
      href: `mailto:${process.env.REACT_APP_EMAIL}`,
      icon: gmailIcon,
      alt: "Gmail",
    },
    {
      href: "https://www.instagram.com/i_deepanshu_verma/",
      icon: instagramIcon,
      alt: "Instagram",
    },
  ];

  return (
    <Container className="footer">
      <a href="https://www.upwork.com/freelancers/~018ab55a3fef7932b7?viewMode=1" className="logo">
        <span>www.deepanshuverma.in</span>
      </a>
      <div className="made-with">
        <p>
          Built with <img src={reactIcon} alt="React" />
        </p>
      </div>
      <div className="social-media">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <img src={link.icon} alt={link.alt} />
          </a>
        ))}
      </div>
    </Container>
  );
}