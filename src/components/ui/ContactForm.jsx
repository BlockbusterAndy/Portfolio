import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import PropTypes from 'prop-types';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate form submission
    setTimeout(() => {
      if (formData.name && formData.email && formData.message) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus('idle'), 3000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 3000);
      }
    }, 1000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full max-w-md mx-auto md:mx-0"
    >
      <h3 className="text-xl font-semibold text-primaryText mb-4">Send a Message</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-primaryText/5 border border-primaryText/20 rounded-lg text-primaryText placeholder-secondaryText focus:outline-none focus:border-blue-400 transition-colors"
            required
          />
        </div>
        
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-primaryText/5 border border-primaryText/20 rounded-lg text-primaryText placeholder-secondaryText focus:outline-none focus:border-blue-400 transition-colors"
            required
          />
        </div>
        
        <div>
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-primaryText/5 border border-primaryText/20 rounded-lg text-primaryText placeholder-secondaryText focus:outline-none focus:border-blue-400 transition-colors resize-none"
            required
          />
        </div>
        
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={{ scale: status === 'loading' ? 1 : 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
            status === 'loading' 
              ? 'bg-secondaryText/20 text-secondaryText cursor-not-allowed' 
              : status === 'success'
              ? 'bg-green-500 text-white'
              : status === 'error'
              ? 'bg-red-500 text-white'
              : 'bg-blue-500 text-white hover:bg-blue-600'
          }`}
        >
          {status === 'loading' && (
            <div className="w-4 h-4 border-2 border-secondaryText border-t-transparent rounded-full animate-spin" />
          )}
          {status === 'success' && <CheckCircle size={20} />}
          {status === 'error' && <AlertCircle size={20} />}
          {status === 'idle' && <Send size={20} />}
          
          <span>
            {status === 'loading' && 'Sending...'}
            {status === 'success' && 'Message Sent!'}
            {status === 'error' && 'Please fill all fields'}
            {status === 'idle' && 'Send Message'}
          </span>
        </motion.button>
      </form>
    </motion.div>
  );
};

ContactForm.propTypes = {};

export default ContactForm;
