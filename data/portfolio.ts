export type AccentMode = "cyan" | "pink";
export type ThemeMode = "light" | "dark";

export type ProjectGallerySlide = {
  src: string;
  alt: string;
};

export type ProjectItem = {
  id: string;
  name: string;
  role: string;
  period: string;
  description: string;
  impact: string;
  problem: string;
  solution: string;
  tags: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  gallery: ProjectGallerySlide[];
};

export const navigationItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

export const accentOptions: { value: AccentMode; label: string }[] = [
  { value: "cyan", label: "Cyan" },
  { value: "pink", label: "Pink" },
];

export const portfolioData = {
  profile: {
    name: "Song Thu",
    phone: "+65 8148 1874",
    email: "songthu0711@gmail.com",
    github: "https://github.com/songgthu",
    linkedin: "https://www.linkedin.com/in/trinhhoaisongthu/",
    resumePath: "/resume.pdf",
    heroRotations: [
      "Full-stack engineer",
      "AI enthusiast",
      "Design-minded developer",
    ],
  },
  about: {
    heading: "About",
    paragraphs: [
      "Hi, I’m Sarah, a fresh Computer Science graduate from NUS specializing in Software Engineering and Database Systems.",
      "I have hands-on experience building full-stack and AI-powered applications using React.js, Next.js, TypeScript, Node.js, Ruby on Rails, Python, and SQL. During my internship at Amaris.AI, I developed a multi-agent AI threat-hunting platform and built real-time monitoring dashboards for cybersecurity workflows.",
      "I’m passionate about building scalable, user-centric products with strong UI/UX design, and I enjoy working in collaborative, fast-paced environments.",
    ]
  },
  experience: [
    {
      id: "amaris",
      company: "Amaris.AI",
      role: "Software Engineer Intern",
      location: "Singapore",
      period: "Jan 2025 - Jul 2025",
      summary:
        "Built a full-stack multi-agent AI threat-hunting platform that automated end-to-end analysis workflows for security teams.",
      highlights: [
        "Implemented a full-stack, multi-agent AI threat-hunting platform, integrating Splunk, IntelOwl, and VirusTotal via REST APIs to automate end-to-end threat analysis workflows.",
        "Developed real-time monitoring dashboards, providing security teams with actionable insights and streamlined investigation processes.",
        "Collaborated closely with other developers in an agile environment, contributing to product design discussions and iterative development cycles."
      ],
      tags: ["Python", "LLMs", "Docker", "AI agents", "Splunk"],
    },
  ],
  projects: [
    {
      id: "peerprep",
      name: "PeerPrep",
      role: "Full-stack Developer",
      period: "Sep 2025 - Dec 2025",
      description:
        "A real-time collaborative technical interview practice platform designed to make mock interviews smoother and more structured.",
      impact:
        "Implemented a matching system that paired users by skill level and availability with 98% matching accuracy.",
      problem:
        "Candidates often struggle to coordinate realistic peer interviews and need a shared space for coding, timing, and feedback.",
      solution:
        "Built a multi-panel interviewing workspace with WebSocket-powered collaboration, matching logic, and a focused interface for conducting technical practice sessions.",
      tags: ["Next.js", "TypeScript", "Express.js", "MongoDB"],
      githubUrl: "https://github.com/songgthu",
      highlights: [
        "Created a multi-panel interface that keeps code, notes, and session context visible at once.",
        "Used WebSocket-based communication for synchronized real-time collaboration.",
        "Focused the workflow around interview readiness, not just code editing.",
      ],
      gallery: [
        {
          src: "/peerprep_project_1.png",
          alt: "Image placeholder for the PeerPrep interview workspace.",
        },
        {
          src: "/peerprep_project_2.png",
          alt: "Image placeholder for the PeerPrep matching flow.",
        },
        {
          src: "/peerprep_demo.mp4",
          alt: "Image placeholder for the PeerPrep session review.",
        },
      ],
    },
    {
      id: "askwave",
      name: "askWave",
      role: "Full-stack Developer",
      period: "Dec 2023 - Jan 2024",
      description:
        "A university discussion platform that supports structured student conversations, authentication, and real-time interactions.",
      impact:
        "Architected backend APIs and database schemas to support up to 1,000 concurrent users with reliable performance.",
      problem:
        "Student communities need reliable discussion tools that are easier to navigate and moderate than fragmented chat threads.",
      solution:
        "Built a full-stack forum experience with strong data modeling, scalable APIs, and discussion-first interaction patterns.",
      tags: ["React.js", "TypeScript", "Ruby on Rails", "PostgreSQL"],
      githubUrl: "https://github.com/songgthu",
      highlights: [
        "Implemented authentication, threaded discussion flows, and real-time interactions.",
        "Modeled data and APIs around reliable performance under concurrent usage.",
        "Balanced frontend usability with backend scalability from the start.",
      ],
      gallery: [
        {
          src: "/askwave_project_1.png",
          alt: "Image placeholder for the askWave discussion feed.",
        },
        {
          src: "/askwave_project_2.png",
          alt: "Image placeholder for the askWave thread detail view.",
        },
      ],
    },
    {
      id: "phishnchips",
      name: "phishnchips",
      role: "Full-stack Developer · BrainHack 2025 Finalist",
      period: "Jun 2025",
      description:
        "A mobile app for multimedia scam detection and reporting, built as a hackathon project by a 3-member team.",
      impact:
        "Reached finalist status in a competition involving 4,300 students by pairing detection support with reporting workflows.",
      problem:
        "Users face increasingly varied scam content across screenshots, messages, and media, and need faster reporting support.",
      solution:
        "Led the development of a React Native and Firebase app that helps users detect and report suspicious multimedia content.",
      tags: ["React Native", "Firebase"],
      githubUrl: "https://github.com/songgthu",
      highlights: [
        "Led a 3-member team from concept to finalist prototype.",
        "Focused the product on scam detection plus action-oriented reporting.",
        "Designed for speed and clarity in a high-pressure hackathon timeline.",
      ],
      gallery: [
        {
          src: "/phishnchips_project_1.jpg",
          alt: "phishnchips detection flow screenshot.",
        },
        {
          src: "/phishnchips_project_2.jpg",
          alt: "phishnchips reporting flow screenshot.",
        },
        {
          src: "/phishnchips_project_3.jpg",
          alt: "phishnchips mobile app screenshot.",
        },
        {
          src: "/phishnchips_project_4.jpg",
          alt: "phishnchips mobile app result screenshot.",
        },
      ],
    },
    {
      id: "genius",
      name: "geNiUS",
      role: "Full-stack Developer",
      period: "May 2023 - Jul 2023",
      description:
        "A student productivity web app with automatic calendar generation and exam countdown features.",
      impact:
        "Helped reduce planning time by 45% through responsive scheduling tools tailored for students.",
      problem:
        "Students often manage deadlines across fragmented tools and spend too much time manually planning revision schedules.",
      solution:
        "Built lightweight productivity features using a responsive frontend and a simple Node.js + MySQL backend to keep planning approachable.",
      tags: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
      githubUrl: "https://github.com/songgthu",
      highlights: [
        "Created automatic calendar generation and exam countdown workflows.",
        "Designed around fast access and low-friction planning.",
        "Built a clean responsive experience with lightweight backend support.",
      ],
      gallery: [
        {
          src: "/genius_project_1.png",
          alt: "geNiUS planner overview screenshot.",
        },
        {
          src: "/genius_project_2.png",
          alt: "geNiUS countdown module screenshot.",
        },
      ],
    },
    {
      id: "rightship",
      name: "NUS-RightShip Hackathon Analysis",
      role: "Data Analyst",
      period: "Jan 2025",
      description:
        "A data-focused hackathon project centered on environmental records and emissions trend discovery.",
      impact:
        "Processed and visualized more than 100K records to uncover CO2 emission trends and optimization opportunities.",
      problem:
        "Large environmental datasets can hide operational insights when exploration and visualization workflows are too slow.",
      solution:
        "Used Python and pandas to clean, analyze, and visualize emissions records in a way that surfaced actionable trends quickly.",
      tags: ["Python", "Pandas"],
      githubUrl: "https://github.com/songgthu",
      highlights: [
        "Worked with a 100K+ row dataset under hackathon time constraints.",
        "Focused on insight clarity rather than just static reporting.",
        "Connected exploratory analysis to practical optimization opportunities.",
      ],
      gallery: [],
    },
  ] as ProjectItem[],
  skills: [
    {
      title: "Front-end / UI",
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    },
    {
      title: "Back-end",
      items: ["Node.js", "Express.js", "Ruby on Rails", "FastAPI", "REST APIs"],
    },
    {
      title: "Data & Infrastructure",
      items: [
        "Python",
        "Pandas",
        "R",
        "Spark",
        "Hadoop",
        "MySQL",
        "PostgreSQL",
        "Firebase",
        "MongoDB",
        "Tableau",
      ],
    },
    {
      title: "AI / ML",
      items: ["PyTorch", "LiteLLM", "Hugging Face Transformers"],
    },
    {
      title: "Tooling",
      items: ["Git", "Docker", "GitHub Actions", "CI/CD"],
    },
    {
      title: "Deployment",
      items: ["Vercel", "Google Cloud Platform (GCP)"],
    },
  ],
  education: {
    school: "National University of Singapore (NUS)",
    degree: "Computer Science, Bachelor of Computing",
    specialization:
      "Specializations:",
    period: "Aug 2022 - May 2026",
    certifications: [
      "Frontend Developer (React) - Issued Apr 2026",
      "Claude Code in Action - Issued Mar 2026",
      "SQL (Advanced), HackerRank - Issued Sep 2024",
      "Google Data Analytics Program - Issued Aug 2024",
      "TikTok Tech Immersion 2024 - Issued Jul 2024",
    ],
  },
  contact: {
    title: "Contact",
  },
};
