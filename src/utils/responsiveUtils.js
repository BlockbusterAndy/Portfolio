import { useState, useEffect } from 'react';

export const useDeviceDetection = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: false,
    screenWidth: 0,
    isTouch: false,
    orientation: 'portrait'
  });

  useEffect(() => {
    const updateDeviceInfo = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      setDeviceInfo({
        isMobile: width < 768,
        isTablet: width >= 768 && width < 1024,
        isDesktop: width >= 1024,
        screenWidth: width,
        isTouch: 'ontouchstart' in window || navigator.maxTouchPoints > 0,
        orientation: width > height ? 'landscape' : 'portrait'
      });
    };

    updateDeviceInfo();
    window.addEventListener('resize', updateDeviceInfo);
    window.addEventListener('orientationchange', updateDeviceInfo);

    return () => {
      window.removeEventListener('resize', updateDeviceInfo);
      window.removeEventListener('orientationchange', updateDeviceInfo);
    };
  }, []);

  return deviceInfo;
};

export const useResponsiveScale = (baseSize = 16) => {
  const { screenWidth } = useDeviceDetection();
  
  const getScaledSize = () => {
    if (screenWidth < 480) return baseSize * 0.85; // Small mobile
    if (screenWidth < 768) return baseSize * 0.9;  // Mobile
    if (screenWidth < 1024) return baseSize * 0.95; // Tablet
    return baseSize; // Desktop
  };

  return getScaledSize();
};

// Hook for handling 125% zoom specifically
export const useZoomAdjustment = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const detectZoom = () => {
      const ratio = window.devicePixelRatio || 1;
      const zoom = Math.round((ratio + Number.EPSILON) * 100) / 100;
      setZoomLevel(zoom);
      
      // Add a CSS class for high zoom levels
      if (zoom >= 1.25) {
        document.body.classList.add('high-zoom');
      } else {
        document.body.classList.remove('high-zoom');
      }
    };

    detectZoom();
    window.addEventListener('resize', detectZoom);
    
    return () => window.removeEventListener('resize', detectZoom);
  }, []);

  return { zoomLevel, isHighZoom: zoomLevel >= 1.25 };
};
