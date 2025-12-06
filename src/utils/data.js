import {
  Code2,
  GraduationCap,
  Briefcase,
  Award,
  Rocket,
  Heart,
  Coffee,
  BookOpen,
  Zap,
  Database,
  Server,
  Cloud,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";

import PROJECT_IMG_1 from "../assets/images/project-1.png";
import PROJECT_IMG_2 from "../assets/images/weather-dashboard-main.PNG";
import PROJECT_IMG_3 from "../assets/images/travelImg.png";
import PROJECT_IMG_4 from "../assets/images/scheduler-main.PNG";
import PROJECT_IMG_5 from "../assets/images/burger.png";
import PROJECT_IMG_6 from "../assets/images/emp-directory.png";
import PROJECT_IMG_7 from "../assets/images/uni-circle.png";
import PROJECT_IMG_8 from "../assets/images/MCBA_Banking.png";

export const SKILLS_CATEGORY = [
  {
    title: "Frontend",
    icon: Code2,
    description:
      "Crafting beautiful and responsive user interfaces with modern web technologies.",
    skills: [
      { name: "React", level: 95, color: "bg-blue-500" },
      { name: "TypeScript", level: 85, color: "bg-blue-600" },
      { name: "JavaScript", level: 90, color: "bg-yellow-500" },
      { name: "TailwindCSS", level: 92, color: "bg-orange-500" },
      { name: "Framer Motion", level: 80, color: "bg-pink-500" },
    ],
  },
  {
    title: "Backend",
    icon: Server,
    description:
      "Building robust and scalable server-side applications with modern frameworks.",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-500" },
      { name: "Express", level: 85, color: "bg-cyan-500" },
      { name: "C#", level: 80, color: "bg-green-600" },
      { name: "GraphQL", level: 75, color: "bg-yellow-600" },
      { name: "REST APIs", level: 90, color: "bg-blue-600" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    description:
      "Designing and managing databases for efficient data storage and retrieval.",
    skills: [
      { name: "MySQL", level: 90, color: "bg-blue-500" },
      { name: "MongoDB", level: 80, color: "bg-green-500" },
      { name: "Firebase", level: 75, color: "bg-purple-500" },
      { name: "SQLite", level: 70, color: "bg-red-500" },
    ],
  },
  {
    title: "DevOps",
    icon: Cloud,
    description: "Deploying and scaling applications",
    skills: [
      { name: "Docker", level: 80, color: "bg-blue-500" },
      { name: "AWS", level: 70, color: "bg-green-500" },
      { name: "Git", level: 90, color: "bg-purple-500" },
      { name: "Vercel", level: 70, color: "bg-red-500" },
    ],
  },
];
export const TECH_STACK = [
  "JavaScript",
  "TypeScript",
  "React",
  "HTML",
  "CSS",
  "Vite",
  "Figma",
  "Notion",
  "GitHub",
  "C#",
  ".NET",
];
export const STATS = [
  { number: "20+", label: "Projects Completed" },
  { number: "2+", label: "Years of Experience" },
  { number: "10+", label: "Technologies" },
  { number: "100%", label: "Client Satisfaction" },
];

export const PROJECTS = [
  {
    id: 1,
    title: "IT Hub",
    description:
      "IT Hub is a full stack MERN application with authentication where the user have to create an account and login to create a post. After login the user will be taken to their dashboard page with their profile pictures and information. In their dashboard, they can create a post, remove post, add to Favorite and remove favorite.",
    image: PROJECT_IMG_1,
    tags: [
      "MongoDb",
      "Express",
      "React",
      "Node",
      "Semantic React",
      "Passport for authentication",
      "React Quill for rich Text Editor",
      "React –particles",
      "Cloudinary",
    ],
    liveURL: "https://it-hub-0305.herokuapp.com/",
    githubURL: "https://github.com/wendyVo/IT-Hub",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 2,
    title: "Weather Dashboard",
    description:
      "Weather Dashboard is a weather outlook that display current and future 5-days weather conditions for multiple cities. This application is using third-party API OpenWeather API to retrieve weather data for the city. In addition, localStorage has been used to store city name in the search history section.",
    image: PROJECT_IMG_2,
    tags: [
      "OpenWeather API",
      "BootStrap",
      "Javascript",
      "JQueryJS",
      "HTML",
      "localStorage",
    ],
    liveURL: "https://wendyvo.github.io/weather-dashboard/",
    githubURL: "https://github.com/wendyVo/weather-dashboard.git",
    featured: false,
    category: "Web App",
  },
  {
    id: 3,
    title: "Travel Planner",
    description:
      "Travel planner landing page that showcases destinations and travel ideas using responsive layouts.",
    image: PROJECT_IMG_3,
    tags: ["HTML", "CSS", "JavaScript"],
    liveURL: "https://github.com/wendyVo/Travel-Planner",
    githubURL: "https://github.com/wendyVo/Travel-Planner",
    featured: false,
    category: "Frontend",
  },
  {
    id: 4,
    title: "Work Day Scheduler",
    description:
      "A simple calendar app that lets users save events for each hour of the day using localStorage.",
    image: PROJECT_IMG_4,
    tags: ["JavaScript", "jQuery", "Bootstrap", "localStorage"],
    liveURL: "https://github.com/wendyVo/Work-Day-Scheduler",
    githubURL: "https://github.com/wendyVo/Work-Day-Scheduler",
    featured: false,
    category: "Frontend",
  },
  {
    id: 5,
    title: "Burger Logger",
    description:
      "A burger logger that lets users input burger names, devour them, and keep track of eaten burgers using a MySQL backend.",
    image: PROJECT_IMG_5,
    tags: ["Handlebars", "MySQL", "Express", "Node.js"],
    liveURL: "https://github.com/wendyVo/Burger-Logger",
    githubURL: "https://github.com/wendyVo/Burger-Logger",
    featured: false,
    category: "Full Stack",
  },
  {
    id: 6,
    title: "Employee Directory",
    description:
      "React app that allows users to view and sort employees by name and filter by search.",
    image: PROJECT_IMG_6,
    tags: ["React", "Bootstrap", "Random User API"],
    liveURL: "https://github.com/wendyVo/Employee-Directory",
    githubURL: "https://github.com/wendyVo/Employee-Directory",
    featured: false,
    category: "Frontend",
  },
  {
    id: 7,
    title: "UniCircle – Student Marketplace App",
    description:
      "An iOS marketplace app designed for university students to buy and sell items within their campus community. Built with SwiftUI and MVVM, UniCircle integrates Stripe for payments, Firebase for data, and supports deep links and widgets.",
    image: PROJECT_IMG_7,
    tags: ["SwiftUI", "iOS", "Firebase", "Stripe", "MVVM", "SwiftData"],
    liveURL: "", // No public TestFlight/App Store yet
    githubURL: null, // 🔒 Private – uni assignment
    featured: true,
    category: "Mobile",
    isPrivate: true, // (optional) if you want to flag it
  },
  {
    id: 8,
    title: "MCBA – Internet Banking System",
    description:
      "A .NET-based console and web banking system built for the fictional 'Most Common Bank of Australia'. Includes secure login, account management, transfers, bill payments, and SQL Server persistence with layered architecture and dependency injection.",
    image: PROJECT_IMG_8,
    tags: [
      "C#",
      ".NET",
      "ASP.NET MVC",
      "SQL Server",
      "ADO.NET",
      "Clean Architecture",
    ],
    liveURL: "",
    githubURL: null,
    featured: false,
    category: "Full Stack",
    isPrivate: true,
  },
  // {
  //   id: 9,
  //   title: "IoT Classroom Management System",
  //   description:
  //     "A distributed IoT system using multiple Raspberry Pis (Master, Agent, Room) to manage classroom bookings, room access, and status displays. Uses Flask, MQTT, and a cloud-hosted MySQL database to coordinate devices and web interfaces.",
  //   image: IOT_IMG,
  //   tags: ["Python", "Flask", "MQTT", "Raspberry Pi", "MySQL", "IoT"],
  //   liveURL: "",
  //   githubURL: null,
  //   featured: false,
  //   category: "IoT",
  //   isPrivate: true,
  // },
];
export const PASSIONS = [
  {
    icon: Heart,
    title: "User Experience",
    description: "Crafting intuitive interfaces that users love",
  },
  {
    icon: Coffee,
    title: "Problem Solving",
    description: "Turning complex challenges into elegant solutions",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    description: "Always exploring new technologies and best practices",
  },
];

export const JOURNEY_STEPS = [
  {
    year: "2021",
    title: "Started Coding Journey",
    company: "Self-taught",
    description:
      "Began learning web development with HTML, CSS, and JavaScript. Built my first website and fell in love with coding.",
    icon: Code2,
    color: "bg-blue-500",
  },
  {
    year: "2022",
    title: "First BootCamp",
    company: "Monash BootCamp",
    description:
      "Joined as a frontend intern, working with React and learning modern development practices. Contributed to UI components and improved site performance.",
    icon: Briefcase,
    color: "bg-green-500",
  },
  {
    year: "2023",
    title: "Computer Science Degree",
    company: "RMIT University",
    description: "",
  },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    icon: FiGithub,
    url: "https://github.com",
    color: "hover:text-gray-400",
    bgColor: "hover:bg-gray-800",
  },
  {
    name: "LinkedIn",
    icon: FiLinkedin,
    url: "https://linkedin.com",
    color: "hover:text-blue-400",
    bgColor: "hover:bg-blue-900",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto: uyen199247@gmail.com",
    color: "hover:text-green-400",
    bgColor: "hover:bg-green-500/10",
  },
];

export const CONTACT_INFO = [
  {
    icon: MapPin,
    label: "Location",
    value: "Melbourne, Victoria, Australia",
  },
  {
    icon: Mail,
    label: "Email",
    value: "uyen199247@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+61 123 456 789",
  },
];
