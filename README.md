# Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS. This portfolio showcases projects, skills, and includes an admin panel for project management.

## Features

- ✨ Modern, responsive design
- 🎨 Smooth animations with Framer Motion
- 🚀 Fast performance with Vite
- 📱 Mobile-first responsive design
- 🎯 SEO optimized
- 🔧 Admin panel for project management
- 📊 Project showcase with filtering
- 💬 Static testimonials section
- 🎭 Interactive UI components

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM
- **Storage:** Local Storage (for admin projects)

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/BlockbusterAndy/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Admin Panel

Access the admin panel at `/admin` to manage projects:

- **Default Password:** `admin2025`
- **Features:**
  - Add/Edit/Delete projects
  - Technology management
  - Export projects data
  - Local storage persistence

## Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # Reusable UI components
│   ├── AboutSection.jsx
│   ├── AdminPanel.jsx   # Project management
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Marquee.jsx
│   ├── Navbar.jsx
│   ├── ProjectsSection.jsx
│   └── TestimonialsSection.jsx
├── data/                # Static data files
│   ├── projects.js      # Default projects
│   └── testimonials.json
├── hooks/               # Custom React hooks
│   └── useProjects.js   # Project management hook
└── utils/               # Utility functions
```

## Recent Changes

### Backend Dependencies Removed
- Removed all API service integrations
- Eliminated backend configuration files
- Simplified project management to use local storage only
- Removed testimonial management system
- Streamlined admin panel for local-only operation

### What was removed:
- `src/services/api.js` - API service layer
- `src/config/index.js` - API configuration
- `src/components/TestimonialForm.jsx` - Dynamic testimonial submission
- `src/components/TestimonialManager.jsx` - Testimonial management
- `src/utils/testimonialManager.js` - Testimonial utilities
- `BACKEND_INTEGRATION.md` - Backend integration docs
- `TESTIMONIALS_IMPLEMENTATION.md` - Testimonial system docs
- `ADMIN_PANEL_COMPLETE.md` - Admin panel documentation

### Current State:
- ✅ Fully frontend-only application
- ✅ No backend dependencies
- ✅ Local storage for project persistence
- ✅ Static testimonials from JSON file
- ✅ Simplified admin panel
- ✅ Ready for deployment to any static hosting service

## Deployment

This is now a purely static React application that can be deployed to:

- **Vercel:** Connect your GitHub repo for automatic deployments
- **Netlify:** Drag and drop the `dist` folder after `npm run build`
- **GitHub Pages:** Use GitHub Actions for automated deployment
- **Any static hosting service**

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Portfolio:** [aniketjadhav.dev](https://aniketjadhav.dev)
- **GitHub:** [@BlockbusterAndy](https://github.com/BlockbusterAndy)
- **Email:** Contact through the portfolio website
