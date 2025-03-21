import { Container } from './styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { NavHashLink, HashLink } from 'react-router-hash-link';
import { useState } from 'react';
import Resume from '../../assets/Deepanshu_Resume.pdf';

export function Header() {
  const [isActive, setActive] = useState(false);

  const toggleTheme = () =>
    document.documentElement.classList.toggle('light');

  const closeMenu = () => setActive(false);

  const toggleMenu = () => setActive((prevState) => !prevState);

  return (
    <Container className="header-fixed">
      <Router>
        <HashLink smooth to="#home" className="logo">
          <span>{"<Deepanshu "}</span>
          <span className="slash">{"Verma />"}</span>
        </HashLink>

        <input
          onChange={toggleTheme}
          className="container_toggle"
          type="checkbox"
          id="switch"
          name="mode"
        />
        <label htmlFor="switch">Toggle</label>

        <nav className={isActive ? 'active' : ''}>
          {['#home', '#about', '#project', '#contact'].map((hash, index) => (
            <NavHashLink key={index} smooth to={hash} onClick={closeMenu}>
              {hash.replace('#', '').replace(/^\w/, (c) => c.toUpperCase())}
            </NavHashLink>
          ))}
          <a href={Resume} download className="button">
            Resume
          </a>
        </nav>

        <div
          aria-expanded={isActive ? 'true' : 'false'}
          aria-haspopup="true"
          aria-label={isActive ? 'Close menu' : 'Open menu'}
          className={`menu ${isActive ? 'active' : ''}`}
          onClick={toggleMenu}
        ></div>
      </Router>
    </Container>
  );
}
