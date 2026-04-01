import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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

  const sectionVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay, ease: "easeOut" },
    }),
  };

  return (
    <main>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0}
      >
        <Hero />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0.05}
      >
        <VirtualExperience />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0.1}
      >
        <Skills />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0.15}
      >
        <Projects />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0.2}
      >
        <GitHubStats />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0.25}
      >
        <Certificates />
      </motion.div>
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        custom={0.3}
      >
        <Contact />
      </motion.div>
    </main>
  );
};

export default Home;
