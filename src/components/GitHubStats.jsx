import React from "react";
import { motion } from "framer-motion";
import { GitBranch, Star, GitCommit, Users } from "lucide-react";

const GitHubStats = () => {
  // Dummy stats - you can later integrate with GitHub API
  const stats = [
    {
      icon: GitCommit,
      label: "Total Commits",
      value: "500+",
      color: "text-green-600 dark:text-green-400",
    },
    {
      icon: GitBranch,
      label: "Repositories",
      value: "25+",
      color: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Star,
      label: "Stars Earned",
      value: "50+",
      color: "text-yellow-600 dark:text-yellow-400",
    },
    {
      icon: Users,
      label: "Followers",
      value: "20+",
      color: "text-purple-600 dark:text-purple-400",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            GitHub Activity
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            A glimpse into my coding journey and open-source contributions
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-gray-800 rounded-lg mb-4 mx-auto">
                  <Icon size={32} className={stat.color} />
                </div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* GitHub Contribution Graph Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gray-800 rounded-xl p-8"
        >
          <h3 className="text-xl font-bold mb-6 text-center">
            Contribution Activity
          </h3>
          <div className="grid grid-cols-12 gap-1">
            {Array.from({ length: 84 }, (_, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-sm ${
                  Math.random() > 0.7
                    ? "bg-green-500"
                    : Math.random() > 0.5
                    ? "bg-green-400"
                    : Math.random() > 0.3
                    ? "bg-green-300"
                    : "bg-gray-700"
                }`}
              ></div>
            ))}
          </div>
          <p className="text-center text-gray-400 text-sm mt-4">
            Simulated contribution graph - integrate with GitHub API for real
            data
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;
