/**
 * portfolioData.js
 * All personal/resume data for the retro portfolio.
 * Extracted from Aayushmaan Jaiswal's resume.
 */

export const personalInfo = {
  name: "Aayushmaan Jaiswal",
  title: "Full Stack Developer",
  titles: ["Full Stack Developer", "Data Analyst", "Software Developer"],
  email: "aayushmaan.jaiswal0308@gmail.com",
  phone: "+91-8736857339",
  github: "https://github.com/Phoenix-Noah0806",
  linkedin: "https://www.linkedin.com/in/aayushmaanjaiswal",
  tagline: "Building the web, one pixel at a time.",
  bio: "I'm a Computer Science Engineering student at Lovely Professional University with a passion for building full-stack web applications. I love solving complex problems, crafting clean UIs, and turning ideas into reality with code. When I'm not coding, I'm exploring new technologies and leveling up my skills.",
};

export const skills = {
  languages: [
    { name: "C++", level: 85 },
    { name: "JavaScript", level: 90 },
    { name: "C", level: 70 },
    { name: "Python", level: 75 },
    { name: "Java", level: 65 },
  ],
  frameworks: [
    { name: "React", level: 88 },
    { name: "Next.js", level: 75 },
    { name: "Express.js", level: 85 },
    { name: "Angular", level: 60 },
    { name: "Bootstrap", level: 80 },
    { name: "HTML & CSS", level: 92 },
  ],
  tools: [
    { name: "MongoDB", level: 82 },
    { name: "MySQL", level: 78 },
    { name: "PostgreSQL", level: 70 },
    { name: "Git", level: 88 },
    { name: "Postman", level: 80 },
    { name: "REST APIs", level: 85 },
    { name: "WebSocket", level: 72 },
  ],
};

export const softSkills = [
  "Problem-Solving",
  "Team Player",
  "Project Management",
  "Adaptability",
  "Team Collaboration",
];

export const projects = [
  {
    title: "Anonymous Confession Wall",
    subtitle: "A Secret Confession Platform",
    date: "Feb '26 – Mar '26",
    description:
      "A secure full-stack platform for anonymous content submission, moderation, and protected access.",
    highlights: [
      "Engineered a Node.js/Express/MongoDB platform with structured backend architecture for anonymous submissions and moderation.",
      "Integrated Google OAuth 2.0 via Passport.js + sessions for persistent login and controlled resource access.",
      "Built an interactive frontend using async/await and dynamic DOM updates for smooth navigation and engagement.",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Phoenix-Noah0806/Minor-Project-2",
    live: null,
  },
  {
    title: "Online Complaint Tracker",
    subtitle: "Issue Tracker System",
    date: "Jan '26 – Feb '26",
    description:
      "A modular complaint tracking app with REST APIs, status workflows, and an interactive frontend.",
    highlights: [
      "Implemented REST APIs (create/retrieve/update/delete) using Node.js + Express with layered routing design.",
      "Designed workflow logic for status transitions, search, dashboard analytics, and role-based authorization via middleware.",
      "Built a responsive frontend using async/await, client-side validation, and real-time DOM updates (no persistent DB).",
    ],
    techStack: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js"],
    github: "https://github.com/Phoenix-Noah0806/Minor-Project-1",
    live: null,
  },
  {
    title: "Event Reminder System",
    subtitle: "Desktop Reminder Application",
    date: "Jul '25 – Aug '25",
    description:
      "A C++/Qt desktop reminder app focused on reliability, UX, and efficient file-backed data handling.",
    highlights: [
      "Built a Qt desktop app supporting scheduling, editing, deletion, and configurable alerts via an intuitive GUI.",
      "Used optimized data structures and efficient file management for reliability, quick retrieval, and stable performance.",
      "Applied OOP principles with modular separation and responsive UI behavior for maintainability and execution efficiency.",
    ],
    techStack: ["C++", "Qt", "OOPs"],
    github: "https://github.com/Phoenix-Noah0806/Event-Reminder-System",
    live: null,
  },
];

export const education = [
  {
    institution: "Lovely Professional University",
    location: "Punjab, India",
    degree: "Bachelor of Technology - Computer Science and Engineering",
    score: "CGPA: 7.34",
    period: "Aug '23 – Present",
    icon: "🎓",
  },
  {
    institution: "Sunbeam English School",
    location: "Bhagwanpur, Varanasi",
    degree: "Intermediate",
    score: "Percentage: 90.4%",
    period: "Apr '20 – Jun '22",
    icon: "📚",
  },
  {
    institution: "Sacred Heart Convent School",
    location: "Obra, Sonebhadra",
    degree: "Matriculation",
    score: "Percentage: 92%",
    period: "Apr '18 – Mar '20",
    icon: "🏫",
  },
];

export const training = {
  title: "Data Structures and Algorithms",
  organization: "Cipher Schools Company",
  role: "Trainee",
  period: "Jun '25 – Jul '25",
  description:
    "Completed 70 hours of structured training in Data Structures and Algorithms, covering core concepts essential for problem-solving and efficient code design. Certified by CipherSchools for successful completion of a comprehensive DSA program.",
};

export const certificates = [
  {
    title: "Data Structures and Algorithms",
    issuer: "CipherSchools",
    date: "Jul '25",
    icon: "🏆",
  },
  {
    title: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    date: "Sep '25",
    icon: "🤖",
  },
];

export const achievements = [
  {
    title: "Secured 3rd Rank at Spectra 2024",
    detail: "Among 5k+ participants",
    date: "Jul '24",
    icon: "🥉",
  },
  {
    title: "Finalist at Symposium 2025",
    detail: "University tech festival — Among 4k+ participants",
    date: "Mar '25",
    icon: "🏅",
  },
];

export const navLinks = [
  { label: "About", id: "about" },
  { label: "Projects", id: "projects" },
  { label: "Education", id: "education" },
  { label: "Certificates", id: "certificates" },
  { label: "Resume", id: "resume" },
  { label: "Contact", id: "contact" },
];
