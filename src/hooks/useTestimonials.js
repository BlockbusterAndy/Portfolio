import { useState, useEffect } from 'react';
import defaultTestimonials from '../data/testimonials.json';

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadTestimonials = () => {
      setLoading(true);
      setError(null);
      
      try {
        // Use local storage or default testimonials
        const storedTestimonials = localStorage.getItem('portfolioTestimonials');
        if (storedTestimonials) {
          setTestimonials(JSON.parse(storedTestimonials));
        } else {
          setTestimonials(defaultTestimonials);
          localStorage.setItem('portfolioTestimonials', JSON.stringify(defaultTestimonials));
        }
      } catch (error) {
        console.error('Error loading testimonials:', error);
        setError('Failed to load testimonials');
        setTestimonials(defaultTestimonials);
      } finally {
        setLoading(false);
      }
    };

    loadTestimonials();
  }, []);

  const addTestimonial = async (testimonialData) => {
    const newTestimonial = { 
      ...testimonialData, 
      id: Date.now(),
      rating: parseInt(testimonialData.rating) || 5
    };
    const newTestimonials = [...testimonials, newTestimonial];
    setTestimonials(newTestimonials);
    localStorage.setItem('portfolioTestimonials', JSON.stringify(newTestimonials));
    return newTestimonial;
  };

  const updateTestimonial = async (index, testimonialData) => {
    const updatedTestimonial = {
      ...testimonialData,
      rating: parseInt(testimonialData.rating) || 5
    };
    const newTestimonials = testimonials.map((t, i) => i === index ? updatedTestimonial : t);
    setTestimonials(newTestimonials);
    localStorage.setItem('portfolioTestimonials', JSON.stringify(newTestimonials));
    return updatedTestimonial;
  };

  const deleteTestimonial = async (index) => {
    const newTestimonials = testimonials.filter((_, i) => i !== index);
    setTestimonials(newTestimonials);
    localStorage.setItem('portfolioTestimonials', JSON.stringify(newTestimonials));
  };

  const exportTestimonials = async () => {
    return testimonials;
  };

  return { 
    testimonials, 
    loading, 
    error,
    setTestimonials, 
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    exportTestimonials
  };
};
