import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PropTypes from 'prop-types';

// Local hooks for device detection since utils might not exist yet
const useDeviceDetection = () => {
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

const useZoomAdjustment = () => {
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const detectZoom = () => {
      const ratio = window.devicePixelRatio || 1;
      const zoom = Math.round((ratio + Number.EPSILON) * 100) / 100;
      setZoomLevel(zoom);
    };

    detectZoom();
    window.addEventListener('resize', detectZoom);
    
    return () => window.removeEventListener('resize', detectZoom);
  }, []);

  return { zoomLevel, isHighZoom: zoomLevel >= 1.25 };
};

const DevTools = ({ isVisible = false }) => {
  const deviceInfo = useDeviceDetection();
  const { zoomLevel, isHighZoom } = useZoomAdjustment();
  const [performanceMetrics, setPerformanceMetrics] = useState({});

  useEffect(() => {
    if (isVisible) {
      const measurePerformance = () => {
        if ('performance' in window) {
          const navigation = performance.getEntriesByType('navigation')[0];
          const paint = performance.getEntriesByType('paint');
          
          setPerformanceMetrics({
            loadTime: navigation ? Math.round(navigation.loadEventEnd - navigation.navigationStart) : 0,
            domReady: navigation ? Math.round(navigation.domContentLoadedEventEnd - navigation.navigationStart) : 0,
            fcp: paint.find(p => p.name === 'first-contentful-paint')?.startTime || 0,
          });
        }
      };

      measurePerformance();
    }
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 300 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 300 }}
        className="fixed top-4 right-4 z-50 bg-black/90 text-white p-4 rounded-lg text-xs max-w-xs"
        style={{ fontFamily: 'monospace' }}
      >
        <h3 className="font-bold mb-2 text-green-400">🔧 Dev Tools</h3>
        
        <div className="space-y-2">
          <div>
            <strong className="text-blue-400">Device:</strong>
            <div className="ml-2">
              Screen: {deviceInfo.screenWidth}px
              <br />
              Type: {deviceInfo.isMobile ? 'Mobile' : deviceInfo.isTablet ? 'Tablet' : 'Desktop'}
              <br />
              Touch: {deviceInfo.isTouch ? 'Yes' : 'No'}
              <br />
              Orientation: {deviceInfo.orientation}
            </div>
          </div>

          <div>
            <strong className="text-yellow-400">Zoom:</strong>
            <div className="ml-2">
              Level: {Math.round(zoomLevel * 100)}%
              <br />
              High Zoom: {isHighZoom ? '⚠️ Yes' : '✅ No'}
            </div>
          </div>

          <div>
            <strong className="text-purple-400">Performance:</strong>
            <div className="ml-2">
              Load: {performanceMetrics.loadTime}ms
              <br />
              DOM: {performanceMetrics.domReady}ms
              <br />
              FCP: {Math.round(performanceMetrics.fcp)}ms
            </div>
          </div>

          <div>
            <strong className="text-green-400">Theme:</strong>
            <div className="ml-2">
              Mode: {document.documentElement.classList.contains('dark') ? 'Dark' : 'Light'}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

DevTools.propTypes = {
  isVisible: PropTypes.bool,
};

export default DevTools;
