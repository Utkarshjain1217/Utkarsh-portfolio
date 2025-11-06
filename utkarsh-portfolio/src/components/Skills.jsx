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
    { title: 'Languages', skills: skills.languages },
    { title: 'Frameworks', skills: skills.frameworks },
    { title: 'Database', skills: skills.database },
    { title: 'Machine Learning', skills: skills.ml },
    { title: 'Data Analytics', skills: skills.analytics },
    { title: 'Fundamentals & Tools', skills: skills.fundamentals },
  ];

  return (
    <section id="skills" className="section-padding bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-sora text-white leading-tight">
            Skills
          </h2>
          <p className="text-gray-600 text-sm font-montserrat">
            Technical expertise and proficiencies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-black p-5 border border-gray-900 hover:border-gray-800 transition-all duration-300"
            >
              <h3 className="text-sm font-semibold text-white mb-3 font-montserrat tracking-wide uppercase">{category.title}</h3>
              <div className="space-y-1.5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center text-gray-500 font-montserrat text-xs">
                    <span className="w-1 h-1 bg-gray-800 mr-2.5"></span>
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