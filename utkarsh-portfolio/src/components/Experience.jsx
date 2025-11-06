import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experienceData';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-sora text-white leading-tight">
            Experience
          </h2>
          <p className="text-gray-600 text-sm font-montserrat">
            Professional work history and contributions.
          </p>
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="border border-gray-900 bg-black hover:border-gray-800 transition-all duration-300"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-900">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white font-montserrat mb-1">{exp.role}</h3>
                    <div className="flex items-center space-x-2 text-gray-500">
                      <MapPin size={14} />
                      <span className="text-sm font-montserrat">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-600 font-montserrat text-sm">
                    <Calendar size={14} />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <p className="text-gray-500 mb-4 leading-relaxed font-montserrat text-sm">
                  {exp.description}
                </p>
                
                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 border border-gray-900 text-gray-600 text-xs font-montserrat"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;