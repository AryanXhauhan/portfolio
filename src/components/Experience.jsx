import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";

const CustomTilt = ({ children, options = {} }) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * (options.max || 15);
      const rotateY = ((centerX - x) / centerX) * (options.max || 15);
      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${options.scale || 1.05})`;
    };

    const handleMouseEnter = () => {
      element.style.transition = `transform ${options.speed || 450}ms`;
    };

    const handleMouseLeave = () => {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [options]);

  return (
    <div ref={ref} className="w-full cursor-pointer" style={{ transformStyle: 'preserve-3d' }}>
      {children}
    </div>
  );
};

// Enhanced Floating Experience Graphics
const FloatingExperienceGraphics = () => {
  const icons = [
    { emoji: '💼', top: '10%', left: '5%', delay: 0, duration: 9 },
    { emoji: '🚀', top: '25%', right: '8%', delay: 1, duration: 11 },
    { emoji: '⚡', top: '60%', left: '8%', delay: 2, duration: 10 },
    { emoji: '🎯', top: '80%', right: '12%', delay: 0.5, duration: 8 },
    { emoji: '💡', top: '40%', right: '5%', delay: 1.5, duration: 12 },
    { emoji: '🔥', top: '15%', left: '85%', delay: 0.8, duration: 9 },
  ];

  return (
    <>
      {/* Floating Icons */}
      {icons.map((item, index) => (
        <motion.div
          key={`icon-${index}`}
          className="absolute text-5xl pointer-events-none opacity-10"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 15, -15, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {item.emoji}
        </motion.div>
      ))}

      {/* Timeline Vertical Line with Glow */}
      <svg className="absolute left-1/2 top-0 h-full pointer-events-none opacity-20" width="4">
        <motion.line
          x1="2" y1="0"
          x2="2" y2="100%"
          stroke="url(#timelineGradient)"
          strokeWidth="3"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: "easeInOut" }}
        />
        <defs>
          <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#fb923c" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Code Lines */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`code-line-${i}`}
          className="absolute h-0.5 bg-gradient-to-r from-transparent via-yellow-500/20 to-transparent pointer-events-none"
          style={{
            width: '40%',
            top: `${15 + i * 15}%`,
            left: i % 2 === 0 ? '5%' : 'auto',
            right: i % 2 === 0 ? 'auto' : '5%',
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scaleX: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`exp-particle-${i}`}
          className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #fbbf24, #fb923c)',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -150, 0],
            opacity: [0, 0.7, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 8,
          }}
        />
      ))}

      {/* Radial Pulse Circles */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`pulse-${i}`}
          className="absolute rounded-full border border-yellow-500/10 pointer-events-none"
          style={{
            width: `${200 + i * 150}px`,
            height: `${200 + i * 150}px`,
            top: '50%',
            left: '50%',
            marginLeft: `-${100 + i * 75}px`,
            marginTop: `-${100 + i * 75}px`,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Hex Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(30deg, #fbbf24 12%, transparent 12.5%, transparent 87%, #fbbf24 87.5%),
            linear-gradient(150deg, #fbbf24 12%, transparent 12.5%, transparent 87%, #fbbf24 87.5%)
          `,
          backgroundSize: '80px 140px',
          backgroundPosition: '0 0, 40px 70px',
        }}
      />
    </>
  );
};

