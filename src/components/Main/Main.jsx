import { Container } from "./styles";
import { Hero } from "../Hero/Hero";
import { About } from "../About/About";
import { Contact } from "../Contact/Contact";
import { Project } from "../Project/Project";
import { Particle } from "../Particle/Particle";

export function Main() {
  return (
    <Container>
      <Hero />
      <About />
      <Project />
      <Contact />
      <Particle />
    </Container>
  );
}
