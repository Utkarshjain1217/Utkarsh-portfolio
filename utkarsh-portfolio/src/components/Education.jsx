import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/educationData';
import { Calendar, Award } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-padding bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-gray-400 text-lg">
            My academic background and qualifications
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 rounded-full gradient-bg z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-dark-gray rounded-2xl p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300 card-hover">
                    {/* Institution Logo and Name */}
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white font-bold">
                        {edu.institution.split(' ').map(word => word[0]).join('')}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white">{edu.institution}</h3>
                        <p className="text-purple-400">{edu.degree}</p>
                      </div>
                    </div>

                    {/* Duration and Grade */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-1 text-gray-400">
                        <Calendar size={16} />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1 text-green-400">
                        <Award size={16} />
                        <span className="text-sm font-medium">{edu.grade}</span>
                      </div>
                    </div>

                    {/* Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="border-t border-gray-700 pt-4">
                        <h4 className="text-sm font-semibold text-gray-300 mb-2">Achievements:</h4>
                        <ul className="space-y-1">
                          {edu.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-sm text-gray-400 flex items-center space-x-2">
                              <div className="w-1 h-1 bg-purple-500 rounded-full"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;