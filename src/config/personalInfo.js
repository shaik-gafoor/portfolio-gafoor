// Personal Information Configuration
export const personalInfo = {
  name: "Shaik Gafoor",
  title: "Software Developer & Tester",
  bio: "Passionate software developer and testing professional with expertise in modern web technologies and quality assurance practices.",
  email: "contact@shaikgafoor.dev", // Update with your actual email
  phone: "+91-XXXXXXXXXX", // Update with your actual phone
  location: "India", // Update with your location

  // Social Links
  social: {
    github: "https://github.com/shaik-gafoor",
    linkedin: "https://www.linkedin.com/in/shaikgafoor/",
    twitter: "https://x.com/ShaikGafoor111",
    leetcode: "https://leetcode.com/u/shaik_gafoor/",
  },

  // Resume
  resume: {
    filename: "gafoor_resume.pdf",
    path: "/assets/gafoor_resume.pdf",
  },

  // Profile Image
  profileImage: "/assets/profile.jpg",
};

// Skills Configuration
export const skills = {
  frontend: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Vue.js",
    "Angular",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "Python",
    "Django",
    "Flask",
    "REST APIs",
    "GraphQL",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
  ],
  testing: [
    "Selenium",
    "Jest",
    "Cypress",
    "Playwright",
    "Unit Testing",
    "Integration Testing",
    "API Testing",
    "Performance Testing",
  ],
  tools: [
    "Git",
    "Docker",
    "AWS",
    "Jenkins",
    "JIRA",
    "Postman",
    "VS Code",
    "Linux",
    "Agile Methodology",
  ],
};

// Virtual Experience / Internships (Dummy data)
export const virtualExperience = [
  {
    id: 1,
    company: "TechCorp Solutions",
    role: "Frontend Developer Intern",
    duration: "Jun 2024 - Aug 2024",
    type: "Virtual Internship",
    description:
      "Developed responsive web applications using React.js and implemented modern UI/UX practices.",
    technologies: ["React.js", "Tailwind CSS", "JavaScript", "Git"],
    achievements: [
      "Built 3 responsive web applications",
      "Improved page load time by 40%",
      "Collaborated with cross-functional team of 8 members",
    ],
  },
  {
    id: 2,
    company: "QualityFirst Labs",
    role: "QA Testing Intern",
    duration: "Mar 2024 - May 2024",
    type: "Virtual Internship",
    description:
      "Performed comprehensive testing of web applications and mobile apps using automated testing tools.",
    technologies: ["Selenium", "Cypress", "Java", "TestNG"],
    achievements: [
      "Created 50+ automated test cases",
      "Identified and reported 25+ bugs",
      "Reduced testing time by 60% through automation",
    ],
  },
];

// Projects (Dummy data - you can update these later)
export const projects = [
  {
    id: 1,
    title: "E-Commerce Web Application",
    description:
      "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    technologies: ["React.js", "Node.js", "MongoDB", "Stripe API"],
    githubUrl: "https://github.com/shaik-gafoor/ecommerce-app",
    liveUrl: "https://ecommerce-demo.netlify.app",
    imageUrl: "/assets/project1.jpg",
    category: "Full Stack",
    status: "Completed",
    startDate: "2024-01-15",
    endDate: "2024-03-20",
    features: [
      "User authentication and authorization",
      "Product catalog with search and filters",
      "Shopping cart and checkout process",
      "Payment integration with Stripe",
      "Admin dashboard for product management",
    ],
  },
  {
    id: 2,
    title: "Automated Testing Framework",
    description:
      "A comprehensive testing framework for web applications with support for multiple browsers and parallel execution.",
    technologies: ["Selenium", "Java", "TestNG", "Maven"],
    githubUrl: "https://github.com/shaik-gafoor/testing-framework",
    liveUrl: null,
    imageUrl: "/assets/project2.jpg",
    category: "Testing",
    status: "Completed",
    startDate: "2024-02-01",
    endDate: "2024-04-15",
    features: [
      "Cross-browser testing support",
      "Parallel test execution",
      "Detailed test reporting",
      "Page Object Model implementation",
      "CI/CD integration ready",
    ],
  },
  {
    id: 3,
    title: "Task Management App",
    description:
      "A modern task management application with real-time updates and team collaboration features.",
    technologies: ["React.js", "Firebase", "Tailwind CSS", "React Query"],
    githubUrl: "https://github.com/shaik-gafoor/task-manager",
    liveUrl: "https://task-manager-demo.vercel.app",
    imageUrl: "/assets/project3.jpg",
    category: "Frontend",
    status: "In Progress",
    startDate: "2024-04-01",
    endDate: null,
    features: [
      "Real-time task updates",
      "Team collaboration tools",
      "Drag and drop interface",
      "Task priority and deadline management",
      "Progress tracking and analytics",
    ],
  },
];

// Certificates (Dummy data)
export const certificates = [
  {
    id: 1,
    title: "React Developer Certification",
    issuer: "Meta",
    date: "2024-05-15",
    url: "https://coursera.org/certificate/react-dev",
    imageUrl: "/assets/cert1.jpg",
  },
  {
    id: 2,
    title: "Selenium WebDriver with Java",
    issuer: "Udemy",
    date: "2024-04-20",
    url: "https://udemy.com/certificate/selenium-java",
    imageUrl: "/assets/cert2.jpg",
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2024-03-10",
    url: "https://aws.amazon.com/certification/cloud-practitioner",
    imageUrl: "/assets/cert3.jpg",
  },
];
