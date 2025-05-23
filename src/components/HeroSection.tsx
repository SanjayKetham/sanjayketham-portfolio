import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import profile from '../images/profile.jpg';
const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            textRef.current?.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden transition-colors duration-300 bg-gray-50 dark:bg-gray-900 py-24"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Text Section */}
        <div ref={textRef} className="max-w-3xl opacity-0 transform translate-y-8 transition-all duration-1000 ease-out">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
            <span className="block text-indigo-600 dark:text-indigo-400">Hello, I'm Sanjay Ketham.</span>
            <span className="block mt-2">I design & build digital experiences.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
            I'm a software developer specializing in building exceptional digital experiences. Currently, I'm focused on creating accessible, 
            human-centered products.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToProjects();
              }}
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center gap-2"
            >
              View my work
              <ArrowDown size={16} className="animate-bounce-subtle" />
            </a>
            <a
              href="#contact"
              className="px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 font-medium rounded-lg transition-all duration-200"
            >
              Contact me
            </a>
          </div>
        </div>

        {/* Right Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={profile}
            alt="Sanjay Ketham"
            className=" object-cover rounded-lg hover:scale-100 shadow-lg border-5"
          />
        </div>
      </div>

      {/* Bouncing Arrow at Bottom */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-gray-500 dark:text-gray-400" />
      </div>
    </section>
  );
};

export default HeroSection;
