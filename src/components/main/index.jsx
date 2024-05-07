import React from "react";

import Home from "./home";
import About from "./about";
import Skills from "./skills";
import Projects from "./projects";
import Experience from "./experience";
import Contact from "./contact";

export default function Main() {
  return (
    <>
      <section id="Home">
        <Home />
      </section>
      <section id="About">
        <About />
      </section>
      <section id="Skills">
        <Skills />
      </section>
      <section id="Projects">
        <Projects />
      </section>
      <section id="Experience">
        <Experience />
      </section>
      <section id="Contact">
        <Contact />
      </section>
    </>
  );
}
