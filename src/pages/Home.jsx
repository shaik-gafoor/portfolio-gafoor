import React from "react";
import Hero from "../components/Hero";
import VirtualExperience from "../components/VirtualExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import GitHubStats from "../components/GitHubStats";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <main>
      <Hero />
      <VirtualExperience />
      <Skills />
      <Projects />
      <GitHubStats />
      <Certificates />
      <Contact />
    </main>
  );
};

export default Home;
