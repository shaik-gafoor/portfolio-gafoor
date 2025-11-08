// Personal Information Configuration
export const personalInfo = {
  name: "Shaik Gafoor",
  title: "Full Stack Developer",
  bio: "I’m a passionate Full Stack Developer with a strong focus on building innovative, efficient, and user-friendly web applications. I take pride in crafting seamless digital experiences and continuously improving my skills to deliver impactful solutions.",
  email: "gafoor7898@gmail.com", // Update with your actual email
  phone: "+91-7386946555", // Update with your actual phone
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
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "Bootstrap",
    "Redux",
  ],
  backend: [
    "Node.js",
    "Express.js",
    "REST APIs",
    "MongoDB",
    "PostgreSQL",
    "MySQL",
  ],
  // testing: [
  //   "Selenium",
  //   "Jest",
  //   "Cypress",
  //   "Playwright",
  //   "Unit Testing",
  //   "Integration Testing",
  //   "API Testing",
  //   "Performance Testing",
  // ],
  tools: [
    "Git",
    // "Docker",
    // "AWS",
    "IntelliJ IDEA",
    "HTTPie",
    "Postman",
    "VS Code",
    "Linux",
    // "Agile Methodology",
  ],
};

// Virtual Experience / Internships (Dummy data)
export const virtualExperience = [
  {
    id: 1,
    company: "SmartInternZ",
    role: "FullStackDeveloper Intern",
    duration: "May 2025 - July 2025",
    type: "Virtual Internship",
    description:
      "Developed responsive web applications using MERN stack and worked with real-world projects.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "JavaScript",
      "Git",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
    achievements: [
      "Built some responsive web applications",
      "Improved page load time by 40%",
      "Collaborated with cross-functional team of 8 members",
    ],
  },
  // {
  //   id: 2,
  //   company: "QualityFirst Labs",
  //   role: "QA Testing Intern",
  //   duration: "Mar 2024 - May 2024",
  //   type: "Virtual Internship",
  //   description:
  //     "Performed comprehensive testing of web applications and mobile apps using automated testing tools.",
  //   technologies: ["Selenium", "Cypress", "Java", "TestNG"],
  //   achievements: [
  //     "Created 50+ automated test cases",
  //     "Identified and reported 25+ bugs",
  //     "Reduced testing time by 60% through automation",
  //   ],
  // },
];

