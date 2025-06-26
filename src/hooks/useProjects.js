import { useState, useEffect } from 'react';
import defaultProjects from '../data/projects.js';
import apiService from '../services/api.js';

export const useProjects = (useApi = false) => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadProjects = async () => {
      setLoading(true);
      setError(null);
      
      try {
        if (useApi) {
          // Try to load from API first
          const data = await apiService.getProjects();
          setProjects(data);
        } else {
          // Use local storage or default projects
          const storedProjects = localStorage.getItem('portfolioProjects');
          if (storedProjects) {
            setProjects(JSON.parse(storedProjects));
          } else {
            setProjects(defaultProjects);
          }
        }
      } catch (error) {
        console.error('Error loading projects:', error);
        setError(error.message);
        
        // Fallback to localStorage or default projects
        const storedProjects = localStorage.getItem('portfolioProjects');
        if (storedProjects) {
          setProjects(JSON.parse(storedProjects));
        } else {
          setProjects(defaultProjects);
        }
      } finally {
        setLoading(false);
      }
    };

    loadProjects();
  }, [useApi]);

  const addProject = async (projectData) => {
    if (useApi) {
      try {
        const newProject = await apiService.createProject(projectData);
        setProjects(prev => [...prev, newProject]);
        return newProject;
      } catch (error) {
        setError(error.message);
        throw error;
      }
    } else {
      const newProjects = [...projects, projectData];
      setProjects(newProjects);
      localStorage.setItem('portfolioProjects', JSON.stringify(newProjects));
      return projectData;
    }
  };

  const updateProject = async (index, projectData) => {
    if (useApi && projects[index]?.id) {
      try {
        const updatedProject = await apiService.updateProject(projects[index].id, projectData);
        setProjects(prev => prev.map((p, i) => i === index ? updatedProject : p));
        return updatedProject;
      } catch (error) {
        setError(error.message);
        throw error;
      }
    } else {
      const newProjects = projects.map((p, i) => i === index ? projectData : p);
      setProjects(newProjects);
      localStorage.setItem('portfolioProjects', JSON.stringify(newProjects));
      return projectData;
    }
  };

  const deleteProject = async (index) => {
    if (useApi && projects[index]?.id) {
      try {
        await apiService.deleteProject(projects[index].id);
        setProjects(prev => prev.filter((_, i) => i !== index));
      } catch (error) {
        setError(error.message);
        throw error;
      }
    } else {
      const newProjects = projects.filter((_, i) => i !== index);
      setProjects(newProjects);
      localStorage.setItem('portfolioProjects', JSON.stringify(newProjects));
    }
  };

  const exportProjects = async () => {
    if (useApi) {
      try {
        return await apiService.exportProjects();
      } catch (error) {
        setError(error.message);
        throw error;
      }
    } else {
      return projects;
    }
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
