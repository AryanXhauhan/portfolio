import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { techStackData } from "../constants";

const ANIMATION_CONFIG = {
  initialDelay: 0.3,
  headerDelay: 0.5,
  buttonStartDelay: 0.8,
  buttonStagger: 0.3,
  categoryTransitionDelay: 0.3,
  skillCardStagger: 0.2,
  skillCardDuration: 0.2,
  progressBarDelay: 0.5,
  progressBarDuration: 0.5,
  duration: 0.6
};

// Floating Technical Graphics Component - FIXED VISIBILITY
const FloatingTechGraphics = () => {
  const techSymbols = [
    { symbol: '</>',  top: '10%', left: '5%', delay: 0, duration: 8 },
    { symbol: '{}', top: '20%', right: '8%', delay: 1, duration: 10 },
    { symbol: '[ ]', top: '60%', left: '10%', delay: 2, duration: 9 },
    { symbol: '( )', top: '75%', right: '15%', delay: 0.5, duration: 11 },
    { symbol: '=>', top: '40%', right: '5%', delay: 1.5, duration: 7 },
    { symbol: '/* */', top: '85%', left: '20%', delay: 2.5, duration: 12 },
    { symbol: '&&', top: '15%', left: '85%', delay: 0.8, duration: 9 },
    { symbol: '||', top: '70%', right: '25%', delay: 1.8, duration: 10 },
  ];

  const binaryPatterns = [
    { pattern: '101010', top: '25%', left: '15%', delay: 0.3, duration: 15 },
    { pattern: '110011', top: '50%', right: '20%', delay: 1.2, duration: 13 },
    { pattern: '010101', top: '80%', left: '80%', delay: 2, duration: 14 },
    { pattern: '111000', top: '35%', left: '70%', delay: 0.7, duration: 16 },
  ];

  return (
    <>
      {/* Floating Tech Symbols - INCREASED VISIBILITY */}
      {techSymbols.map((item, index) => (
        <motion.div
          key={`symbol-${index}`}
          className="absolute text-purple-500 opacity-25 font-mono font-bold text-4xl pointer-events-none"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {item.symbol}
        </motion.div>
      ))}

      {/* Floating Binary - INCREASED VISIBILITY */}
      {binaryPatterns.map((item, index) => (
        <motion.div
          key={`binary-${index}`}
          className="absolute text-blue-400 opacity-20 font-mono text-sm pointer-events-none"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          animate={{
            y: [0, -40, 0],
          }}
          transition={{
            duration: item.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: item.delay,
          }}
        >
          {item.pattern}
        </motion.div>
      ))}

      {/* Circuit Lines - MORE VISIBLE */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        <motion.line
          x1="0" y1="20%" x2="100%" y2="20%"
          stroke="url(#gradient1)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <motion.line
          x1="0" y1="50%" x2="100%" y2="50%"
          stroke="url(#gradient2)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
        />
        <motion.line
          x1="0" y1="80%" x2="100%" y2="80%"
          stroke="url(#gradient3)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 2 }}
        />
        
        <motion.line
          x1="25%" y1="0" x2="25%" y2="100%"
          stroke="url(#gradient4)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        />
        <motion.line
          x1="75%" y1="0" x2="75%" y2="100%"
          stroke="url(#gradient5)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 5, repeat: Infinity, ease: "linear", delay: 1.5 }}
        />

        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0070ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#0070ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#0070ff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="1" />
            <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient4" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient5" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#0070ff" stopOpacity="0" />
            <stop offset="50%" stopColor="#0070ff" stopOpacity="1" />
            <stop offset="100%" stopColor="#0070ff" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Circles - MORE VISIBLE */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={`circle-${i}`}
          className="absolute w-32 h-32 rounded-full border-2 border-purple-500 opacity-15 pointer-events-none"
          style={{
            top: `${20 + i * 15}%`,
            left: `${10 + i * 20}%`,
          }}
          animate={{
            scale: [1, 1.5, 1],
            rotate: 360,
          }}
          transition={{
            duration: 20 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Animated Dots Grid - MORE VISIBLE */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            className="absolute w-2 h-2 bg-purple-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 0.6, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>
    </>
  );
};

const CategoryButton = ({ category, icon, isActive, onClick, color, delay, inView }) => (
  <motion.button
    onClick={onClick}
    className={`relative flex items-center gap-3 px-8 py-4 rounded-full font-bold text-base transition-all duration-300 border-2 whitespace-nowrap overflow-hidden ${
      isActive
        ? "text-white border-transparent shadow-2xl"
        : "bg-slate-800/50 text-gray-300 border-purple-900 hover:border-green-500"
    }`}
    initial={{ opacity: 0, scale: 0.8, y: 20 }}
    animate={
      inView 
        ? { 
            opacity: 1, 
            scale: [1, 1.05, 1],
            y: [10, -10, 10],
          } 
        : { opacity: 0, scale: 0.8, y: 20 }
    }
    transition={{ 
      opacity: { delay, duration: ANIMATION_CONFIG.duration },
      scale: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      },
      y: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay
      }
    }}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    style={{ position: 'relative' }}
  >
    {isActive && (
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: color === "#ca8a04" 
            ? "linear-gradient(135deg, #ca8a04, #f59e0b, #fbbf24)"
            : "linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    )}

    <div className="relative z-10 flex items-center gap-3">
      <img src={icon} alt={category} className="w-5 h-5 object-contain" />
      <span className="font-bold tracking-wide">{category}</span>
    </div>

    {isActive && (
      <motion.div
        className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
        style={{
          background: "linear-gradient(135deg, #fbbf24, #f59e0b)",
          boxShadow: "0 0 10px rgba(251, 191, 36, 0.8)",
        }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.3 }}
      />
    )}
  </motion.button>
);

const SkillCard = ({ skill, index }) => {
  const [progressWidth, setProgressWidth] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgressWidth(skill.proficiency);
    }, (ANIMATION_CONFIG.categoryTransitionDelay + (index * ANIMATION_CONFIG.skillCardStagger) + ANIMATION_CONFIG.progressBarDelay) * 1000);

    return () => clearTimeout(timer);
  }, [skill.proficiency, index]);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = ((y - centerY) / centerY) * 5;
    const rotateY = ((x - centerX) / centerX) * 5;
    
    setRotation(`rotateX(${-rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setRotation('rotateX(0deg) rotateY(0deg)');
    setIsHovered(false);
  };

  return (
    <div className="relative" style={{ perspective: '1000px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        whileHover={{ scale: 1.04 }}
        transition={{ 
          delay: ANIMATION_CONFIG.categoryTransitionDelay + (index * ANIMATION_CONFIG.skillCardStagger),
          duration: ANIMATION_CONFIG.skillCardDuration,
          ease: "easeOut"
        }}
        className="glass-morphism rounded-2xl p-4 md:p-6 text-center relative overflow-visible group h-full"
        style={{
          transform: rotation,
          transition: 'transform 0.3s ease-out',
          background: 'rgba(25, 34, 47, 0.6)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(0, 91, 218, 0.38)'
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
          style={{
            background: `radial-gradient(circle, ${skill.color.replace('rgb', 'rgba').replace(')', ', 0.125)')} 0%, transparent 70%)`
          }}
        />

        {/* Corner Animations */}
        {['tl', 'tr', 'bl', 'br'].map((corner, idx) => (
          <motion.div
            key={corner}
            className={`absolute w-8 h-8 border-2 ${
              corner === 'tl' ? 'top-0 left-0 border-l-2 border-t-2 rounded-tl-2xl' :
              corner === 'tr' ? 'top-0 right-0 border-r-2 border-t-2 rounded-tr-2xl' :
              corner === 'bl' ? 'bottom-0 left-0 border-l-2 border-b-2 rounded-bl-2xl' :
              'bottom-0 right-0 border-r-2 border-b-2 rounded-br-2xl'
            }`}
            style={{ borderColor: skill.color, opacity: 0 }}
            animate={isHovered ? {
              opacity: [0, 1, 1],
              width: ["0px", "32px", "32px"],
              height: ["0px", "32px", "32px"],
            } : { opacity: 0, width: "0px", height: "0px" }}
            transition={{ duration: 0.3, ease: "easeOut", delay: idx * 0.05 }}
          />
        ))}

        <motion.div
          className="absolute -inset-1 rounded-2xl blur-lg"
          style={{
            background: `linear-gradient(135deg, ${skill.color}, transparent)`,
            opacity: 0,
            zIndex: -1,
          }}
          animate={isHovered ? { opacity: 0.4 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        />

        <motion.div 
          className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-3 md:mb-4 relative"
          animate={isHovered ? {
            scale: [1, 1.2, 1.1],
            rotate: [0, -10, 10, -5, 5, 0],
            y: [0, -8, 0]
          } : { scale: 1, rotate: 0, y: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <img 
            src={skill.icon} 
            alt={skill.name} 
            className="w-full h-full object-contain filter drop-shadow-lg"
            style={{ filter: 'drop-shadow(0 0 5px rgba(0, 0, 0, 0.3))' }}
          />
        </motion.div>

        <h3 className="text-sm md:text-base font-bold text-white mb-2 md:mb-3">
          {skill.name}
        </h3>

        <div className="mb-2">
          <div className="w-full bg-gray-700/50 rounded-full h-1.5 md:h-2 overflow-hidden">
            <div 
              className="h-full rounded-full relative overflow-hidden transition-all duration-500 ease-out" 
              style={{ backgroundColor: skill.color, width: `${progressWidth}%` }}
            >
              <motion.div 
                className="h-full bg-white/30 rounded-full absolute top-0 left-0"
                initial={{ transform: 'translateX(-100%)' }}
                animate={{ transform: 'translateX(300%)' }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 1.5,
                  ease: "easeInOut"
                }}
                style={{ width: "40%" }}
              />
            </div>
          </div>

          <div className="flex justify-between items-center mt-1">
            <span className="text-xs text-gray-400">{skill.proficiency}%</span>
            <span className="text-xs text-gray-400">{skill.years}</span>
          </div>
        </div>

        <motion.div 
          className="absolute top-2 right-2 w-2 h-2 rounded-full"
          style={{ backgroundColor: skill.color }}
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

const TechnologyStack = () => {
  const [activeCategory, setActiveCategory] = useState(techStackData[0].category);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3, rootMargin: "0px" }
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

  const activeCategoryData = techStackData.find(
    (cat) => cat.category === activeCategory
  );

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center px-8 py-24"
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(26, 5, 66, 0.68) 0%, transparent 70%)",
          zIndex: 0
        }}
      />

      {/* Floating Technical Graphics */}
      <FloatingTechGraphics />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: ANIMATION_CONFIG.duration, delay: ANIMATION_CONFIG.headerDelay }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-7xl font-extrabold mb-4"
            style={{
              background: "linear-gradient(0deg, #f8f8f8, #0070ff, #8b00ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block"
            }}
          >
            Technical Stack
          </h2>
          <p className="text-gray-400 text-2xl max-w-4xl mx-auto">
            A comprehensive toolkit of cutting-edge technologies, refined through years
            of innovation and premium project delivery.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {techStackData.map((category, index) => (
            <CategoryButton
              key={category.category}
              category={category.category}
              icon={category.icon}
              color={category.color}
              isActive={activeCategory === category.category}
              onClick={() => setActiveCategory(category.category)}
              delay={ANIMATION_CONFIG.buttonStartDelay + (index * ANIMATION_CONFIG.buttonStagger)}
              inView={inView}
            />
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            {activeCategoryData?.skills.map((skill, index) => (
              <SkillCard key={skill.name} skill={skill} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default TechnologyStack;
