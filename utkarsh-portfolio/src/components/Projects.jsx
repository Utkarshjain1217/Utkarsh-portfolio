import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projectsData';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-sora text-white leading-tight">
            Projects
          </h2>
          <p className="text-gray-600 text-sm font-montserrat">
            Selected work and personal projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-black border border-gray-900 hover:border-gray-800 transition-all duration-300 group"
            >
              {/* Project Header */}
              <div className="p-6 border-b border-gray-900">
                <h3 className="text-lg font-semibold text-white font-montserrat mb-2">{project.title}</h3>
                <div className="flex items-center space-x-2 text-gray-600 font-montserrat">
                  <Calendar size={14} />
                  <span className="text-xs">{project.period}</span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-gray-500 mb-4 leading-relaxed font-montserrat text-sm">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 border border-gray-900 text-gray-600 text-xs font-montserrat"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </a>
                  {project.liveLink && project.liveLink !== '#' && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <ExternalLink size={18} />
                      <span className="text-sm">Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;