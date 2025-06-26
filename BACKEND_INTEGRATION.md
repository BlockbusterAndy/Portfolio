# Backend Integration Guide

This portfolio admin panel is ready for backend integration. Here's everything you need to know:

## 🏗️ Architecture Overview

The admin panel supports two modes:
- **Local Mode**: Uses localStorage for data persistence (current default)
- **API Mode**: Connects to your backend API (ready for integration)

## 🔧 Configuration

### Environment Variables
Create a `.env` file in your project root:

```env
# API Configuration
VITE_API_URL=http://localhost:3001/api
VITE_USE_API=false

# Set to true when backend is ready
# VITE_USE_API=true
```

### Config File
Located at `src/config/index.js`:

```javascript
export const config = {
  API_URL: import.meta.env.VITE_API_URL || 'http://localhost:3001/api',
  USE_API: import.meta.env.VITE_USE_API === 'true',
  IS_DEVELOPMENT: import.meta.env.DEV,
  IS_PRODUCTION: import.meta.env.PROD
};
```

## 🚀 API Endpoints Required

Your backend should implement these endpoints:

### Authentication
```
POST /api/auth/login
Body: { password: string }
Response: { token: string, user?: object }

POST /api/auth/logout
Headers: { Authorization: "Bearer <token>" }
Response: { success: boolean }

GET /api/auth/verify
Headers: { Authorization: "Bearer <token>" }
Response: { valid: boolean }
```

### Projects CRUD
```
GET /api/projects
Headers: { Authorization: "Bearer <token>" }
Response: [{ id, title, description, github, live, onGoing, technologies }]

POST /api/projects
Headers: { Authorization: "Bearer <token>" }
Body: { title, description, github, live, onGoing, technologies }
Response: { id, title, description, github, live, onGoing, technologies }

PUT /api/projects/:id
Headers: { Authorization: "Bearer <token>" }
Body: { title, description, github, live, onGoing, technologies }
Response: { id, title, description, github, live, onGoing, technologies }

DELETE /api/projects/:id
Headers: { Authorization: "Bearer <token>" }
Response: { success: boolean }

GET /api/projects/export
Headers: { Authorization: "Bearer <token>" }
Response: [{ projects }]
```

## 📦 Data Schema

### Project Object
```javascript
{
  id?: string | number,        // Optional for new projects
  title: string,               // Required
  description: string,         // Required
  github?: string,             // Optional URL
  live?: string,               // Optional URL
  onGoing: boolean,            // Project status
  technologies: string[]       // Array of technology names
}
```

### Authentication Response
```javascript
{
  token: string,               // JWT or session token
  user?: {                     // Optional user info
    id: string,
    username: string,
    role: string
  }
}
```

## 🔄 Switching to API Mode

1. **Set up your backend** with the required endpoints
2. **Update environment variables**:
   ```env
   VITE_USE_API=true
   VITE_API_URL=https://your-api-domain.com/api
   ```
3. **Restart your development server**
4. **Test the admin panel** at `/admin`

## 🛠️ API Service Implementation

The `src/services/api.js` file handles all API communication:

```javascript
// Example usage in your components
import apiService from '../services/api';

// Login
const response = await apiService.login(password);

// Get projects
const projects = await apiService.getProjects();

// Create project
const newProject = await apiService.createProject(projectData);

// Update project
const updatedProject = await apiService.updateProject(id, projectData);

// Delete project
await apiService.deleteProject(id);
```

## 🎯 Custom Hook Usage

The `useProjects` hook automatically handles API vs localStorage mode:

```javascript
import { useProjects } from '../hooks/useProjects';
import config from '../config/index.js';

const MyComponent = () => {
  const { 
    projects, 
    loading, 
    error,
    addProject,
    updateProject,
    deleteProject,
    exportProjects
  } = useProjects(config.USE_API);

  // Your component logic
};
```

## 🔐 Security Considerations

### Frontend Security
- JWT tokens are stored in localStorage
- All API calls include Authorization headers
- Token validation on app startup
- Automatic logout on token expiry

### Backend Security Requirements
- Implement proper password hashing
- Use secure JWT tokens with expiry
- Validate all input data
- Implement rate limiting
- Use HTTPS in production
- CORS configuration for your frontend domain

## 🚧 Error Handling

The admin panel handles these error scenarios:
- Network connectivity issues
- API server downtime
- Invalid authentication
- Validation errors
- Rate limiting

Errors are displayed to the user with appropriate messages and fallback to localStorage when possible.

## 📱 Testing

### Local Mode Testing
1. Access `/admin`
2. Login with password: `admin2025`
3. Add/edit/delete projects
4. Verify data persists in localStorage

### API Mode Testing
1. Set `VITE_USE_API=true`
2. Ensure your API server is running
3. Test all CRUD operations
4. Verify authentication flow
5. Test error scenarios (server down, invalid token, etc.)

## 🔄 Migration from Local to API

When switching from local to API mode:
1. Export existing projects using the "Export Data" button
2. Import this data into your backend database
3. Switch to API mode
4. Verify all projects are loaded correctly

## 📊 Monitoring

The admin panel includes:
- Connection status indicators
- Loading states for all operations
- Success/error notifications
- Operation progress feedback

## 🎨 Customization

### Changing the Admin Password
Edit `src/components/AdminPanel.jsx`:
```javascript
const ADMIN_PASSWORD = 'your-new-password';
```

### Styling
The admin panel uses Tailwind CSS and can be customized by modifying the component classes.

### Adding New Fields
1. Update the project schema in your backend
2. Add new fields to the form in AdminPanel.jsx
3. Update the API service methods
4. Modify the useProjects hook if needed

## 🐛 Troubleshooting

### Common Issues
1. **CORS errors**: Configure your backend to allow requests from your frontend domain
2. **Authentication failures**: Check token format and expiry
3. **Network errors**: Verify API URL and server status
4. **Data not syncing**: Check API responses and error logs

### Debug Mode
Enable additional logging by setting:
```env
VITE_DEBUG=true
```

## 🚀 Production Deployment

Before deploying:
1. Set production API URL
2. Enable API mode
3. Configure proper CORS settings
4. Set up HTTPS
5. Test all functionality
6. Set up monitoring and logging

Your admin panel is now fully prepared for backend integration! 🎉
