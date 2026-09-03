// ============================================================
// EDIT YOUR CONTENT HERE
//
// DOCUMENTATION PHOTOS:
// 1. Put images inside public/documentation/
// 2. Example: public/documentation/project-1.jpg
// 3. Add the path to documentation: ["/documentation/project-1.jpg"]
// ============================================================

export const profile = {
  name: "NAUFAL_HANIF",
  terminalUser: "ROOT@SMK_IDN",
  shortTitle: "SOFTWARE DEVELOPER",
  school: "SMK IDN Bogor",
  location: "Bogor, Indonesia",
  bio: "Software Engineering student focused on front-end development, Laravel, and full-stack web applications.",
  command: "user@portfolio:~$",
};

export const skills = [
  { name: "FRONT_END", level: 85 },
  { name: "BACK_END", level: 60 },
  { name: "FLUTTER", level: 20 },
];

export const skillDetails = [
  { name: "HTML", level: 85, color: "green" },
  { name: "CSS", level: 85, color: "cyan" },
  { name: "TAILWIND", level: 80, color: "green" },
  { name: "JAVASCRIPT", level: 65, color: "cyan" },
  { name: "REACT", level: 30, color: "green" },
  { name: "PHP", level: 65, color: "cyan" },
  { name: "NODE.JS", level: 40, color: "green" },
  { name: "GIT", level: 80, color: "cyan" },
  { name: "TERMINAL", level: 65, color: "green" },
  { name: "LARAVEL", level: 80, color: "green" },
  { name: "MYSQL", level: 70, color: "cyan" },
  { name: "LINUX", level: 25, color: "green" },
  { name: "FLUTTER", level: 20, color: "cyan" },
];

export const technologies = [
  "HTML",
  "CSS",
  "JAVASCRIPT",
  "REACT",
  "TAILWIND",
  "PHP",
  "LARAVEL",
  "MYSQL",
  "GIT",
  "LINUX",
  "FLUTTER"
];

export const experience = [
  {
    year: " 26 - 30 APR 2026",
    role: "Teacher",
    company: "SMA BUAH HATI",
    description:
      "Served as an instructor for a 5-day intensive web development training. Together with two co-instructors, we taught highly enthusiastic students how to build responsive, modern web layouts using HTML, CSS, and Tailwind CSS.",
    // Tambahkan foto dokumentasi nanti, contoh: ["/documentation/experience-idn-1.jpg"]
    documentation: ["/documentation/Cuplikan layar 2026-09-02 143932.png"],
  },
  {
    year: "18 - 20 NOV 2025",
    role: "Teacher",
    company: "ISLAMIC SCHOOL ADZKA",
    description:
      "Guided a 3-day introductory program on basic website creation. Alongside my team, I focused on mentoring students hands-on as they built simple web pages from scratch using HTML and CSS.",
    documentation: ["/documentation/Cuplikan layar 2026-09-02 144050.png"],
  },
  {
    year: " 29 July - 1 AGUST 2026",
    role: "Teacher",
    company: "SMA MAN 4 JAKSEL",
    description:
      "Delivered a 3-day comprehensive frontend development training. My team and I taught the integration of HTML, CSS, JavaScript, and Tailwind CSS, while directly helping students troubleshoot logical errors in their code.",
    documentation: ["/documentation/Cuplikan layar 2026-09-02 134859.png"],
  },
];

