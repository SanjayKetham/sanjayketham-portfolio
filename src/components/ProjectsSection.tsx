import React, { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCard from './ProjectCard';
import { Project } from '../types';
import loop from '../images/Loop.png';
import portfolio from '../images/portfolio.png';
import slice from '../images/slice.png';
import flipkart from '../images/flipkart.png';
const projects: Project[] = [
  {
    id: 1,
    title: 'Loop - Social Media App',
    description: 'A modern social media application built with React, Node.js, and MongoDB. Features include user authentication, real-time messaging, and a dynamic feed.',
    image: loop,
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    liveUrl: 'https://github.com/SanjayKetham/Loop-final',
    githubUrl: 'https://github.com/SanjayKetham/Loop-final',
    featured: true,
  },
  {
    id: 2,
    title: 'Slice of Spice - Restaurant Website',
    description: 'This project is a unique culinary experience platform named "Slice of Spice." Crafted using modern web technologies, it provides users with recipes, cooking tips, and interactive features. The design focuses on creating an engaging and easy-to-navigate interface, allowing users to explore a variety of dishes and share their culinary experiences. Key features include recipe search, user-generated content, and a dynamic blog section.',
    image: slice,
    tags: ['HTML', 'CSS', 'JavaScript', 'Java Backend'],
    liveUrl: 'https://sanjayketham.github.io/slice-of-spice/',
    githubUrl: 'https://github.com/SanjayKetham/slice-of-spice',
    featured: false,
  },
  {
    id: 3,
    title: 'Portfolio',
    description: 'A personal portfolio website built with React and Tailwind CSS. Showcases my projects, skills, and experience.',
    image: portfolio,
    tags: ['React','Tailwind CSS'],
    liveUrl: 'https://sanjayketham.github.io/ketham_portfolio/',
    githubUrl: 'https://github.com/SanjayKetham/ketham_portfolio',
    featured: true,
  },
  
  {
    id: 4,
    title: 'Flipkart Clone',
    description: "This project is a comprehensive clone of Flipkart's e-commerce platform, meticulously crafted using React.js and Tailwind CSS. It demonstrates a modern, responsive design tailored to enhance user experience across various devices. Key features include real-time product filtering, seamless user authentication and management through Firebase, and a dynamic shopping cart system. The project exemplifies industry best practices in web development and offers a robust foundation for scalable and maintainable code.",
    image: flipkart,
    tags: ['React', 'TypeScript','Firebase'],
    liveUrl: 'https://github.com/SanjayKetham/flipkart_clone',
    githubUrl: 'https://sanjayketham.github.io/flipkart_clone/',
    featured: false,
  },
];

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'featured'>('all');
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.featured);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Projects</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            A selection of my recent work. These projects showcase my skills in design, development, and problem-solving.
          </p>
          <div className="mt-6 flex gap-4">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                filter === 'all'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              All Projects
            </button>
            {/* <button
              onClick={() => setFilter('featured')}
              className={`px-4 py-2 rounded-lg transition-all duration-200 ${
                filter === 'featured'
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              Featured
            </button> */}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://github.com/sanjayketham"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-900 dark:text-white font-medium rounded-lg transition-all duration-200"
          >
            <Github size={18} />
            See more on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;