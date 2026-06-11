const portfolioData = {
  name: "James",
  title: "Electrical Engineering Student · SPU",
  profilePhoto: "student-portrait.png",
  bio: "Hi, I'm James Mwaura, an electrical engineering student at Seattle Pacific University with a strong passion for circuit design, power systems, and signal processing. I enjoy hands-on engineering projects and applying theoretical knowledge to real-world challenges.",
  email: "James.mwaura204@gmail.com",
  phone: "",
  linkedin: "https://linkedin.com",
  github: "https://github.com/MwauraJames197",
  resume: "student-resume.pdf",
  contactText: "Feel free to reach out for project collaborations, internship inquiries, or just to connect.",

projects: [
  {
    title: "Sallen-Key Bandpass Filter",
    tag: "Circuit Design",
    description: "Designed and tested a Sallen-Key bandpass filter tuned around 17 kHz. The project included breadboarding, frequency response testing, peak detection, and comparator behavior verification.",
    image: "IMG_7612.jpg",
    details: ["IMG_7530.jpg", "IMG_7614.jpg"],
    github: "#"
  },
  {
    title: "Gravity Light Power Monitoring System",
    tag: "Embedded Systems",
    description: "Built the monitoring subsystem for a gravity-powered light project using an Arduino Nano R4, OLED display, and INA219 sensors to measure voltage, current, power, and estimated runtime.",
    image: "gravity-light.jpg",
    details: ["gravity-light-1.jpg", "gravity-light-2.jpg"],
    github: "#"
  },
  {
    title: "Pico RC Fire Truck",
    tag: "Robotics",
    description: "Developed an RC fire truck system using a Raspberry Pi Pico W, motor control, servos, ultrasonic sensing, and wireless controller input for movement and obstacle detection.",
    image: "pico-firetruck.jpg",
    details: ["firetruck-1.jpg", "firetruck-2.jpg"],
    github: "#"
  },
  {
    title: "Power PCB Assembly",
    tag: "PCB Design",
    description: "Assembled and documented a custom power PCB, including component placement, soldering, board inspection, and preparation for electrical testing.",
    image: "power-pcb.jpg",
    details: ["pcb-1.jpg", "pcb-2.jpg"],
    github: "#"
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
    {
      title: "Open to internship and co-op opportunities",
      place: "Electrical Engineering / Embedded Systems / Power Systems",
      date: "Current"
    }
  ],

  skills: [
    "C++", "JavaScript", "Multisim", "MATLAB", "Circuit Design", "Signal Processing","PCB Design",
    "Power Systems", "Breadboarding", "Oscilloscopes", "Filter Design", "Arduino", "Raspberry Pi Pico"
  ]
};
