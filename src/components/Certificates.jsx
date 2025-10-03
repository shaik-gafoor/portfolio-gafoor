import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Award, Calendar } from "lucide-react";
import { certificates } from "../config/personalInfo";

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Certifications
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Professional certifications that validate my expertise and
            commitment to continuous learning
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-2"
            >
              {/* Certificate Icon */}
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-lg mb-4 group-hover:scale-110 transition-transform">
                <Award size={32} className="text-white" />
              </div>

              {/* Certificate Content */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {certificate.title}
                </h3>

                <p className="text-primary-600 dark:text-primary-400 font-semibold mb-3">
                  {certificate.issuer}
                </p>

                <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                  <Calendar size={16} />
                  <span>
                    {new Date(certificate.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                    })}
                  </span>
                </div>
              </div>

              {/* View Certificate Button */}
              <a
                href={certificate.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 dark:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-medium text-sm"
              >
                <ExternalLink size={16} />
                View Certificate
              </a>

              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10"></div>
            </motion.div>
          ))}
        </div>

        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-white dark:bg-gray-700 rounded-xl shadow-lg">
            <div className="flex items-center gap-2">
              <Award
                className="text-primary-600 dark:text-primary-400"
                size={24}
              />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                {certificates.length}
              </span>
            </div>
            <span className="text-gray-600 dark:text-gray-300">
              Professional Certifications
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
