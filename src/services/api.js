import config from '../config/index.js';

// API configuration
const API_BASE_URL = config.API_URL;

class ApiService {
  constructor() {
    this.baseURL = API_BASE_URL;
    this.token = localStorage.getItem('admin_token');
  }

  // Helper method to get headers
  getHeaders() {
    const headers = {
      'Content-Type': 'application/json',
    };
    
    if (this.token) {
      headers['Authorization'] = `Bearer ${this.token}`;
    }
    
    return headers;
  }

  // Helper method to handle responses
  async handleResponse(response) {
    if (!response.ok) {
      const error = await response.json().catch(() => ({ message: 'An error occurred' }));
      throw new Error(error.message || `HTTP ${response.status}`);
    }
    return response.json();
  }

  // Authentication
  async login(password) {
    try {
      const response = await fetch(`${this.baseURL}/auth/login`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify({ password }),
      });
      
      const data = await this.handleResponse(response);
      
      if (data.token) {
        this.token = data.token;
        localStorage.setItem('admin_token', data.token);
      }
      
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async logout() {
    try {
      await fetch(`${this.baseURL}/auth/logout`, {
        method: 'POST',
        headers: this.getHeaders(),
      });
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      this.token = null;
      localStorage.removeItem('admin_token');
    }
  }

  // Verify token
  async verifyToken() {
    try {
      const response = await fetch(`${this.baseURL}/auth/verify`, {
        headers: this.getHeaders(),
      });
      return response.ok;
    } catch (error) {
      console.error('Token verification error:', error);
      return false;
    }
  }

  // Projects CRUD operations
  async getProjects() {
    try {
      const response = await fetch(`${this.baseURL}/projects`, {
        headers: this.getHeaders(),
      });
      return this.handleResponse(response);
    } catch (error) {
      console.error('Get projects error:', error);
      throw error;
    }
  }

  async createProject(projectData) {
    try {
      const response = await fetch(`${this.baseURL}/projects`, {
        method: 'POST',
        headers: this.getHeaders(),
        body: JSON.stringify(projectData),
      });
      return this.handleResponse(response);
    } catch (error) {
      console.error('Create project error:', error);
      throw error;
    }
  }

  async updateProject(projectId, projectData) {
    try {
      const response = await fetch(`${this.baseURL}/projects/${projectId}`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify(projectData),
      });
      return this.handleResponse(response);
    } catch (error) {
      console.error('Update project error:', error);
      throw error;
    }
  }

  async deleteProject(projectId) {
    try {
      const response = await fetch(`${this.baseURL}/projects/${projectId}`, {
        method: 'DELETE',
        headers: this.getHeaders(),
      });
      return this.handleResponse(response);
    } catch (error) {
      console.error('Delete project error:', error);
      throw error;
    }
  }

  // Bulk operations
  async bulkUpdateProjects(projects) {
    try {
      const response = await fetch(`${this.baseURL}/projects/bulk`, {
        method: 'PUT',
        headers: this.getHeaders(),
        body: JSON.stringify({ projects }),
      });
      return this.handleResponse(response);
    } catch (error) {
      console.error('Bulk update error:', error);
      throw error;
    }
  }

  // Export projects
  async exportProjects() {
    try {
      const response = await fetch(`${this.baseURL}/projects/export`, {
        headers: this.getHeaders(),
      });
      return this.handleResponse(response);
    } catch (error) {
      console.error('Export projects error:', error);
      throw error;
    }
  }
}

// Create and export a singleton instance
const apiService = new ApiService();
export default apiService;
