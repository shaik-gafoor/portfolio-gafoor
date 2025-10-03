import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code, Database, TestTube, Wrench } from "lucide-react";
import { skills } from "../config/personalInfo";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    frontend: {
      title: "Frontend Development",
      icon: Code,
      skills: skills.frontend,
      color: "from-blue-500 to-cyan-500",
    },
    backend: {
      title: "Backend Development",
      icon: Database,
      skills: skills.backend,
      color: "from-green-500 to-emerald-500",
    },
    testing: {
      title: "Testing & QA",
      icon: TestTube,
      skills: skills.testing,
      color: "from-purple-500 to-pink-500",
    },
    tools: {
      title: "Tools & Technologies",
      icon: Wrench,
      skills: skills.tools,
      color: "from-orange-500 to-red-500",
    },
  };

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to build amazing digital
            experiences
          </p>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 ${
                  activeCategory === key
                    ? "bg-primary-600 text-white shadow-lg"
                    : "bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600"
                }`}
              >
                <Icon size={20} />
                {category.title}
              </button>
            );
          })}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {skillCategories[activeCategory].skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="group relative"
            >
              <div className="bg-white dark:bg-gray-700 rounded-lg p-4 text-center shadow-md hover:shadow-xl transition-all transform hover:-translate-y-2 cursor-pointer">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skillCategories[activeCategory].color} opacity-0 group-hover:opacity-10 rounded-lg transition-opacity`}
                ></div>
                <h3 className="font-semibold text-gray-900 dark:text-white relative z-10">
                  {skill}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 bg-white dark:bg-gray-700 rounded-xl p-8 shadow-lg"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {skills.frontend.length}+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Frontend Technologies
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {skills.backend.length}+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Backend Technologies
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {skills.testing.length}+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Testing Tools
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                {skills.tools.length}+
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Development Tools
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