// Projects (Dummy data - you can update these later)
export const projects = [
  {
    id: 1,
    title: "FoodSpot – Online Food Ordering Website",
    description:
      "A full-stack food ordering platform that allows users to browse food items, explore menus, place online food orders, and manage their cart with a seamless and responsive user interface.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
    ],
    githubUrl: "https://github.com/shaik-gafoor/foodspot", // change if your repo name is different
    liveUrl: "https://foodspotonline.netlify.app/",
    imageUrl: "/assets/foodspotimage.jpg", // replace with your actual image path
    category: "Full Stack",
    status: "Completed",
    startDate: "2024-07-10",
    endDate: "2024-07-25",
    features: [
      "User authentication with JWT and secure login/signup system",
      "Dynamic menu with restaurant and item filtering",
      "Cart management and real-time order updates",
      "Admin dashboard for managing food items and orders",
      "Fully responsive and visually appealing UI",
    ],
  },
  {
    id: 2,
    title: "Subscription Management System API",
    description:
      "A production-ready Subscription Management System API that manages users, subscriptions, and automated email reminders. Built using Node.js, Express.js, and MongoDB, it includes JWT-based authentication, advanced rate limiting, and bot protection with Arcjet, and automated workflows using Upstash.",
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Bcrypt",
      "Nodemailer",
      "Arcjet",
      "Upstash",
      "Dayjs",
    ],
    githubUrl: "https://github.com/shaik-gafoor/subscription-tracker",
    liveUrl: null,
    imageUrl: "/assets/subscriptiontracker.jpg",
    category: "Backend API",
    status: "Completed",
    startDate: "2024-05-01",
    endDate: "2024-07-15",
    features: [
      "JWT-based user authentication and authorization",
      "Subscription CRUD operations for users",
      "Email automation with Upstash workflows",
      "Advanced rate limiting and bot protection using Arcjet",
      "Global error handling and input validation",
      "Secure password hashing using Bcrypt",
      "Automated email reminders for active subscriptions",
      "RESTful API design with modular architecture",
      "Comprehensive user management and profile updates",
      "Detailed logging and monitoring for backend operations",
    ],
  },

  {
    id: 3,
    title: "Movie Review Platform",
    description:
      "A full-stack web application for movie enthusiasts to discover, review, and manage their favorite films. It includes authentication, movie discovery, reviews, watchlists, and an admin panel for content management.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "JWT",
      "Vite",
    ],
    githubUrl: "https://github.com/shaik-gafoor/Latracal_Solution_Assignment",
    liveUrl: "https://livemoviesreviewonline.netlify.app/",
    imageUrl: "/assets/moviereview.jpg",
    category: "Full Stack",
    status: "Completed",
    startDate: "2024-09-01",
    endDate: "2024-09-14",
    features: [
      "User authentication with JWT",
      "Movie discovery and search system",
      "Review and rating functionality",
      "Personalized user profiles with watchlist management",
      "Admin panel for movie and user management",
      "Responsive and mobile-friendly UI",
      "Role-based access control (User/Admin)",
      "Real-time updates and data validation",
      "RESTful API with 25+ endpoints",
      "MongoDB Atlas cloud integration",
    ],
  },
  {
    id: 4,
    title: "Smart Task Manager",
    description:
      "A full-stack task management application that allows users to add, update, and delete tasks efficiently. It helps users organize their daily work with a clean, responsive interface and real-time updates.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT Authentication",
    ],
    githubUrl: "https://github.com/shaik-gafoor/smart-task-manager",
    liveUrl: "https://smart-tasky.netlify.app/",
    imageUrl: "/assets/smart-tasker.jpg",
    category: "Full Stack",
    status: "Completed",
    startDate: "2024-04-01",
    endDate: "2024-04-04",
    features: [
      "Add, edit, and delete tasks with real-time updates",
      "User authentication using JWT for secure access",
      "Filter and manage tasks based on completion status",
      "Responsive UI with interactive task list and animations",
      "Persistent task storage using MongoDB for each user",
    ],
  },
  {
    id: 5,
    title: "CycleWeb Online Cycle Showroom",
    description:
      "A full-stack cycle showroom web application where users can explore various cycle models with detailed images, descriptions, and prices. Admins can easily manage the cycle listings, including adding, updating, or removing cycles. All images are securely stored and accessed using Cloudinary.",
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Cloudinary",
      "JWT Authentication",
    ],
    githubUrl: "https://github.com/shaik-gafoor/cycleweb",
    liveUrl: null, // Add your live URL if available
    imageUrl: "/assets/cycleweb.jpg",
    category: "Full Stack",
    status: "Completed",
    startDate: "2024-08-01",
    endDate: "2024-08-11",
    features: [
      "Interactive homepage displaying available cycle models with images and prices",
      "Admin panel to add, update, and delete cycles",
      "Image storage and retrieval via Cloudinary integration",
      "User-friendly and responsive design for smooth browsing",
      "Secure authentication system for admin access",
    ],
  },
];

// Certificates (Dummy data)
export const certificates = [
  {
    id: 1,
    title: "Java programming Certificate",
    issuer: "Infosys Springboard",
    date: "2025 june",
    url: "https://drive.google.com/file/d/1C0B9z85jA00e1Etb35qb7ELXIXLON4B_/view?usp=sharing",
    imageUrl: "/assets/java_springboard.jpg",
  },
  {
    id: 2,
    title: "Python Programming Certificate",
    issuer: "Guvi",
    date: "2024-08-21",
    url: "https://www.guvi.in/share-certificate/82H192ai20z726WV42",
    imageUrl: "/assets/guvi.jpg",
  },
  {
    id: 3,
    title: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "2025-11-08",
    url: "https://drive.google.com/file/d/18zK7BpfDn--VTaPhWptrPqlwSuLYIfeS/view?usp=sharing",
    imageUrl: "/assets/cert3.jpg",
  },
];
