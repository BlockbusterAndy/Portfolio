import { useState, useEffect } from 'react';
import defaultTestimonials from '../data/testimonials.json';

export const useTestimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulating loading to keep consistency with the hook interface
    setTestimonials(defaultTestimonials);
    setLoading(false);
  }, []);

  return {
    testimonials,
    loading,
    error
  };
};
