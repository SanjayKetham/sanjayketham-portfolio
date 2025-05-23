import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import ExperienceSection from './components/ExperienceSection';
import InternshipsSection from './components/InternshipsSection';
import HackathonsSection from './components/HackathonsSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './styles/animations.css';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'SANJAY KETHAM | Portfolio';

    // Check if there's a hash in the URL and scroll to that section
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="relative bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:absolute"></div>
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <ExperienceSection />
        <InternshipsSection />
        <HackathonsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;