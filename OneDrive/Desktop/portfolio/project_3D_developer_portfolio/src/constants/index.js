import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  chatapp,
  ytfocus,
  todoext,
  weather,
  imagesearch,
  threejs,
  datastructure,
  machinelearning,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "education", title: "Education" },
  { id: "projects", title: "Projects" },
  { id: "resume", title: "Resume" },
  { id: "skills", title: "Skills" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
    description:
      "Experienced in building responsive and interactive web applications using React, JavaScript, and modern frontend frameworks. Skilled in UI/UX implementation.",
  },
  {
    title: "Backend Developer",
    icon: backend,
    description:
      "Proficient in developing scalable backend systems using Node.js, Express, and MongoDB. Experience in RESTful APIs and database design.",
  },
  {
    title: "Data Structures & Algorithms",
    icon: creator,
    description:
      "Proficient in implementing and optimizing complex data structures and algorithms. Experience in solving challenging programming problems.",
  },
  {
    title: "Machine Learning",
    icon: mobile,
    description:
      "Passionate about ML algorithms, neural networks, and building intelligent systems. Experience with popular ML frameworks and libraries.",
  },
];

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", icon: html },
      { name: "CSS", icon: css },
      { name: "React.js", icon: reactjs },
      { name: "Vite", icon: web },
      { name: "Tailwind CSS", icon: tailwind },
      { name: "Framer Motion", icon: mobile },
      { name: "Three.js", icon: threejs },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "MERN Stack", icon: mongodb },
      { name: "Node.js", icon: nodejs },
      { name: "Firebase", icon: web },
    ],
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", icon: backend },
      { name: "Python", icon: creator },
      { name: "Java", icon: mobile },
    ],
  },
  {
    title: "Python Libraries",
    skills: [
      { name: "NumPy", icon: web },
      { name: "Pandas", icon: backend },
      { name: "Matplotlib", icon: creator },
      { name: "Scikit-learn", icon: mobile },
    ],
  },
  {
    title: "AI & Automation Tools",
    skills: [
      { name: "Bolt AI", icon: web },
      { name: "Replit", icon: backend },
      { name: "n8n", icon: creator },
      { name: "Cursor", icon: mobile },
      { name: "GitHub Copilot", icon: git },
    ],
  },
  {
    title: "Other Tools & Platforms",
    skills: [
      { name: "EmailJS", icon: web },
      { name: "Google Colab", icon: backend },
      { name: "Netlify", icon: creator },
      { name: "Vercel", icon: mobile },
      { name: "GitHub Pages", icon: git },
    ],
  },
];

const education = [
  {
    title: "BTech (Computer Science Engineering)",
    institution: "Lloyd Institute of Engineering and Technology, Greater Noida",
    board: "AKTU",
    date: "2022 - 2026",
    grade: "CGPA: 7/10",
    icon: web,
    iconBg: "#383E56",
  },
  {
    title: "12th (Intermediate)",
    institution: "St. Teresa's Day School, Lucknow",
    board: "ISC",
    date: "2020-2021",
    grade: "79.4%",
    icon: web,
    iconBg: "#E6DEDD",
  },
  {
    title: "10th (Matriculation)",
    institution: "St. Teresa's Day School, Lucknow",
    board: "ICSE",
    date: "2018-2019",
    grade: "73.83%",
    icon: web,
    iconBg: "#383E56",
  },
];

const projects = [
  {
    name: "Node Chat App",
    description:
      "Real-time chat application supporting user authentication, rooms, and instant messaging using Node.js, Socket.io, and Express.",
    tags: [
      { name: "nodejs", color: "green-text-gradient" },
      { name: "express", color: "blue-text-gradient" },
      { name: "socket.io", color: "pink-text-gradient" },
    ],
    image: chatapp,
    source_code_link: "https://github.com/harsh1010888/nodeChatApp",
    live_link: "https://talk-a-tive.herokuapp.com/",
  },
  {
    name: "YT Focus Chrome Extension",
    description:
      "Chrome extension to enhance productivity on YouTube by limiting distractions and focusing on learning content.",
    tags: [
      { name: "javascript", color: "yellow-text-gradient" },
      { name: "chrome-extension", color: "blue-text-gradient" },
      { name: "productivity", color: "pink-text-gradient" },
    ],
    image: ytfocus,
    source_code_link: "https://github.com/harsh1010888/chromeextension",
  },
  {
    name: "Todo Chrome Extension",
    description:
      "Lightweight Chrome extension for quickly managing daily tasks directly from the browser toolbar.",
    tags: [
      { name: "javascript", color: "yellow-text-gradient" },
      { name: "chrome-extension", color: "blue-text-gradient" },
      { name: "productivity", color: "pink-text-gradient" },
    ],
    image: todoext,
    source_code_link: "https://github.com/harsh1010888/chromeextension",
  },
  {
    name: "Weather App",
    description:
      "Weather forecasting web app fetching real-time data and presenting clean UI with location-based search.",
    tags: [
      { name: "javascript", color: "yellow-text-gradient" },
      { name: "api", color: "green-text-gradient" },
      { name: "frontend", color: "blue-text-gradient" },
    ],
    image: weather,
    source_code_link:
      "https://github.com/harsh1010888/webdev/tree/main/weatherapp",
    live_link: "https://weatherapptubular-cranachan-025f2c.netlify.app/",
  },
  {
    name: "Image Search Engine",
    description:
      "Image search interface consuming external API to retrieve and display images with keyword filtering.",
    tags: [
      { name: "javascript", color: "yellow-text-gradient" },
      { name: "api", color: "green-text-gradient" },
      { name: "search", color: "pink-text-gradient" },
    ],
    image: imagesearch,
    source_code_link:
      "https://github.com/harsh1010888/webdev/tree/main/imagesearchengine",
    live_link: "https://imagesearchengineapicall.netlify.app/",
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

export { services, education, projects, skillCategories, technologies };
// experiences will be exported after definition

// Professional experiences timeline data (placeholder entries)
const experiences = [
  {
    title: "Full Stack Developer Intern",
    company: "Tech Startup",
    date: "Jun 2024 - Aug 2024",
    points: [
      "Built responsive React components and optimized bundle size by code-splitting.",
      "Implemented REST APIs with Node.js & Express, integrating MongoDB queries.",
      "Collaborated using Git & Agile sprints, delivering features ahead of schedule.",
    ],
    icon: web,
    iconBg: "#383E56",
  },
  {
    title: "Open Source Contributor",
    company: "Community Projects",
    date: "2023 - Present",
    points: [
      "Contributed bug fixes and documentation improvements to JavaScript libraries.",
      "Reviewed pull requests and assisted newcomers with onboarding workflows.",
      "Automated repetitive project maintenance tasks using GitHub Actions.",
    ],
    icon: backend,
    iconBg: "#E6DEDD",
  },
];

export { experiences };
