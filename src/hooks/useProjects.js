import { useState, useEffect } from 'react';
import defaultProjects from '../data/projects.js';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = () => {
      setLoading(true);
      setError(null);
      
      try {
        // Use local storage or default projects
        const storedProjects = localStorage.getItem('portfolioProjects');
        if (storedProjects) {
          setProjects(JSON.parse(storedProjects));
        } else {
          setProjects(defaultProjects);
          localStorage.setItem('portfolioProjects', JSON.stringify(defaultProjects));
        }
      } catch (error) {
        console.error('Error loading projects:', error);
        setError('Failed to load projects');
        setProjects(defaultProjects);
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, []);

  const addProject = async (projectData) => {
    const newProject = { ...projectData, id: Date.now() };
    const newProjects = [...projects, newProject];
    setProjects(newProjects);
    localStorage.setItem('portfolioProjects', JSON.stringify(newProjects));
    return newProject;
  };

  const updateProject = async (index, projectData) => {
    const newProjects = projects.map((p, i) => i === index ? projectData : p);
    setProjects(newProjects);
    localStorage.setItem('portfolioProjects', JSON.stringify(newProjects));
    return projectData;
  };

  const deleteProject = async (index) => {
    const newProjects = projects.filter((_, i) => i !== index);
    setProjects(newProjects);
    localStorage.setItem('portfolioProjects', JSON.stringify(newProjects));
  };

  const exportProjects = async () => {
    return projects;
  };

  return { 
    projects, 
    loading, 
    error,
    setProjects, 
    addProject,
    updateProject,
    deleteProject,
    exportProjects
  };
};
