import React from 'react';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/personalInfo';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  return (
    <section id="about" className="min-h-screen relative flex items-center overflow-hidden section-padding">
      <ParticlesBackground />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div>
          {/* Developer Portfolio Badge */}
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-1 h-1 bg-white"></div>
            <span className="text-gray-500 text-xs tracking-[0.3em] uppercase font-montserrat">Developer Portfolio</span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-sora text-white leading-tight">
            <a 
              href="https://github.com/Utkarshjain1217" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors duration-300"
            >
              {personalInfo.name}
            </a>
          </h1>
          
          {/* Tech Stack Tags */}
          <div className="text-gray-400 text-xs mb-10 font-montserrat tracking-widest">
            {personalInfo.tagline}
          </div>
          
          {/* Main Heading */}
          <h2 className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-400 mb-8 leading-relaxed font-montserrat max-w-4xl">
            {personalInfo.about}
          </h2>
          
          {/* Subtext */}
          <p className="text-gray-400 text-sm mb-12 font-montserrat italic">
            {personalInfo.subtext}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-2.5 bg-white text-black hover:bg-gray-200 transition-all duration-300 font-montserrat font-medium text-sm"
            >
              View Work
              <ArrowRight size={14} className="ml-2" />
            </a>
            
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-2.5 border border-gray-800 text-white hover:border-white transition-all duration-300 font-montserrat font-medium text-sm"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;