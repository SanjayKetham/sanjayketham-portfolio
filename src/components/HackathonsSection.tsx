import React, { useRef, useEffect } from 'react';
import { Trophy, CheckCircle2, ExternalLink } from 'lucide-react';
import { Hackathon } from '../types';

const hackathons: Hackathon[] = [
{
  id: 1,
  name: 'AI Autonomous National Level Hackathon Organized by VRSC',
  project: 'AI Solutions Suite',
  date: 'February 2025',
  description: 'Participated in a national-level hackathon focused on building AI-powered applications across diverse problem statements. Our team tackled 13 out of 15 challenges, including real-time data structure visualization, AI-based proctoring systems, intelligent traffic monitoring, and more. Each solution was designed and deployed within a 48-hour window using modern frameworks and AI tools.',
  achievements: [
    'Solved 13 out of 15 AI problem statements',
    'Won First Place Overall among 100+ teams',
    'Recognized for exceptional teamwork and innovation in AI applications'
  ],
  technologies: ['React', 'Python', 'TensorFlow', 'OpenCV', 'Node.js', 'AWS'],
  // projectUrl: 'https://devpost.com/project-url'
},

  {
  id: 2,
  name: '24-hour Hackathon on MERN Full Stack Technologies by Biztron Softech',
  project: 'Loop - Social Media Platform',
  date: 'October 2024',
  description: 'Built a full-fledged social media platform named "Loop" during a 24-hour MERN stack hackathon. The app featured user authentication, real-time post updates, likes, comments, and a responsive UI. The goal was to create a LinkedIn-like platform optimized for student communities.',
  achievements: [
    'Won First Place among all participating teams',
    'Successfully built and deployed the complete MERN stack application within 24 hours',
    'Recognized for clean UI/UX and real-time interaction features'
  ],
  technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'Tailwind CSS'],
  // projectUrl: 'https://github.com/your-username/loop' // Optional
},
{
  id: 3,
  name: 'HackIT!2K24 Cybersecurity Hackathon',
  project: 'Threat Detectives',
  date: 'October 2024',
  description: 'Developed a cybersecurity-focused web application named "Threat Detectives" that uses AI and open-source intelligence (OSINT) to identify fake applications and potential security vulnerabilities in websites and mobile apps. The platform provides real-time analysis and detailed security reports for proactive threat mitigation.',
  achievements: [
    'Won First Place among all cybersecurity-focused teams',
    'Successfully implemented AI-based vulnerability detection for both frontend and backend threats',
    'Recognized for real-world applicability and intuitive dashboard design'
  ],
  technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'TensorFlow', 'Python', 'OSINT tools'],
  // projectUrl: 'https://github.com/your-username/threat-detectives' // Optional
}


];

const HackathonsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const hackathonRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    hackathonRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      hackathonRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section id='hackathons' className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div
          ref={sectionRef}
          className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Hackathons
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-12">
            Participating in hackathons has allowed me to push my creative boundaries,
            work with diverse teams, and build innovative solutions under time constraints.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {hackathons.map((hackathon, index) => (
            <div
              key={hackathon.id}
              ref={(el) => (hackathonRefs.current[index] = el)}
              className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out bg-white dark:bg-gray-800 rounded-xl p-8 hover:shadow-lg border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400">
                  <Trophy size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {hackathon.name}
                  </h3>
                  <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-1">
                    {hackathon.project}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {hackathon.date}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {hackathon.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Achievements
                    </h4>
                    <ul className="space-y-3">
                      {hackathon.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <CheckCircle2 size={20} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hackathon.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {hackathon.projectUrl && (
                    <a
                      href={hackathon.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-indigo-600 dark:text-indigo-400 hover:underline"
                    >
                      View Project <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HackathonsSection;