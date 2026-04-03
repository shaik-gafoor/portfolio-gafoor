# Professional Portfolio - Shaik Gafoor

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Responsive Design**: Works perfectly on all devices
- **Dark/Light Mode**: Toggle between themes with smooth transitions
- **Modern UI**: Clean, professional design with smooth animations
- **Sections Include**:
  - Hero/About section with profile image and resume actions
  - Virtual Experience/Internships timeline
  - Interactive Skills showcase
  - Featured Projects with detailed view
  - Certifications gallery
  - Contact form with social links
  - Dedicated "All Projects" page with timeline view

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Build Tool**: Vite

## 📋 Prerequisites

- Node.js version 20.19+ or 22.12+
- npm or yarn

## 🚀 Getting Started

1. **Install dependencies**:

   ```bash
   npm install
   ```

2. **Start development server**:

   ```bash
   npm run dev
   ```

3. **Build for production**:

   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.jsx      # Navigation header with theme toggle
│   ├── Hero.jsx        # Hero/About section
│   ├── VirtualExperience.jsx
│   ├── Skills.jsx      # Interactive skills section
│   ├── Projects.jsx    # Featured projects
│   ├── GitHubStats.jsx # GitHub activity showcase(Present not included in website)
│   ├── Certificates.jsx
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx
├── contexts/
│   └── ThemeContext.jsx # Dark/Light mode context
├── config/
│   └── personalInfo.js  # Centralized personal data
├── pages/
│   ├── Home.jsx        # Main homepage
│   └── AllProjects.jsx # Detailed projects timeline
└── App.jsx             # Main app component
```

## 🎨 Customization

### Personal Information

Edit `src/config/personalInfo.js` to update:

- Personal details and bio
- Social media links
- Skills and technologies
- Projects and experience
- Certificates

### Styling

- Tailwind configuration: `tailwind.config.js`
- Custom styles: `src/index.css`
- Theme colors can be customized in the Tailwind config

### Assets

Place your files in the `public/assets/` directory:

- `profile.jpg` - Your profile image
- `gafoor_resume.pdf` - Your resume file

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌙 Dark Mode

The portfolio includes a sophisticated dark mode implementation:

- System preference detection
- Manual toggle in header
- Persistent theme storage
- Smooth transitions

## 🔗 Social Integration

Easy integration with:

- GitHub profile and repositories
- LinkedIn profile
- Twitter/X account
- LeetCode profile

## 📊 GitHub Stats

The GitHub Stats section currently shows dummy data. To integrate real data:

1. Use GitHub API to fetch your statistics
2. Consider using libraries like `github-readme-stats`
3. Update the `GitHubStats.jsx` component

## 🚀 Deployment

The portfolio can be deployed to:

- Vercel (recommended for React apps)
- Netlify
- GitHub Pages
- Any static hosting service

---

Built with ❤️ by Shaik Gafoor

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
