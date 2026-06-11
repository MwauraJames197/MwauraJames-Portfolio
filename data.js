/*
  EDIT THIS FILE TO UPDATE YOUR WEBSITE.
  You usually do not need to touch index.html, css/style.css, or js/main.js.

  Image/file paths:
  - Put images inside: assets/images/
  - Put your resume PDF inside: assets/files/
*/

const portfolioData = {
  name: "",
  title: "Electrical Engineering Student · SPU",
  major: "Electrical Engineering",
  school: "Seattle Pacific University",
  graduation: "Expected June 2027",
  email: "mwauraj@spu.edu",

  // Leaving phone blank keeps it off the public website.
  phone: "",

  portrait: "assets/images/student-portrait.png",
  resume: "assets/files/student-resume.pdf",

  bio: "Hi, I'm James — an electrical engineering student at Seattle Pacific University with a strong passion for circuit design, power systems, and signal processing. I enjoy hands-on engineering projects and applying theoretical knowledge to real-world challenges.",

  links: {
    github: "https://github.com/YOUR-USERNAME",
    linkedin: "https://linkedin.com/in/YOUR-LINKEDIN"
  },

  projects: [
    {
      title: "Sallen-Key Bandpass Filter",
      description: "Bandpass Sallen-Key circuit tuned to pass 17 kHz frequencies, combined with a peak detector and comparator. Verified with frequency response analysis showing -0.23 dB at 17.21 kHz.",
      image: "assets/images/IMG_7612.jpg",
      details: [
        "assets/images/IMG_7530.jpg",
        "assets/images/IMG_7614.jpg"
      ],
      links: [
        { label: "GitHub Repo", url: "https://github.com/YOUR-USERNAME/YOUR-REPO" }
      ]
    },
    {
      title: "Gravity Light Monitoring System",
      description: "Arduino-based display system that uses INA219 current sensors and an OLED screen to show voltage, current, power, and estimated runtime for a gravity light prototype.",
      image: "assets/images/gravity-light-main.jpg",
      details: [],
      links: []
    },
    {
      title: "Project Three Title",
      description: "Replace this text with a short description of the project, what you built, and what tools or skills you used.",
      image: "assets/images/project-three.jpg",
      details: [],
      links: []
    }
  ],

  education: [
    {
      school: "Seattle Pacific University",
      degree: "B.S. Electrical Engineering",
      date: "Expected June 2027"
    }
  ],

  employment: [
    // Add jobs here when you want them to appear.
    // Example:
    // {
    //   title: "Student Assistant",
    //   company: "Seattle Pacific University",
    //   date: "2025 – Present",
    //   description: "Short description of what you did."
    // }
  ],

  skills: [
    "C++",
    "JavaScript",
    "Multisim",
    "MATLAB",
    "Circuit Design",
    "Signal Processing",
    "Power Systems",
    "Breadboarding",
    "Oscilloscopes",
    "Filter Design"
  ],

  contactMessage: "Feel free to reach out for project collaborations, internship inquiries, or just to connect."
};
