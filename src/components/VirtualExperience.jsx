import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, Award, CheckCircle } from "lucide-react";
import { virtualExperience } from "../config/personalInfo";

const VirtualExperience = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Virtual Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional internships and virtual experiences that shaped my
            career
          </p>
        </motion.div>

        <div className="space-y-12">
          {virtualExperience.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Timeline line */}
              {index !== virtualExperience.length - 1 && (
                <div className="absolute left-1/2 transform -translate-x-0.5 top-full h-12 w-0.5 bg-primary-200 dark:bg-primary-800 hidden lg:block"></div>
              )}

              <div
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden lg:flex w-4 h-4 bg-primary-600 rounded-full ring-4 ring-primary-100 dark:ring-primary-900 shrink-0"></div>

                {/* Content */}
                <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-sm font-medium rounded-full">
                      {experience.type}
                    </span>
                    <div className="flex items-center gap-1 text-gray-600 dark:text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{experience.duration}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {experience.role}
                  </h3>

                  <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-4">
                    {experience.company}
                  </h4>

                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {experience.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">
                      Technologies Used:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div>
                    <h5 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 flex items-center gap-2">
                      <Award size={16} />
                      Key Achievements:
                    </h5>
                    <ul className="space-y-2">
                      {experience.achievements.map(
                        (achievement, achievementIndex) => (
                          <li
                            key={achievementIndex}
                            className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm"
                          >
                            <CheckCircle
                              size={16}
                              className="text-green-500 mt-0.5 shrink-0"
                            />
                            {achievement}
                          </li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VirtualExperience;
