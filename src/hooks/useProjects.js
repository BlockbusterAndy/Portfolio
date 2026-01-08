import { useState, useEffect } from 'react';
import defaultProjects from '../data/projects.js';

export const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating loading to keep consistency with the hook's interface
    setProjects(defaultProjects);
    setLoading(false);
  }, []);

  return {
    projects,
    loading,
    error
  };
};
