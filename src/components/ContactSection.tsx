import React, { useRef, useEffect } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';

const ContactSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

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

    if (formRef.current) {
      observer.observe(formRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      if (formRef.current) {
        observer.unobserve(formRef.current);
      }
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    alert('The Meassage has been sent successfully!');
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div ref={sectionRef} className="max-w-3xl mx-auto text-center mb-16 opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            Have a project in mind or want to discuss potential opportunities? I'm always open to new ideas and collaborations.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
            >
              <div className="mb-6">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit" 
                className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-200"
              >
                Send Message
              </button>
            </form>
          </div>

          <div className="md:w-1/2 flex flex-col justify-center">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Email</h3>
                  <p className="text-gray-700 dark:text-gray-300">kethamsanjay@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400">
                  <Linkedin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">LinkedIn</h3>
                  <a
                    href="https://www.linkedin.com/in/sanjay-ketham-952485289"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    linkedin.com/in/sanjay-ketham-952485289
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400">
                  <Github size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">GitHub</h3>
                  <a
                    href="https://github.com/SanjayKetham"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    github.com/SanjayKetham
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-full text-indigo-600 dark:text-indigo-400">
                  <Twitter size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Twitter</h3>
                  <a
                    href="https://twitter.com/KethamSanjay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    @KethamSanjay
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;