const timeline = [
  {
    year: "2025",
    title: "AruAlgo – TradingView Indicators",
    date: "May 2025 – Present",
    bullets: [
      "AruAlgo is a revenue-generating suite of TradingView indicators with advanced logic and dashboards, trusted by thousands of traders globally. It achieved 2 lakh+ sales in 3 months through strong buy/sell tools and active community support. All strategy logic and features were personally built and maintained."
    ],
    tags: ["Pine Script", "TradingView", "Algorithmic Trading", "Signal Logic"]
  },
  {
    year: "2025",
    title: "AruTradeX – Fintech Trading Platform",
    date: "Sep 2025 – Present",
    bullets: [
      "AruTradeX is a new all-in-one trading and learning platform designed for both beginners and advanced traders. It features VIP signals, integrates AruAlgo indicators with flexible pricing, and combines education, community, and automated tools. The end-to-end product—architecture, frontend, authentication, and UI/UX—was fully built and led by a single developer."
    ],
    tags: ["React.js", "Node.js", "Fintech", "SaaS", "UI/UX"]
  },
  {
    year: "2025",
    title: "Dream2Design – AI SaaS Frontend Builder",
    date: "Sep 2025 – Present",
    bullets: [
      "You are developing a SaaS platform that converts design inputs into production-ready UI code (HTML, CSS, JS). The goal is to significantly reduce front-end development time by automating code generation from user prompts, integrated with secure authentication. You conceived, architected, and executed the entire system independently using AI tools for idea inspiration and problem solving. The project is currently in preview, targeting freelancers, agencies, and developers seeking workflow acceleration."
    ],
    tags: ["AI", "SaaS", "HTML/CSS/JS", "Prompt Engineering"]
  },
  {
    year: "2024",
    title: "Assignment JarNox – Backend Developer Intern",
    date: "June 2024 – Aug 2024",
    bullets: [
      "The project involves building a real-time trading platform that fetches live market data via Binance WebSocket, visualizes it with custom candle charts, and includes a paper-trading engine with SL/TP lines, auto exit, and PnL tracking, backed by SQLite for data persistence. It also features an optimized indicator library and a server-side backtesting UI, ensuring resilience with a sophisticated WebSocket feeder."
    ],
    tags: ["Node.js", "Express.js", "Trading Websockets", "SQLite", "LightweightCharts"]
  },
  {
    year: "2024",
    title: "Twitter Trending Scraper & API",
    date: "June 2024",
    bullets: [
      "Developed a Python web scraper using Selenium and ProxyMesh to extract top Twitter trends with high accuracy. The scraper powers a Flask API offering real-time trending data with reduced response time, stable IP rotation, and optimized performance, storing data efficiently in MongoDB with 99% uptime."
    ],
    tags: ["Python", "Selenium", "Flask", "ProxyMesh", "MongoDB"]
  }
];

const SimpleBullet = ({ children }) => (
  <li className="my-2 text-yellow-200 text-sm leading-relaxed list-disc list-inside">
    {children}
  </li>
);

const BubbleGlow = ({
  year,
  size = 80,
  borderWidth = 2,
  fontSize = 14,
  position = "left",
  style = {}
}) => {
  const baseStyle = {
    width: size,
    height: size,
    fontSize: fontSize,
    transition: "left 0.5s, right 0.5s",
    position: "absolute",
    top: "15%",
    transform: "translateY(-50%)",
    borderStyle: "solid",
    borderColor: "#ffae00ff",
    backgroundColor: "black",
    borderRadius: "9999px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "800",
    color: "#FFD700",
    borderWidth: borderWidth,
    zIndex: 20,
    ...style
  };

  if (position === "left") baseStyle.left = -size * 0.4;
  else if (position === "right") baseStyle.right = -size * 0.4;
  else if (position === "center") {
    baseStyle.left = "50%";
    baseStyle.transform = "translateX(-50%) translateY(-50%)";
    delete baseStyle.top;
  }
  
  return (
    <motion.div
      initial={{ boxShadow: `0 0 32px ${borderWidth * 3}px #FFD700`, scale: 1 }}
      animate={{
        boxShadow: [
          `0 0 42px ${borderWidth * 5}px #FFD700BB`,
          `0 0 18px ${borderWidth * 2}px #FFD70055`,
          `0 0 42px ${borderWidth * 5}px #FFD700BB`,
        ],
        scale: [1, 1.15, 1],
      }}
      transition={{
        duration: 2.2,
        repeat: Infinity,
        repeatType: "reverse",
      }}
      style={baseStyle}
    >
      {year}
    </motion.div>
  );
};

