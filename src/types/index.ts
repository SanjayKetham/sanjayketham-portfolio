export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  technologies: string[];
}

export interface Internship {
  id: number;
  company: string;
  position: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface Hackathon {
  id: number;
  name: string;
  project: string;
  date: string;
  description: string;
  achievements: string[];
  technologies: string[];
  projectUrl?: string;
}