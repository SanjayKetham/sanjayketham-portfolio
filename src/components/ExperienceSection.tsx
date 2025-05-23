import React, { useRef, useEffect } from 'react';
import { Briefcase } from 'lucide-react';
import { Experience } from '../types';

const experiences: Experience[] = [
  {
    id: 1,
    company: 'Lakireddy Bali Reddy College of Engineering',
    position: 'B.Tech in Computer Science and Engineering',
    duration: '2022 - 2026',
    description: 'Currently pursuing Bachelor of Technology with a strong focus on software development, web technologies, and cloud computing. Actively involved in hackathons and project-based learning.',
    technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Cybersecurity'],
  },
  {
    id: 2,
    company: 'Narayana Junior College',
    position: 'Intermediate (MPC)',
    duration: '2019 - 2021',
    description: 'Completed intermediate education with a focus on Mathematics, Physics, and Chemistry. Built a solid foundation for engineering studies.',
    technologies: ['Mathematics', 'Physics', 'Chemistry'],
  },
  {
    id: 3,
    company: 'Triveni Talent School',
    position: 'Secondary School Education (10th)',
    duration: '2018 - 2019',
    description: 'Completed 10th grade with a strong academic record and keen interest in science and technology.',
    technologies: ['Science', 'Mathematics', 'English'],
  },
];


const ExperienceSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineItems = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -10% 0px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    timelineItems.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      timelineItems.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section id="education" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div ref={sectionRef} className="container mx-auto px-6 opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl">
            My educational journey has equipped me with a solid foundation in computer science principles and practices.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gray-200 dark:bg-gray-700"></div>

          <ul className="space-y-12">
            {experiences.map((experience, index) => (
              <li
                key={experience.id}
                ref={(el) => (timelineItems.current[index] = el)}
                className={`relative opacity-0 transform ${
                  index % 2 === 0 ? 'translate-x-8' : '-translate-x-8'
                } md:translate-x-0 transition-all duration-700 ease-out delay-${index * 100}`}
              >
                <div className="flex flex-col md:flex-row items-center">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full bg-indigo-600 dark:bg-indigo-500 flex items-center justify-center z-10">
                    <Briefcase size={20} className="text-white" />
                  </div>

                  {/* Content */}
                  <div
                    className={`md:w-1/2 ${
                      index % 2 === 0
                        ? 'md:pr-16 md:text-right'
                        : 'md:pl-16 md:ml-auto'
                    } pl-12 md:pl-0`}
                  >
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.position}</h3>
                      <h4 className="text-lg font-medium text-indigo-600 dark:text-indigo-400">{experience.company}</h4>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{experience.duration}</p>
                      <p className="text-gray-700 dark:text-gray-300 mb-4">{experience.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;