export const links = {
  github: "https://github.com/PREDATOR16neo",
  linkedin: "https://www.linkedin.com/in/naufal-hanif-idn",
  whatsapp: "https://wa.me/6285397035348",
  cv: "/CV Naufal Hanif 26 v2.pdf",
};

  const githubRepo = (repoName) =>
    `https://github.com/PREDATOR16neo/${repoName}`;

  export const projects = [
    {
      id: "001",
      title: "PORTOFOLIO LAMINE YAMAL",
      stack: ["HTML", "CSS"],
      description:
        "A frontend UI concept for a school management system, designed to organize student information and track attendance records.",
      type: "WEB FRONT END",
      link: githubRepo("YAMALPORTOFOLIO"),
      documentation: ["/documentation/portfoliocanvaweb.jpg"],
  },
  {
    id: "002",
    title: "Company Profile",
    stack: ["HTML", "CSS"],
    description:
      "A dark-themed landing page featuring a terminal-style interface and cybersecurity-inspired visuals.",
    type: "FRONT_END",
    link: githubRepo("Zoro-Dealer-skl-2"),
    documentation: ["/documentation/Cuplikan layar 2026-09-02 100746.png"],
  },
  {
    id: "003",
    title: "E - Report",
    stack: ["JS", "HTML", "CSS", 'BOOTSTRAP'],
    description:
      "A web application built with a unique terminal aesthetic to practice core JavaScript logic, command execution, and state handling.",
    type: "TOOL",
    link: githubRepo("e-report-skl-3"),
    documentation: ["/documentation/Cuplikan layar 2026-09-02 100957.png"],
  },
  {
    id: "004",
    title: "WEBSITE TECHNOLOGY STORE",
    stack: ["HTML", "CSS", "JS", 'BOOTSTRAP'],
    description:
      "An e-commerce architecture project focused on managing product catalogs, user accounts, shopping carts, and database relationships.",
    type: "FRONT END",
    link: githubRepo("website-technology-store"),
    documentation: ["/documentation/Cuplikan layar 2026-09-02 101123.png"],
  },
  {
    id: "005",
    title: "E - COMMERCE",
    stack: ["HTML", "CSS", "JS", 'BOOTSTRAP', 'TAILWIND'],
    description:
      "An experimental dashboard interface designed with inspiration from futuristic data visualization systems.",
    type: "UI",
    link: githubRepo("e-commerce"),
    documentation: ["/documentation/Cuplikan layar 2026-09-02 102104.png"],
  },
  {
    id: "006",
    title: "E-LIBRARY",
    stack: ["LARAVEL", "MYSQL", "HTML", "CSS", "JS", 'BOOTSTRAP', 'TAILWIND', 'PHP'],
    description:
      "A full-stack digital library application built to manage book catalogs, authors, genres, and cover image uploads.",
    type: "FULL_STACK",
    link: githubRepo("e-library"),
    documentation: ["/documentation/Cuplikan layar 2026-09-02 102254.png"],
  },
  {
    id: "007",
    title: "Pay Roll App",
    stack: ["LARAVEL", "MYSQL", "HTML", "CSS", "JS", 'BOOTSTRAP', 'TAILWIND', 'PHP'],
    description:
      "A web-based payroll system built to manage employee records, automate salary calculations, and generate financial reports.",
    type: "FULL_STACK",
    link: githubRepo("Pay-Roll-Web-App-Project"),
    documentation: ["/documentation/Cuplikan layar 2026-09-02 102536.png"],
  },
  {
    id: "008",
    title: "Note Pad App",
    stack: ["LARAVEL", "MYSQL", "HTML", "CSS", "JS", 'BOOTSTRAP', 'TAILWIND', 'PHP'],
    description:
      "A digital note-taking application that allows users to create, store, and seamlessly manage personal text notes with a responsive interface.",
    type: "FULL_STACK",
    link: githubRepo("Pay-Roll-Web-App-Project"),
    documentation: ["/documentation/Cuplikan layar 2026-09-02 102634.png"],
  },
  {
    id: "009",
    title: "Mini Server App",
    stack: ["LARAVEL", "MYSQL", "HTML", "CSS", "JS", 'BOOTSTRAP', 'TAILWIND', 'PHP'],
    description:
      "A prototype dashboard application for small-scale server management, designed to monitor system status and display basic data visualizations.",
    type: "FULL_STACK",
    link: "https://rplb.my.id",
    documentation: ["/documentation/Cuplikan layar 2026-09-02 102725.png"],
  },
];

export const certificates = [
  {
    id: "MS/28/8/2025/SETPYtYhNdRewQWH38U",
    title: "Introduction To Css",
    issuer: "ONLINE LEARNING",
    level: "Beginner",
    hash: "CSS...",
    year: "2025 - 2028",
    documentation: ["/documentation/Cuplikan layar 2026-09-02 131914.png"],
  },
  {
    id: "MS-27/8/2025-aWG6EvOxZoT2oGVhaGzY",
    title: "INTRODUCTION TO HTML",
    issuer: "ONLINE LEARNING",
    level: "Beginner",
    hash: "HTML...",
    year: "2025 - 2028",
    documentation: ["/documentation/Cuplikan layar 2026-09-02 132822.png"],
  },
  {
    id: "MS-25/8/2025-HkHG04mY85kexA8SqzCh",
    title: "INTERNET INTRODUCTION",
    issuer: "ONLINE LEARNING",
    level: "Beginner",
    hash: "C3D8...",
    year: "2025 - 2028",
    documentation: ["/documentation/Cuplikan layar 2026-09-02 132937.png"],
  },
    {
    id: "MS-25/8/2025-HkHG04mY85kexA8SqzCh",
    title: "FROND-END DEVELOPMENT INTRODUCTION ",
    issuer: "ONLINE LEARNING",
    level: "Beginner",
    hash: "Front End...",
    year: "2025 - 2028",
    documentation: ["/documentation/Cuplikan layar 2026-09-02 133153.png"],
  },
      {
    id: "",
    title: "HTML DASAR",
    issuer: "ONLINE LEARNING",
    level: "Beginner",
    hash: "HTML...",
    year: "2025 - 2028",
    documentation: ["/documentation/Cuplikan layar 2026-09-02 133424.png"],
  },
    {
    id: "MS-26/8/2025-dBDp0TOIgUlbyyc2upli",
    title: "BROWSER, HTTP, DNS, AND HOSTING",
    issuer: "ONLINE LEARNING",
    level: "Beginner",
    hash: "C3D8...",
    year: "2025 - 2028",
    documentation: ["/documentation/Cuplikan layar 2026-09-02 133551.png"],
  },
];

