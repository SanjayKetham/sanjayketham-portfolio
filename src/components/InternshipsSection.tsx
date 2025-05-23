import React, { useRef, useEffect } from 'react';
import { Building2, CheckCircle2 } from 'lucide-react';
import { Internship } from '../types';

const internships: Internship[] = [
 {
  id: 1,
  company: 'Leantech Labs Pvt. Ltd.',
  position: 'Software Developer',
  duration: 'Jan 2025 – present',
  description: 'Worked as a Software Developer focusing on building scalable web applications and improving backend performance for enterprise-grade solutions.',
  achievements: [
    'Developed and deployed a modular authentication system using JWT and OAuth2, enhancing security and reusability',
    'Optimized database queries and reduced API latency by 30% through MongoDB aggregation and indexing strategies',
    'Contributed to the design and launch of a new client dashboard using React and Tailwind CSS',
    'Collaborated in agile sprints with cross-functional teams to meet client requirements efficiently'
  ],
  technologies: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Express.js', 'JWT', 'OAuth2', 'AWS'],
},

 {
  id: 2,
  company: 'NullClass EdTech Pvt. Ltd.',
  position: 'Full Stack Developer Intern',
  duration: 'July 2024 – Dec 2024',
  description: 'Worked as a Full Stack Developer Intern, contributing to the development of educational platforms and tools aimed at enhancing student learning experiences. Involved in both frontend and backend tasks across the product lifecycle.',
  achievements: [
    'Developed and integrated reusable, mobile-responsive UI components using React and Tailwind CSS for the student dashboard',
    'Built dynamic server-side rendered pages with Next.js, improving SEO and load performance for key course pages',
    'Integrated GraphQL APIs to streamline data fetching and improve performance over REST',
    'Collaborated with the backend team to implement secure user authentication and course access control features',
    'Actively participated in code reviews, daily stand-ups, and sprint retrospectives to ensure agile team workflow'
  ],
  technologies: ['React', 'Tailwind CSS', 'GraphQL', 'Node.js', 'MongoDB','Express.js'],
}

];

const InternshipsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const internshipRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    internshipRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      internshipRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div
          ref={sectionRef}
          className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Internships
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mb-12">
            My journey through various internships has provided me with hands-on experience
            and valuable insights into different aspects of software development.
          </p>
        </div>

        <div className="space-y-12">
          {internships.map((internship, index) => (
            <div
              key={internship.id}
              ref={(el) => (internshipRefs.current[index] = el)}
              className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out bg-gray-50 dark:bg-gray-900 rounded-xl p-8 hover:shadow-lg"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400">
                  <Building2 size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {internship.position}
                  </h3>
                  <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-1">
                    {internship.company}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {internship.duration}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    {internship.description}
                  </p>

                  <div className="space-y-4 mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Key Achievements
                    </h4>
                    <ul className="space-y-3">
                      {internship.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                          <CheckCircle2 size={20} className="text-green-500 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {internship.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipsSection;