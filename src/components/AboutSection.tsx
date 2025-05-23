import React, { useRef, useEffect } from 'react';
import { Code, User, Laptop } from 'lucide-react';

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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

    [sectionRef, contentRef, skillsRef].forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      [sectionRef, contentRef, skillsRef].forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div ref={sectionRef} className="flex flex-col md:flex-row gap-12 items-center">
          <div 
            ref={contentRef} 
            className="md:w-1/2 opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">About Me</h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
  <p>
    Hello! I'm Ketham Sanjay, a driven and curious software developer with a strong foundation in Full Stack Development and a passion for building impactful digital solutions.
  </p>
  <p>
    My journey into tech started with a love for solving real-world problems, which has led me to develop projects ranging from social media platforms to cybersecurity tools. I specialize in the MERN stack and have hands-on experience with technologies like React, Node.js, MongoDB, Tailwind CSS, and more.
  </p>
  <p>
    I've participated in multiple national-level hackathons, winning top positions, and contributing to AI-powered, cybersecurity, and social networking applications. I enjoy collaborating on innovative ideas and continuously exploring new tools and frameworks.
  </p>
  <p>
    Outside of coding, I love diving into cloud technologies, exploring cybersecurity, and staying updated with the latest trends in tech. Whether it’s a 24-hour hackathon or a semester-long project, I bring energy, precision, and passion to every line of code I write.
  </p>
</div>

            <div className="mt-8 flex gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200 flex items-center gap-2"
              >
                Get in touch
              </a>
              <a
                href="/Sanjay_Ketham.pdf"
                className="px-6 py-3 bg-transparent border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 font-medium rounded-lg transition-all duration-200"
              >
                Download Resume
              </a>
            </div>
          </div>
      
          <div 
            ref={skillsRef} 
            className="md:w-1/2 opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-200"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Skills & Technologies</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { name: 'C', icon: <Code size={20} /> },
                { name: 'Java', icon: <Code size={20} /> },
                { name: 'Python', icon: <Code size={20} /> },
                { name: 'JavaScript', icon: <Code size={20} /> },
                { name: 'HTML', icon: <Code size={20} /> },
                { name: 'CSS', icon: <Code size={20} /> },
                { name: 'Frontend', icon: <Code size={20} /> },
                { name: 'Backend', icon: <Code size={20} /> },
                { name: 'Responsive Design', icon: <Laptop size={20} /> },
                { name: 'UI/UX Design', icon: <User size={20} /> },
                { name: 'React', icon: <Code size={20} /> },
                { name: 'Redux', icon: <Code size={20} /> },
                { name: 'MongoDB', icon: <Code size={20} /> },
                { name: 'Express.js', icon: <Code size={20} /> },
                { name: 'Git', icon: <Code size={20} /> },
                { name: 'GitHub', icon: <Code size={20} /> },
                { name: 'TypeScript', icon: <Code size={20} /> },
                { name: 'Next.js', icon: <Code size={20} /> },
                { name: 'Tailwind CSS', icon: <Code size={20} /> },
                { name: 'Node.js', icon: <Code size={20} /> },
                { name: 'GraphQL', icon: <Code size={20} /> },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-200 transform hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400 mb-2">
                    {skill.icon}
                    <span className="font-medium">{skill.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;