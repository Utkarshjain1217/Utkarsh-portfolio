import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skillsData';

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const skillCategories = [
    { title: 'Frontend', skills: skills.frontend, color: 'from-blue-500 to-cyan-500' },
    { title: 'Backend', skills: skills.backend, color: 'from-green-500 to-emerald-500' },
    { title: 'Android', skills: skills.android, color: 'from-purple-500 to-pink-500' },
    { title: 'Others', skills: skills.others, color: 'from-orange-500 to-red-500' },
  ];

  return (
    <section id="skills" className="section-padding bg-dark-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-sora">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-montserrat">
            Over the last few years, I have been developing the following skills and technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-dark rounded-xl p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300 card-hover"
            >
              <h3 className="text-xl font-semibold text-white mb-4 font-sora">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center text-gray-300 font-montserrat">
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;