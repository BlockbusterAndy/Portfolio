import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit, Trash2, Save, X, Eye, EyeOff, Home, RefreshCw, AlertCircle, Loader, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';
import apiService from '../services/api';
import config from '../config/index.js';

const AdminPanel = () => {
  const navigate = useNavigate();
  
  const { 
    projects, 
    loading, 
    error, 
    addProject, 
    updateProject, 
    deleteProject, 
    exportProjects 
  } = useProjects(config.USE_API);
  
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [authError, setAuthError] = useState('');
  const [operationLoading, setOperationLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  // Simple password protection for non-API mode
  const ADMIN_PASSWORD = 'admin2025';

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    github: '',
    live: '',
    onGoing: false,
    technologies: []
  });

  const [techInput, setTechInput] = useState('');
  // Check authentication on component mount
  useEffect(() => {
    if (config.USE_API) {
      checkAuthStatus();
    }
  }, []);

  const checkAuthStatus = async () => {
    if (!config.USE_API) return;
    
    try {
      const isValid = await apiService.verifyToken();
      setIsAuthenticated(isValid);
    } catch (error) {
      console.error('Auth check failed:', error);
      setIsAuthenticated(false);
    }
  };

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setAuthError('');
      try {
      if (config.USE_API) {
        await apiService.login(password);
        setIsAuthenticated(true);
        showSuccess('Logged in successfully!');
      } else {
        // Fallback to simple password check
        if (password === ADMIN_PASSWORD) {
          setIsAuthenticated(true);
          showSuccess('Logged in successfully!');
        } else {
          setAuthError('Incorrect password!');
        }
      }
      setPassword('');
    } catch (error) {
      setAuthError(error.message || 'Login failed');
    } finally {
      setIsLoggingIn(false);
    }
  };
  const handleLogout = async () => {
    try {
      if (config.USE_API) {
        await apiService.logout();
      }
      setIsAuthenticated(false);
      setPassword('');
      showSuccess('Logged out successfully!');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleTechAdd = () => {
    if (techInput.trim() && !formData.technologies.includes(techInput.trim())) {
      setFormData(prev => ({
        ...prev,
        technologies: [...prev.technologies, techInput.trim()]
      }));
      setTechInput('');
    }
  };

  const handleTechRemove = (tech) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.filter(t => t !== tech)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setOperationLoading(true);
    
    try {
      if (editingIndex !== null) {
        // Edit existing project
        await updateProject(editingIndex, formData);
        showSuccess('Project updated successfully!');
      } else {
        // Add new project
        await addProject(formData);
        showSuccess('Project added successfully!');
      }
      resetForm();
    } catch (error) {
      setAuthError(error.message || 'Operation failed');
    } finally {
      setOperationLoading(false);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      github: '',
      live: '',
      onGoing: false,
      technologies: []
    });
    setIsEditing(false);
    setEditingIndex(null);
    setTechInput('');
  };

  const handleEdit = (index) => {
    setFormData({ ...projects[index] });
    setIsEditing(true);
    setEditingIndex(index);
  };

  const handleDelete = async (index) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setOperationLoading(true);
      try {
        await deleteProject(index);
        showSuccess('Project deleted successfully!');
      } catch (error) {
        setAuthError(error.message || 'Delete failed');
      } finally {
        setOperationLoading(false);
      }
    }
  };

  const handleExportData = async () => {
    try {
      const data = await exportProjects();
      const dataStr = JSON.stringify(data, null, 2);
      const dataBlob = new Blob([dataStr], { type: 'application/json' });
      const url = URL.createObjectURL(dataBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'projects.json';
      link.click();
      showSuccess('Projects exported successfully!');
    } catch (error) {
      setAuthError(error.message || 'Export failed');
    }
  };

  const handleRefresh = () => {
    window.location.reload();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md"
        >
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-white mb-2">Admin Access</h2>            <div className="flex items-center justify-center gap-2 text-sm">
              <div className={`w-2 h-2 rounded-full ${config.USE_API ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
              <span className="text-gray-400">
                {config.USE_API ? 'API Mode' : 'Local Mode'}
              </span>
            </div>
          </div>

          {authError && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 mb-4 flex items-center gap-2"
            >
              <AlertCircle size={16} className="text-red-400" />
              <span className="text-red-400 text-sm">{authError}</span>
            </motion.div>
          )}

          <div className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                onKeyPress={(e) => e.key === 'Enter' && !isLoggingIn && handleLogin()}
                disabled={isLoggingIn}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                disabled={isLoggingIn}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
            <button
              onClick={handleLogin}
              disabled={isLoggingIn}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              {isLoggingIn ? (
                <>
                  <Loader size={20} className="animate-spin" />
                  Logging in...
                </>
              ) : (
                'Login'
              )}
            </button>
            <button
              onClick={() => navigate('/')}
              className="w-full bg-gray-600 hover:bg-gray-700 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Back to Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-6">
      <div className="max-w-6xl mx-auto">
        {/* Success Message */}
        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-4 right-4 bg-green-500/10 border border-green-500/30 rounded-lg p-4 flex items-center gap-2 z-50"
            >
              <CheckCircle size={20} className="text-green-400" />
              <span className="text-green-400">{successMessage}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Message */}
        <AnimatePresence>
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              className="fixed top-4 right-4 bg-red-500/10 border border-red-500/30 rounded-lg p-4 flex items-center gap-2 z-50"
            >
              <AlertCircle size={20} className="text-red-400" />
              <span className="text-red-400">{error}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold">Portfolio Admin Panel</h1>            <div className="flex items-center gap-2 mt-2">
              <div className={`w-2 h-2 rounded-full ${config.USE_API ? 'bg-green-500' : 'bg-yellow-500'}`}></div>
              <span className="text-gray-400 text-sm">
                {config.USE_API ? 'Connected to API' : 'Local Storage Mode'}
              </span>
            </div>
          </div>
          <div className="flex gap-4">
            <button
              onClick={handleRefresh}
              className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <RefreshCw size={20} />
              Refresh
            </button>
            <button
              onClick={handleExportData}
              className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Export Data
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Home size={20} />
              View Portfolio
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Logout
            </button>
          </div>
        </motion.div>

        {loading ? (
          <div className="flex items-center justify-center min-h-96">
            <div className="flex items-center gap-3">
              <Loader size={24} className="animate-spin text-blue-400" />
              <span className="text-xl">Loading projects...</span>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <h2 className="text-xl font-semibold mb-4">
                {isEditing ? 'Edit Project' : 'Add New Project'}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    disabled={operationLoading}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={3}
                    disabled={operationLoading}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">GitHub URL</label>
                  <input
                    type="url"
                    name="github"
                    value={formData.github}
                    onChange={handleInputChange}
                    disabled={operationLoading}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Live Demo URL</label>
                  <input
                    type="url"
                    name="live"
                    value={formData.live}
                    onChange={handleInputChange}
                    disabled={operationLoading}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 disabled:opacity-50"
                  />
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="onGoing"
                    checked={formData.onGoing}
                    onChange={handleInputChange}
                    disabled={operationLoading}
                    className="mr-2"
                  />
                  <label className="text-sm font-medium">Project is ongoing</label>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Technologies</label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={techInput}
                      onChange={(e) => setTechInput(e.target.value)}
                      placeholder="Add technology"
                      disabled={operationLoading}
                      className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 disabled:opacity-50"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleTechAdd())}
                    />
                    <button
                      type="button"
                      onClick={handleTechAdd}
                      disabled={operationLoading}
                      className="bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 px-4 py-2 rounded-lg transition-colors"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-600 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                      >
                        {tech}
                        <button
                          type="button"
                          onClick={() => handleTechRemove(tech)}
                          disabled={operationLoading}
                          className="hover:text-red-300 disabled:opacity-50"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    disabled={operationLoading}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 py-2 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    {operationLoading ? (
                      <>
                        <Loader size={20} className="animate-spin" />
                        {isEditing ? 'Updating...' : 'Adding...'}
                      </>
                    ) : (
                      <>
                        <Save size={20} />
                        {isEditing ? 'Update' : 'Add'} Project
                      </>
                    )}
                  </button>
                  {isEditing && (
                    <button
                      type="button"
                      onClick={resetForm}
                      disabled={operationLoading}
                      className="bg-gray-600 hover:bg-gray-700 disabled:bg-gray-800 px-4 py-2 rounded-lg font-semibold transition-colors"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </motion.div>

            {/* Projects List */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-gray-800 p-6 rounded-xl"
            >
              <h2 className="text-xl font-semibold mb-4">Current Projects ({projects.length})</h2>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.id || index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-gray-700 p-4 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleEdit(index)}
                          disabled={operationLoading}
                          className="text-blue-400 hover:text-blue-300 disabled:opacity-50 p-1"
                        >
                          <Edit size={16} />
                        </button>
                        <button
                          onClick={() => handleDelete(index)}
                          disabled={operationLoading}
                          className="text-red-400 hover:text-red-300 disabled:opacity-50 p-1"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {project.technologies?.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-600 px-2 py-1 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-2 text-xs">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          GitHub
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-green-400 hover:underline"
                        >
                          Live Demo
                        </a>
                      )}
                      <span className={project.onGoing ? 'text-yellow-400' : 'text-green-400'}>
                        {project.onGoing ? 'Ongoing' : 'Completed'}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
