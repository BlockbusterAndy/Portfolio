import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Edit, Trash2, Save, X, Eye, EyeOff, Home, RefreshCw, AlertCircle, Loader, CheckCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProjects } from '../hooks/useProjects';

const AdminPanel = () => {
  const navigate = useNavigate();
  
  const { 
    projects, 
    loading, 
    addProject, 
    updateProject, 
    deleteProject, 
    exportProjects 
  } = useProjects();
  
  const [isEditing, setIsEditing] = useState(false);
  const [editingIndex, setEditingIndex] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [authError, setAuthError] = useState('');
  const [operationLoading, setOperationLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  
  // Simple password protection
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

  const handleLogin = async () => {
    setIsLoggingIn(true);
    setAuthError('');
    
    try {
      // Simple password check
      if (password === ADMIN_PASSWORD) {
        setIsAuthenticated(true);
        showSuccess('Logged in successfully!');
      } else {
        setAuthError('Incorrect password!');
      }
      setPassword('');
    } catch (error) {
      setAuthError(error.message || 'Login failed');
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = async () => {
    setIsAuthenticated(false);
    setPassword('');
    showSuccess('Logged out successfully!');
  };

  const showSuccess = (message) => {
    setSuccessMessage(message);
    setTimeout(() => setSuccessMessage(''), 3000);
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
    setTechInput('');
    setIsEditing(false);
    setEditingIndex(null);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const addTechnology = () => {
    if (techInput.trim() && !formData.technologies.includes(techInput.trim())) {
      setFormData(prev => ({
        ...prev,
        technologies: [...prev.technologies, techInput.trim()]
      }));
      setTechInput('');
    }
  };

  const removeTechnology = (tech) => {
    setFormData(prev => ({
      ...prev,
      technologies: prev.technologies.filter(t => t !== tech)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.description.trim()) {
      setAuthError('Title and description are required!');
      return;
    }

    setOperationLoading(true);
    try {
      if (isEditing) {
        await updateProject(editingIndex, formData);
        showSuccess('Project updated successfully!');
      } else {
        await addProject(formData);
        showSuccess('Project added successfully!');
      }
      resetForm();
      setAuthError('');
    } catch (error) {
      setAuthError(error.message || 'Operation failed');
    } finally {
      setOperationLoading(false);
    }
  };

  const handleEdit = (index) => {
    const project = projects[index];
    setFormData(project);
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
          className="bg-gray-800 p-8 rounded-xl shadow-2xl w-full max-w-md border border-gray-700"
        >
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold text-white mb-2">Admin Login</h1>
            <p className="text-gray-400">Enter password to access admin panel</p>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); handleLogin(); }} className="space-y-4">
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 pr-12"
                disabled={isLoggingIn}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {authError && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-sm text-center bg-red-900/20 p-2 rounded"
              >
                {authError}
              </motion.div>
            )}

            <button
              type="submit"
              disabled={isLoggingIn || !password.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
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
          </form>

          <div className="mt-6 text-center">
            <button
              onClick={() => navigate('/')}
              className="text-gray-400 hover:text-white text-sm flex items-center justify-center gap-2 mx-auto"
            >
              <Home size={16} />
              Back to Portfolio
            </button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">Portfolio Admin Panel</h1>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-gray-400 text-sm">Local Storage Mode</span>
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
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              <Home size={20} />
              View Site
            </button>
            <button
              onClick={handleLogout}
              className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg font-semibold transition-colors"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Success Message */}
        <AnimatePresence>
          {successMessage && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-green-900/20 border border-green-500 text-green-400 p-4 rounded-lg mb-6 flex items-center gap-2"
            >
              <CheckCircle size={20} />
              {successMessage}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Error Message */}
        {authError && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-red-900/20 border border-red-500 text-red-400 p-4 rounded-lg mb-6 flex items-center gap-2"
          >
            <AlertCircle size={20} />
            {authError}
          </motion.div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-8">
            <Loader size={40} className="animate-spin mx-auto mb-4" />
            <p className="text-gray-400">Loading projects...</p>
          </div>
        )}

        {/* Main Content */}
        {!loading && (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Form Section */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Plus size={24} />
                {isEditing ? 'Edit Project' : 'Add New Project'}
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Project Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    placeholder="Enter project title"
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description *</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    placeholder="Enter project description"
                    rows="4"
                    className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">GitHub URL</label>
                    <input
                      type="url"
                      name="github"
                      value={formData.github}
                      onChange={handleInputChange}
                      placeholder="https://github.com/..."
                      className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Live Demo URL</label>
                    <input
                      type="url"
                      name="live"
                      value={formData.live}
                      onChange={handleInputChange}
                      placeholder="https://example.com"
                      className="w-full bg-gray-700 text-white px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Technologies</label>
                  <div className="flex gap-2 mb-2">
                    <input
                      type="text"
                      value={techInput}
                      onChange={(e) => setTechInput(e.target.value)}
                      placeholder="Enter technology name"
                      className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTechnology())}
                    />
                    <button
                      type="button"
                      onClick={addTechnology}
                      className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"
                    >
                      Add
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {formData.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm flex items-center gap-2"
                      >
                        {tech}
                        <button
                          type="button"
                          onClick={() => removeTechnology(tech)}
                          className="hover:text-red-300"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="onGoing"
                    name="onGoing"
                    checked={formData.onGoing}
                    onChange={handleInputChange}
                    className="w-4 h-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500"
                  />
                  <label htmlFor="onGoing" className="text-sm">
                    This project is ongoing
                  </label>
                </div>

                <div className="flex gap-4 pt-4">
                  <button
                    type="submit"
                    disabled={operationLoading}
                    className="flex-1 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-600 text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
                  >
                    {operationLoading ? (
                      <>
                        <Loader size={20} className="animate-spin" />
                        {isEditing ? 'Updating...' : 'Adding...'}
                      </>
                    ) : (
                      <>
                        <Save size={20} />
                        {isEditing ? 'Update Project' : 'Add Project'}
                      </>
                    )}
                  </button>

                  {isEditing && (
                    <button
                      type="button"
                      onClick={resetForm}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
                    >
                      <X size={20} />
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Projects List */}
            <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
              <h2 className="text-xl font-semibold mb-6">Projects ({projects.length})</h2>
              
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {projects.length === 0 ? (
                  <p className="text-gray-400 text-center py-8">No projects yet. Add your first project!</p>
                ) : (
                  projects.map((project, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-gray-700 p-4 rounded-lg border border-gray-600"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-semibold text-lg">{project.title}</h3>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEdit(index)}
                            className="text-blue-400 hover:text-blue-300 p-1"
                          >
                            <Edit size={16} />
                          </button>
                          <button
                            onClick={() => handleDelete(index)}
                            className="text-red-400 hover:text-red-300 p-1"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      
                      {project.technologies && project.technologies.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-2">
                          {project.technologies.slice(0, 3).map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="bg-blue-600 text-white px-2 py-1 rounded text-xs"
                            >
                              {tech}
                            </span>
                          ))}
                          {project.technologies.length > 3 && (
                            <span className="text-gray-400 text-xs px-2 py-1">
                              +{project.technologies.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                      
                      <div className="flex justify-between items-center text-xs text-gray-400">
                        <span className={`px-2 py-1 rounded ${
                          project.onGoing ? 'bg-yellow-600 text-yellow-100' : 'bg-green-600 text-green-100'
                        }`}>
                          {project.onGoing ? 'Ongoing' : 'Completed'}
                        </span>
                        
                        <div className="flex gap-2">
                          {project.github && (
                            <a
                              href={project.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:text-blue-300"
                            >
                              GitHub
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-green-400 hover:text-green-300"
                            >
                              Live Demo
                            </a>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPanel;
