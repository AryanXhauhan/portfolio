// src/components/Achievements.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

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

const ANIMATION_CONFIG = {
  headerDelay: 0.2,
  cardStartDelay: 0.4,
  cardStagger: 0.15,
  duration: 0.6,
};

// Enhanced Floating Achievement Graphics
const FloatingAchievementGraphics = () => {
  const trophies = [
    { emoji: '🏆', top: '15%', left: '8%', delay: 0, duration: 8 },
    { emoji: '🥇', top: '70%', right: '10%', delay: 1, duration: 10 },
    { emoji: '🎖️', top: '40%', left: '5%', delay: 2, duration: 9 },
    { emoji: '🥈', top: '85%', left: '15%', delay: 0.5, duration: 11 },
    { emoji: '🥉', top: '25%', right: '12%', delay: 1.5, duration: 7 },
    { emoji: '🎓', top: '60%', right: '8%', delay: 2.5, duration: 12 },
    { emoji: '⭐', top: '10%', left: '85%', delay: 0.8, duration: 9 },
    { emoji: '✨', top: '75%', right: '85%', delay: 1.8, duration: 10 },
  ];

  return (
    <>
      {/* Floating Trophies */}
      {trophies.map((item, index) => (
        <motion.div
          key={`trophy-${index}`}
          className="absolute text-6xl pointer-events-none opacity-15"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
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

      {/* Golden Rays from Center */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        {[...Array(12)].map((_, i) => {
          const angle = (i * 360) / 12;
          return (
            <motion.line
              key={`ray-${i}`}
              x1="50%" y1="50%"
              x2={`${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`}
              y2={`${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`}
              stroke="url(#goldGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0.3, 0.6, 0.3] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          );
        })}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#eab308" stopOpacity="0" />
            <stop offset="50%" stopColor="#eab308" stopOpacity="1" />
            <stop offset="100%" stopColor="#eab308" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Golden Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Rotating Award Rings */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute rounded-full border border-yellow-500/10 pointer-events-none"
          style={{
            top: '50%',
            left: '50%',
            width: `${300 + i * 150}px`,
            height: `${300 + i * 150}px`,
            marginLeft: `-${150 + i * 75}px`,
            marginTop: `-${150 + i * 75}px`,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: {
              duration: 40 + i * 10,
              repeat: Infinity,
              ease: "linear",
            },
            scale: {
              duration: 5 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        />
      ))}
    </>
  );
};

const Achievements = () => {
  const [inView, setInView] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="achievements"
      className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center px-6 md:px-12 py-24"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255, 183, 0, 0.08) 0%, transparent 70%)",
          zIndex: 0
        }}
      />

      {/* Enhanced Floating Graphics */}
      <FloatingAchievementGraphics />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: ANIMATION_CONFIG.duration, delay: ANIMATION_CONFIG.headerDelay }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span
              style={{
                background: "linear-gradient(90deg, #fde047, #facc15)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Achievements
            </span>
            <span className="text-white"> & Certifications</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            Professional certifications and achievements that demonstrate expertise and
            commitment to continuous learning in cutting-edge technologies.
          </p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: ANIMATION_CONFIG.duration,
                delay: ANIMATION_CONFIG.cardStartDelay + (index * ANIMATION_CONFIG.cardStagger)
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              onMouseEnter={() => setHoveredCard(achievement.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative cursor-pointer"
            >
              {/* Card */}
              <div
                className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-2xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300 h-full flex flex-col overflow-hidden"
                style={{
                  boxShadow: hoveredCard === achievement.id 
                    ? `0 20px 40px ${achievement.color}20, 0 0 60px ${achievement.color}15` 
                    : 'none'
                }}
              >
                {/* Background Gradient Effect */}
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at center, ${achievement.color}15 0%, transparent 60%)`,
                    opacity: hoveredCard === achievement.id ? 0.8 : 0.3,
                    transition: "opacity 0.3s ease"
                  }}
                />

                {/* Card Background Pattern */}
                <div 
                  className="absolute inset-0 opacity-5 pointer-events-none"
                  style={{
                    backgroundImage: `radial-gradient(circle, ${achievement.color} 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Animated Diagonal Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-5">
                  {[...Array(6)].map((_, i) => (
                    <motion.line
                      key={`line-${i}`}
                      x1="0" y1={`${i * 20}%`}
                      x2="100%" y2={`${(i * 20) + 100}%`}
                      stroke={achievement.color}
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={hoveredCard === achievement.id ? { pathLength: 1 } : { pathLength: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                    />
                  ))}
                </svg>

                {/* Animated Corners */}
                {['tl', 'tr', 'bl', 'br'].map((corner, idx) => (
                  <motion.div
                    key={corner}
                    className={`absolute w-12 h-12 z-20 ${
                      corner === 'tl' ? 'top-0 left-0 border-l-2 border-t-2 rounded-tl-2xl' :
                      corner === 'tr' ? 'top-0 right-0 border-r-2 border-t-2 rounded-tr-2xl' :
                      corner === 'bl' ? 'bottom-0 left-0 border-l-2 border-b-2 rounded-bl-2xl' :
                      'bottom-0 right-0 border-r-2 border-b-2 rounded-br-2xl'
                    }`}
                    style={{ borderColor: achievement.color }}
                    initial={{ opacity: 0, width: 0, height: 0 }}
                    animate={hoveredCard === achievement.id ? { 
                      opacity: 1, 
                      width: "48px", 
                      height: "48px" 
                    } : { 
                      opacity: 0, 
                      width: 0, 
                      height: 0 
                    }}
                    transition={{ duration: 0.3, ease: "easeOut", delay: idx * 0.05 }}
                  />
                ))}

                {/* Top Corner Dot with Pulse */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 rounded-full z-30"
                  style={{ backgroundColor: achievement.dotColor }}
                  animate={{
                    scale: hoveredCard === achievement.id ? [1, 1.3, 1] : 1,
                    opacity: hoveredCard === achievement.id ? [1, 0.5, 1] : 1,
                    boxShadow: hoveredCard === achievement.id 
                      ? [`0 0 0 0 ${achievement.color}80`, `0 0 0 10px ${achievement.color}00`]
                      : 'none'
                  }}
                  transition={{
                    duration: 1,
                    repeat: hoveredCard === achievement.id ? Infinity : 0
                  }}
                />

                {/* Icon with Enhanced Animation */}
                <motion.div 
                  className="text-6xl mb-4 relative z-10"
                  animate={{
                    y: hoveredCard === achievement.id ? [-15, 0, -15] : [0, -15, 0],
                    rotate: [0, 5, -5, 0],
                    scale: hoveredCard === achievement.id ? [1, 1.1, 1] : 1,
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.2
                  }}
                >
                  {achievement.icon}
                  
                  {/* Glow effect behind icon on hover */}
                  {hoveredCard === achievement.id && (
                    <motion.div
                      className="absolute inset-0 blur-2xl"
                      style={{ backgroundColor: achievement.color, opacity: 0.3 }}
                      animate={{
                        scale: [1, 1.5, 1],
                        opacity: [0.3, 0.5, 0.3],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                      }}
                    />
                  )}
                </motion.div>

                {/* Title */}
                <h3
                  className="text-xl md:text-2xl font-bold mb-2 relative z-10"
                  style={{ color: achievement.color }}
                >
                  {achievement.title}
                </h3>

                {/* Organization */}
                <p className="text-gray-400 text-sm mb-1 relative z-10">
                  {achievement.organization}
                </p>

                {/* Year */}
                <p className="text-gray-500 text-xs mb-4 relative z-10">
                  {achievement.year}
                </p>

                {/* Description */}
                <p className="text-gray-300 text-sm mb-4 flex-grow relative z-10">
                  {achievement.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {achievement.tags.map((tag, idx) => (
                    <motion.span
                      key={idx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-1 rounded-full text-xs font-medium border"
                      style={{
                        borderColor: achievement.color,
                        color: achievement.color,
                        backgroundColor: `${achievement.color}10`
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
