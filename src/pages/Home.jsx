import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import VirtualExperience from "../components/VirtualExperience";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import GitHubStats from "../components/GitHubStats";
import Certificates from "../components/Certificates";
import Contact from "../components/Contact";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location?.state?.scrollTo) {
      const id = location.state.scrollTo;
      const el = document.getElementById(id);
      if (el) {
        // use a tiny timeout to allow the page to render
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 50);
      }
    }
    // Clear state after handling to prevent repeated scrolling when navigating back
    // Note: react-router doesn't provide a direct way to clear location.state; this is lightweight.
  }, [location]);
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
