// Configuration for API integration
export const config = {
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  USE_API: import.meta.env.VITE_USE_API === 'true',
  IS_DEVELOPMENT: import.meta.env.DEV,
  IS_PRODUCTION: import.meta.env.PROD
};

export default config;
