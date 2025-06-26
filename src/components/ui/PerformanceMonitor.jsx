import { useEffect } from 'react';

const PerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Web Vitals
    const measurePerformance = () => {
      if ('performance' in window) {
        // Core Web Vitals measurement
        setTimeout(() => {
          const navigationTiming = performance.getEntriesByType('navigation')[0];
          const paintTiming = performance.getEntriesByType('paint');
          
          if (navigationTiming) {
            const loadTime = navigationTiming.loadEventEnd - navigationTiming.navigationStart;
            const ttfb = navigationTiming.responseStart - navigationTiming.requestStart;
            
            console.log('Performance Metrics:', {
              loadTime: `${loadTime}ms`,
              ttfb: `${ttfb}ms`,
              domContentLoaded: `${navigationTiming.domContentLoadedEventEnd - navigationTiming.navigationStart}ms`
            });
          }
          
          if (paintTiming.length > 0) {
            const fcp = paintTiming.find(entry => entry.name === 'first-contentful-paint');
            if (fcp) {
              console.log('First Contentful Paint:', `${fcp.startTime}ms`);
            }
          }
        }, 100);
      }
    };

    // Measure when the page is fully loaded
    if (document.readyState === 'complete') {
      measurePerformance();
    } else {
      window.addEventListener('load', measurePerformance);
      return () => window.removeEventListener('load', measurePerformance);
    }
  }, []);

  return null; // This component doesn't render anything
};

export default PerformanceMonitor;
