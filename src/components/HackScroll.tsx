import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaGithub, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import vr from '../images/vr.jpg';
import hackit from '../images/hackit.jpg';
import mern from '../images/mern.jpg';
const SectionContainer = styled.div`
  padding: 100px 20px;

  color: white;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 80px 10px;
  }

  @media (max-width: 576px) {
    padding: 60px 5px;
  }
`;

const SectionTitle = styled.h2`
  font-size: 48px;
  font-weight: 700;
  margin-bottom: 60px;
  color:black;
  text-shadow: 0px 0px 10px rgba(79, 70, 229, 0.5);
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;

  &::after {
    content: '';
    width: 100px;
    height: 4px;
    background-color: #4f46e5;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 576px) {
    font-size: 28px;
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const ProjectContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeIn} 1s ease-out;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 15px;
  margin-bottom: 20px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    height: 300px;
  }

  @media (max-width: 576px) {
    height: 250px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 36px;
  margin-bottom: 20px;
  color: #4f46e5;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 576px) {
    font-size: 24px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
  color: black;

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const ProjectLink = styled.a`
  font-size: 18px;
  color: #4f46e5;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin-top: 20px;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }

  @media (max-width: 576px) {
    font-size: 14px;
  }
`;

const Icon = styled(FaGithub)`
  margin-left: 10px;
  font-size: 24px;

  @media (max-width: 576px) {
    font-size: 20px;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  color: white;
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;
  z-index: 5;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00c3ff;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 576px) {
    padding: 6px;
  }
`;

const LeftArrow = styled(ArrowButton)`
  left: 10px;

  @media (max-width: 576px) {
    left: 5px;
  }
`;

const RightArrow = styled(ArrowButton)`
  right: 10px;

  @media (max-width: 576px) {
    right: 5px;
  }
`;

const projects = [
  {
    title: 'AI Autonomous National Level Hackathon Organized by VRSC',
    description: 'Participated in a national-level hackathon focused on building AI-powered applications across diverse problem statements. Our team tackled 13 out of 15 challenges, including real-time data structure visualization, AI-based proctoring systems, intelligent traffic monitoring, and more. Each solution was designed and deployed within a 48-hour window using modern frameworks and AI tools.',
    imgSrc: vr,
    githubLink: 'https://github.com/SanjayKetham/Face_Attendence',
  },
  {
    title: '24-hour Hackathon on MERN Full Stack Technologies by Biztron Softech',
    description: 'A real-time chat application developed with Firebase and Java, designed for secure and seamless communication.',
    imgSrc: mern,
    githubLink: 'https://github.com/SanjayKetham/Loop-final',
  },
  {
    title: "HackIT!2K24 Cybersecurity Hackathon",
    description: 'A full-stack application connecting users with their lost items, featuring a responsive interface and real-time notifications.',
    imgSrc: hackit,
    githubLink: 'https://github.com/SanjayKetham/truesecure',
  },
  // Add more projects as needed
];

const ProjectsSection = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 5000); // Automatic scrolling interval (5 seconds)
    return () => clearInterval(interval);
  }, []);

  const currentProject = projects[currentProjectIndex];

  const handleNext = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentProjectIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  return (
    <SectionContainer id="project">
      <SectionTitle className='dark:text-white'>Celebrations</SectionTitle>
      <ProjectContainer>
        <ProjectImage src={currentProject.imgSrc} alt={currentProject.title} />
        <ProjectTitle>{currentProject.title}</ProjectTitle>
        <ProjectDescription className='dark:text-white'>{currentProject.description}</ProjectDescription>
        <ProjectLink href={currentProject.githubLink} target="_blank" rel="noopener noreferrer">
          View on GitHub <Icon />
        </ProjectLink>
      </ProjectContainer>
      <LeftArrow onClick={handlePrev}>
        <FaArrowLeft />
      </LeftArrow>
      <RightArrow onClick={handleNext}>
        <FaArrowRight />
      </RightArrow>
    </SectionContainer>
  );
};

export default ProjectsSection;