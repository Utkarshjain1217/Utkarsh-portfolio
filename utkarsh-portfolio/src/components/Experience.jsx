import React from 'react';
import { motion } from 'framer-motion';
import { experiences } from '../data/experienceData';
import { Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-padding bg-dark">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sora">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 text-lg font-montserrat">
            My professional journey and work experience
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
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
                    <div className="flex items-center justify-between mb-3">
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium font-montserrat">
                        {exp.type === 'work' ? 'Work' : 'Internship'}
                      </span>
                      <div className="flex items-center space-x-1 text-gray-400 text-sm font-montserrat">
                        <Calendar size={16} />
                        <span>{exp.period}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-2 font-sora">{exp.role}</h3>
                    <div className="flex items-center space-x-1 text-purple-400 mb-4 font-montserrat">
                      <MapPin size={16} />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed font-montserrat">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
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

export default Experience;