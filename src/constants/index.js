import {
  mobile,
  backend,
  creator,
  web,
  frontendIcon,
  backendIcon,
  databaseIcon,
  aiIcon,
  cloudIcon,
  mobileIcon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const techStackData = [
  {
    category: "Frontend Development",
    icon: frontendIcon,
    color: "#1e293b",
    skills: [
      { 
        name: "React.js", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        proficiency: 82, 
        years: "2y",
        color: "rgb(97, 218, 251)"
      },
      { 
        name: "Next.js", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg",
        proficiency: 75, 
        years: "2y",
        color: "rgb(255, 255, 255)"
      },
      { 
        name: "TypeScript", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg",
        proficiency: 88, 
        years: "1y",
        color: "rgb(49, 120, 198)"
      },
      { 
        name: "JavaScript", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
        proficiency: 80, 
        years: "1y",
        color: "rgb(240, 219, 79)"
      },
      { 
        name: "Vue.js", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original.svg",
        proficiency: 78, 
        years: "2y",
        color: "rgb(65, 184, 131)"
      },
      { 
        name: "Tailwind CSS", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tailwindcss/tailwindcss-original.svg",
        proficiency: 87, 
        years: "2y",
        color: "rgb(56, 189, 248)"
      },
      { 
        name: "Three.js", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/threejs/threejs-original.svg",
        proficiency: 75, 
        years: "1y",
        color: "rgb(255, 255, 255)"
      },
      { 
        name: "Framer Motion", 
        icon: "https://api.iconify.design/mdi:animation.svg?color=%230099FF",
        proficiency: 88, 
        years: "1y",
        color: "rgb(0, 153, 255)"
      },
      { 
        name: "HTML5", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg",
        proficiency: 95, 
        years: "3y",
        color: "rgb(227, 79, 38)"
      },
      { 
        name: "CSS3", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg",
        proficiency: 90, 
        years: "3y",
        color: "rgb(21, 114, 182)"
      }
    ]
  },
  {
    category: "Backend Development",
    icon: backendIcon,
    color: "#ca8a04",
    skills: [
      { 
        name: "Node.js", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg",
        proficiency: 93, 
        years: "2y",
        color: "rgb(104, 160, 99)"
      },
      { 
        name: "Python", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
        proficiency: 90, 
        years: "3y",
        color: "rgb(255, 212, 59)"
      },
      { 
        name: "Express.js", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original.svg",
        proficiency: 90, 
        years: "2y",
        color: "rgb(104, 160, 99)"
      },
      { 
        name: "Django", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/django/django-plain.svg",
        proficiency: 85, 
        years: "1y",
        color: "rgb(9, 46, 32)"
      },
      { 
        name: "Flask", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flask/flask-original.svg",
        proficiency: 88, 
        years: "2y",
        color: "rgb(255, 255, 255)"
      },
      { 
        name: "FastAPI", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/fastapi/fastapi-original.svg",
        proficiency: 82, 
        years: "2y",
        color: "rgb(0, 150, 136)"
      },
      { 
        name: "GraphQL", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/graphql/graphql-plain.svg",
        proficiency: 80, 
        years: "1y",
        color: "rgb(225, 0, 152)"
      },
      { 
        name: "REST API", 
        icon: "https://api.iconify.design/mdi:api.svg?color=%23FF6B35",
        proficiency: 92, 
        years: "3y",
        color: "rgb(255, 107, 53)"
      },
      { 
        name: "WebSocket", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg",
        proficiency: 85, 
        years: "2y",
        color: "rgb(1, 1, 1)"
      },
      { 
        name: "C++", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/cplusplus/cplusplus-original.svg",
        proficiency: 75, 
        years: "4y",
        color: "rgb(0, 89, 156)"
      },
      { 
        name: "Java", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg",
        proficiency: 70, 
        years: "3y",
        color: "rgb(237, 76, 35)"
      },
      { 
        name: "C", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/c/c-original.svg",
        proficiency: 72, 
        years: "4y",
        color: "rgb(3, 75, 162)"
      }
    ]
  },
  {
    category: "Database & Storage",
    icon: databaseIcon,
    color: "#1e293b",
    skills: [
      { 
        name: "MongoDB", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original.svg",
        proficiency: 90, 
        years: "2y",
        color: "rgb(71, 162, 72)"
      },
      { 
        name: "PostgreSQL", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original.svg",
        proficiency: 85, 
        years: "1y",
        color: "rgb(49, 108, 142)"
      },
      { 
        name: "MySQL", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original.svg",
        proficiency: 82, 
        years: "1y",
        color: "rgb(0, 117, 143)"
      },
      { 
        name: "Redis", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/redis/redis-original.svg",
        proficiency: 80, 
        years: "1y",
        color: "rgb(220, 54, 40)"
      },
      { 
        name: "Supabase", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg",
        proficiency: 87, 
        years: "2y",
        color: "rgb(62, 207, 142)"
      },
      { 
        name: "Firebase", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/firebase/firebase-plain.svg",
        proficiency: 88, 
        years: "3y",
        color: "rgb(255, 202, 40)"
      },
      { 
        name: "SQLite", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/sqlite/sqlite-original.svg",
        proficiency: 85, 
        years: "1y",
        color: "rgb(0, 119, 187)"
      },
      { 
        name: "Cloudinary", 
        icon: "https://api.iconify.design/simple-icons:cloudinary.svg?color=%233448C5",
        proficiency: 80, 
        years: "2y",
        color: "rgb(52, 72, 197)"
      }
    ]
  },
  {
    category: "AI & Machine Learning",
    icon: aiIcon,
    color: "#1e293b",
    skills: [
      { 
        name: "TensorFlow", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/tensorflow/tensorflow-original.svg",
        proficiency: 80, 
        years: "1y",
        color: "rgb(255, 115, 0)"
      },
      { 
        name: "PyTorch", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pytorch/pytorch-original.svg",
        proficiency: 78, 
        years: "1y",
        color: "rgb(238, 76, 44)"
      },
      { 
        name: "Scikit-learn", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/scikitlearn/scikitlearn-original.svg",
        proficiency: 85, 
        years: "1y",
        color: "rgb(242, 151, 73)"
      },
      { 
        name: "OpenCV", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/opencv/opencv-original.svg",
        proficiency: 75, 
        years: "1y",
        color: "rgb(95, 207, 30)"
      },
      { 
        name: "Pandas", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/pandas/pandas-original.svg",
        proficiency: 88, 
        years: "1y",
        color: "rgb(22, 27, 96)"
      },
      { 
        name: "NumPy", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/numpy/numpy-original.svg",
        proficiency: 90, 
        years: "1y",
        color: "rgb(79, 121, 197)"
      },
      { 
        name: "OpenAI", 
        icon: "https://api.iconify.design/simple-icons:openai.svg?color=%2310a37f",
        proficiency: 98, 
        years: "2y",
        color: "rgb(16, 163, 127)"
      },
      { 
        name: "Grok", 
        icon: "https://api.iconify.design/simple-icons:x.svg?color=%23000000",
        proficiency: 85, 
        years: "1y",
        color: "rgb(0, 0, 0)"
      },
      { 
        name: "DeepSeek", 
        icon: "https://api.iconify.design/mdi:brain.svg?color=%234A90E2",
        proficiency: 82, 
        years: "1y",
        color: "rgb(74, 144, 226)"
      },
      { 
        name: "Perplexity", 
        icon: "https://api.iconify.design/mdi:compass.svg?color=%2320808D",
        proficiency: 88, 
        years: "1y",
        color: "rgb(32, 128, 141)"
      },
      { 
        name: "Claude", 
        icon: "https://api.iconify.design/simple-icons:anthropic.svg?color=%23D4A373",
        proficiency: 90, 
        years: "1y",
        color: "rgb(212, 163, 115)"
      },
      { 
        name: "Gemini", 
        icon: "https://api.iconify.design/simple-icons:google.svg?color=%234285F4",
        proficiency: 87, 
        years: "1y",
        color: "rgb(66, 133, 244)"
      },
      { 
        name: "Blackbox AI", 
        icon: "https://api.iconify.design/mdi:code-braces-box.svg?color=%23000000",
        proficiency: 80, 
        years: "1y",
        color: "rgb(0, 0, 0)"
      },
      { 
        name: "GitHub Copilot", 
        icon: "https://api.iconify.design/mdi:github.svg?color=%23ffffff",
        proficiency: 93, 
        years: "2y",
        color: "rgb(255, 255, 255)"
      }
    ]
  },
  {
    category: "Cloud & DevOps",
    icon: cloudIcon,
    color: "#1e293b",
    skills: [
      { 
        name: "AWS", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
        proficiency: 85, 
        years: "2y",
        color: "rgb(255, 153, 0)"
      },
      { 
        name: "Google Cloud", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/googlecloud/googlecloud-original.svg",
        proficiency: 78, 
        years: "1y",
        color: "rgb(66, 133, 244)"
      },
      { 
        name: "Docker", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original.svg",
        proficiency: 85, 
        years: "1y",
        color: "rgb(32, 148, 219)"
      },
      { 
        name: "Kubernetes", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/kubernetes/kubernetes-plain.svg",
        proficiency: 75, 
        years: "1y",
        color: "rgb(48, 99, 142)"
      },
      { 
        name: "Git", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg",
        proficiency: 93, 
        years: "3y",
        color: "rgb(240, 80, 50)"
      },
      { 
        name: "GitHub Actions", 
        icon: "https://api.iconify.design/mdi:github.svg?color=%23ffffff",
        proficiency: 82, 
        years: "2y",
        color: "rgb(255, 255, 255)"
      },
      { 
        name: "Vercel", 
        icon: "https://api.iconify.design/simple-icons:vercel.svg?color=%23000000",
        proficiency: 88, 
        years: "2y",
        color: "rgb(0, 0, 0)"
      },
      { 
        name: "Render", 
        icon: "https://api.iconify.design/simple-icons:render.svg?color=%2346E3B7",
        proficiency: 85, 
        years: "2y",
        color: "rgb(70, 227, 183)"
      }
    ]
  },
  {
    category: "Mobile Development",
    icon: mobileIcon,
    color: "#1e293b",
    skills: [
      { 
        name: "React Native", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg",
        proficiency: 88, 
        years: "1y",
        color: "rgb(97, 218, 251)"
      },
      { 
        name: "Flutter", 
        icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/flutter/flutter-original.svg",
        proficiency: 80, 
        years: "1y",
        color: "rgb(2, 125, 247)"
      },
      { 
        name: "Expo", 
        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
        proficiency: 85, 
        years: "1y",
        color: "rgb(255, 255, 255)"
      }
    ]
  }
];


const projectsData = [
  {
    id: 1,
    number: "01",
    title: "AruTradeX Platform",
    date: "September 2025 - Present",
    description: "Next-Gen Fintech Trading Platform combining education, VIP signals, and algorithmic tools. Features seamless integration of AruAlgo indicators with monthly/lifetime pricing, exclusive high-probability trade setups, and a comprehensive learning platform for traders. Pre-launch stage, positioned as a one-stop fintech ecosystem.",
   
    tags: ["React", "Node.js", "Firebase Auth", "Express", "MongoDB", "Trading APIs", "WebSocket"],
    features: ["VIP Signals", "Algo Integration"],
    featureDetails: [
      { title: "VIP Signals", subtitle: "High-Probability Setups" },
      { title: "Algo Integration", subtitle: "AruAlgo Indicators" }
    ],
    demoLink: "#",
    detailsLink: "#",
    color: "rgb(234, 179, 8)"
  },
  {
    id: 2,
    number: "02",
    title: "AruAlgo Trading Indicators",
    date: "May 2025 - Present",
    description: "Premium TradingView Pine Script indicators with 60-90% live market accuracy. Generated ₹4 Lakhs revenue in 3 months through digital sales. Created 3 flagship indicators: v6 Pro (ATR-based signals), v6.6 Pro (Advanced SL/TP with EMA/RSI/ADX filters), v6.7 Elite (Premium with animated dashboard). Built 2K+ trader community on Telegram & Instagram.",

    tags: ["Pine Script", "TradingView", "ATR", "RSI", "ADX", "EMA", "Algorithm Design"],
    features: ["60-90% Accuracy", "₹2L Revenue"],
    featureDetails: [
      { title: "60-90% Accuracy", subtitle: "Live Market Signals" },
      { title: "₹4L Revenue", subtitle: "3 Months Sales" }
    ],
    demoLink: "#",
    detailsLink: "#",
    color: "rgb(34, 197, 94)"
  },
  {
    id: 3,
    number: "03",
    title: "JarNox Trading Platform",
    date: "September 2025 - Present",
    description: "Real-time trading web app with Binance WebSocket live klines integration. Features paper-trading engine with SL/TP lines, auto-exit on highs/lows, PnL/equity tracking, SQLite persistence via Express APIs. Includes optimized indicator library (ATR, EMA, RSI, ADX), signal generator with buy/sell markers, SMA/RSI backtesting UI with equity curves, and resilient WebSocket feeder with exponential backoff.",
    
    tags: ["Node.js", "WebSocket", "Binance API", "SQLite", "Express", "LightweightCharts", "React"],
    features: ["Real-time Trading", "Backtesting"],
    featureDetails: [
      { title: "Real-time Trading", subtitle: "Binance WebSocket" },
      { title: "Backtesting", subtitle: "Win-rate & P&L" }
    ],
    demoLink: "#",
    detailsLink: "#",
    color: "rgb(168, 85, 247)"
  },
  {
    id: 4,
    number: "04",
    title: "Dream2Design AI SaaS",
    date: "September 2025 - Present",
    description: "Design-to-code SaaS platform that generates production-ready UI from design inputs. Converts user prompts/designs into HTML, CSS, and JS code with integrated secure authentication. Targets freelancers, agencies, and developers looking to dramatically reduce frontend development time. Pre-launch stage with vision to revolutionize UI development workflows.",
    
    tags: ["React", "AI/ML", "HTML/CSS Generator", "Firebase Auth", "Python", "OpenAI API"],
    features: ["AI-Powered", "Code Generation"],
    featureDetails: [
      { title: "AI-Powered", subtitle: "Design to Code" },
      { title: "Code Generation", subtitle: "Production-Ready UI" }
    ],
    demoLink: "#",
    detailsLink: "#",
    color: "rgb(59, 130, 246)"
  },
  {
    id: 5,
    number: "05",
    title: "Twitter Trending Scraper",
    date: "June 2024",
    description: "Python-based web scraper using Selenium and ProxyMesh to extract top 5 Twitter trending topics with 95% accuracy. Features Flask API serving real-time trending data with 30% reduced response time, MongoDB storage with 99% uptime, ProxyMesh IP rotation improving reliability by 40%, and optimized performance reducing execution time by 25%.",
    
    tags: ["Python", "Selenium", "Flask", "MongoDB", "ProxyMesh", "Web Scraping", "REST API"],
    features: ["95% Accuracy", "Real-time API"],
    featureDetails: [
      { title: "95% Accuracy", subtitle: "Trend Extraction" },
      { title: "Real-time API", subtitle: "30% Faster Response" }
    ],
    demoLink: "#",
    detailsLink: "#",
    color: "rgb(236, 72, 153)"
  }
];

// Add this achievements data to constants/index.js
const achievementsData = [
  {
    id: 1,
    icon: "🏆",
    title: "Full Stack Development",
    organization: "Meta",
    year: "2024",
    description: "Advanced certification in modern web development",
    tags: ["React", "Node.js", "APIs", "Databases"],
    color: "rgb(234, 179, 8)",
    dotColor: "rgb(234, 179, 8)"
  },
  {
    id: 2,
    icon: "🤖",
    title: "AI/ML Specialization",
    organization: "Stanford University",
    year: "2023",
    description: "Deep learning and neural networks mastery",
    tags: ["TensorFlow", "PyTorch", "Deep Learning", "Computer Vision"],
    color: "rgb(239, 68, 68)",
    dotColor: "rgb(239, 68, 68)"
  },
  {
    id: 3,
    icon: "☁️",
    title: "Cloud Architecture",
    organization: "AWS",
    year: "2024",
    description: "Professional cloud solutions architect",
    tags: ["AWS", "Docker", "Kubernetes", "DevOps"],
    color: "rgb(34, 211, 238)",
    dotColor: "rgb(34, 211, 238)"
  },
  {
    id: 4,
    icon: "🔒",
    title: "Cybersecurity Fundamentals",
    organization: "IBM",
    year: "2023",
    description: "Security best practices and implementation",
    tags: ["Security", "Encryption", "Risk Assessment", "Compliance"],
    color: "rgb(134, 239, 172)",
    dotColor: "rgb(134, 239, 172)"
  }
];

// Export it
export { services, techStackData, projectsData, achievementsData };

