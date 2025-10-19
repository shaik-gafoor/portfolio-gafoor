import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Calendar,
  Clock,
  Filter,
  Folder,
  ArrowLeft,
  CheckCircle,
  PlayCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../config/personalInfo";

const AllProjects = () => {
  const [filter, setFilter] = useState("All");
  const [sortBy, setSortBy] = useState("newest");

  const categories = [
    "All",
    ...new Set(projects.map((project) => project.category)),
  ];

  const filteredProjects = projects
    .filter((project) => filter === "All" || project.category === filter)
    .sort((a, b) => {
      if (sortBy === "newest") {
        return new Date(b.startDate) - new Date(a.startDate);
      } else {
        return new Date(a.startDate) - new Date(b.startDate);
      }
    });

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "In Progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
        return <CheckCircle size={16} className="text-green-600" />;
      case "In Progress":
        return <PlayCircle size={16} className="text-blue-600" />;
      default:
        return <Clock size={16} className="text-gray-600" />;
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            All Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
            A comprehensive timeline of my development journey, showcasing
            projects across various technologies and domains.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center gap-4 mb-12 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
        >
          <div className="flex items-center gap-2">
            <Filter size={20} className="text-gray-600 dark:text-gray-400" />
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Filter:
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  filter === category
                    ? "bg-primary-600 text-white shadow-md"
                    : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-2">
            <span className="font-medium text-gray-700 dark:text-gray-300">
              Sort:
            </span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg border-none focus:ring-2 focus:ring-primary-500"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
            </select>
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800 hidden md:block"></div>

          <div className="space-y-12">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-600 rounded-full ring-4 ring-primary-100 dark:ring-primary-900 hidden md:block"></div>

                {/* Project Card */}
                <div className="md:ml-20 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1 overflow-hidden">
                  <div className="p-8">
                    {/* Project Header */}
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {project.title}
                          </h3>
                          {getStatusIcon(project.status)}
                        </div>

                        <div className="flex flex-wrap items-center gap-4 mb-3">
                          <span
                            className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(
                              project.status
                            )}`}
                          >
                            {project.status}
                          </span>
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-full">
                            {project.category}
                          </span>
                        </div>

                        <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400">
                          <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span className="text-sm">
                              {formatDate(project.startDate)} -{" "}
                              {project.endDate
                                ? formatDate(project.endDate)
                                : "Present"}
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Project Image */}
                      <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                        <img
                          src={project.imageUrl}
                          alt={project.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            // Fallback to placeholder if image fails to load
                            e.target.style.display = "none";
                            e.target.nextSibling.style.display = "flex";
                          }}
                        />
                        <div
                          className="w-full h-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center"
                          style={{ display: "none" }}
                        >
                          <Folder size={32} className="text-white opacity-60" />
                        </div>
                      </div>
                    </div>

                    {/* Project Description */}
                    <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 text-sm rounded-md"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3">
                        Key Features:
                      </h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start gap-2 text-gray-700 dark:text-gray-300 text-sm"
                          >
                            <CheckCircle
                              size={16}
                              className="text-green-500 mt-0.5 shrink-0"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Project Links */}
                    <div className="flex flex-wrap gap-4">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors font-medium"
                        >
                          <Github size={18} />
                          View Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
            Project Statistics
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                {projects.length}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Total Projects
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">
                {projects.filter((p) => p.status === "Completed").length}
              </div>
              <div className="text-gray-600 dark:text-gray-300">Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                {projects.filter((p) => p.status === "In Progress").length}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                In Progress
              </div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                {new Set(projects.flatMap((p) => p.technologies)).size}
              </div>
              <div className="text-gray-600 dark:text-gray-300">
                Technologies
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AllProjects;