const Tag = ({ label }) => (
  <motion.span
    className="inline-block bg-yellow-900/50 text-yellow-200 text-xs font-semibold rounded-full px-3 py-1 mr-2 mb-2 border border-yellow-400 shadow-md cursor-pointer relative overflow-hidden"
    whileHover={{
      scale: 1.15,
      borderColor: "#facc15",
      boxShadow: "0 0 20px 5px rgba(250, 204, 21, 0.6)",
    }}
    whileTap={{ scale: 0.95 }}
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.4,
      type: "spring",
      stiffness: 300,
      damping: 15
    }}
  >
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-300/20 to-transparent"
      initial={{ x: "-100%" }}
      whileHover={{ x: "100%" }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    />
    <span className="relative z-10">{label}</span>
  </motion.span>
);

const TimelineCard = ({
  year,
  title,
  date,
  bullets,
  tags,
  align = "left",
  width = "max-w-5xl",
  height = 140,
  padding = 20,
  bubbleSize = 80,
  bubblePosition = "left",
}) => (
  <motion.div
    className="relative flex items-center justify-center mb-10 w-full"
    style={{ minHeight: height }}
  >
    <BubbleGlow year={year} size={bubbleSize} fontSize={13} position={bubblePosition} />
    
    <motion.div
      initial={{ opacity: 0, x: align === "right" ? -80 : 80 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        type: "spring",
        bounce: 0.22
      }}
      className={`mx-10 flex-1 ${width}`}
      style={{ padding }}
    >
      <CustomTilt
        options={{
          max: 15,
          scale: 1.05,
          speed: 450,
        }}
      >
        <div
          className="rounded-xl border-2 bg-gradient-to-br from-neutral-900 via-neutral-900/90 to-neutral-900/60 shadow-lg backdrop-blur-xl px-6 py-6 min-w-[420px] transition-all duration-300 hover:shadow-[0_0_20px_5px_#FFD700] relative overflow-hidden"
          style={{ borderColor: '#ff6c0036' }}
        >
          {/* Card Background Pattern */}
          <div 
            className="absolute inset-0 opacity-5 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle, #fbbf24 1px, transparent 1px)`,
              backgroundSize: '20px 20px',
            }}
          />

          {/* Animated Scan Line */}
          <motion.div
            className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
            animate={{
              top: ['0%', '100%'],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <h3 className="text-yellow-500 font-bold text-xl mb-2 relative z-10">{title}</h3>
          <div className="text-yellow-200 text-base mb-3 font-semibold relative z-10">{date}</div>
          <ul className="relative z-10">
            {bullets.map((point, idx) => (
              <SimpleBullet key={idx}>{point}</SimpleBullet>
            ))}
          </ul>
          <div className="flex flex-wrap mt-2 relative z-10">
            {tags.map((tag, idx) => (
              <Tag label={tag} key={idx} />
            ))}
          </div>
        </div>
      </CustomTilt>
    </motion.div>
  </motion.div>
);

const ExperienceSection = () => (
  <section 
    id="experience"
    className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center px-8 py-24"
  >
    <div 
      className="absolute inset-0 pointer-events-none" 
      style={{ 
        background: "radial-gradient(circle at center, rgba(15, 4, 37, 0.68) 0%, transparent 70%)", 
        zIndex: 0 
      }} 
    />

    {/* Enhanced Floating Graphics */}
    <FloatingExperienceGraphics />
    
    <div className="relative z-10 max-w-6xl mx-auto">
      <h2 className="text-6xl md:text-6xl font-extrabold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-300 drop-shadow-lg">
        Project Journey
      </h2>
      
      <p className="text-gray-200 text-base md:text-lg text-center mb-10 max-w-3xl mx-auto">
        Architecting full-stack applications across fintech, AI, and cloud infrastructure.
      </p>
      
      {timeline.map((item, idx) => (
        <TimelineCard
          {...item}
          key={item.title + idx}
          align={idx % 2 === 0 ? "left" : "right"}
          width="max-w-5xl"
          height={140}
          bubbleSize={85}
          bubblePosition={idx % 2 === 0 ? "left" : "right"}
        />
      ))}
    </div>
  </section>
);

export default ExperienceSection;
