import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { Download, ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen relative flex items-center justify-center overflow-hidden">
      <ParticlesBackground />
      
      <div className="section-padding relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">{personalInfo.name}</span>
            </h1>
            
            <div className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
              <TypeAnimation
                sequence={[
                  'Web Developer',
                  2000,
                  'Android Developer',
                  2000,
                  'Full Stack Developer',
                  2000,
                  'Software Engineer',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </div>
            
            <p className="text-gray-400 text-lg mb-8 max-w-2xl">
              {personalInfo.about}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={personalInfo.resume}
                download="Utkarsh_Jain_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 gradient-bg px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300"
              >
                <Download size={20} />
                <span>Check Resume</span>
              </a>
              
              <a
                href="#projects"
                className="flex items-center justify-center space-x-2 border border-purple-600 text-purple-400 px-6 py-3 rounded-lg hover:bg-purple-600 hover:text-white transition-all duration-300"
              >
                <span>View Projects</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </div>
          
          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full gradient-bg p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-dark overflow-hidden border-4 border-dark">
                  <img
                    src={personalInfo.profileImage}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="absolute -inset-4 rounded-full gradient-bg opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;