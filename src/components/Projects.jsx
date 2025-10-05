// src/components/Projects.jsx
import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData } from "../constants"; 

const ANIMATION_CONFIG = {
  headerDelay: 0.2,
  cardStartDelay: 0.4,
  cardStagger: 0.15,
  duration: 0.6,
};

// Enhanced Floating Project Graphics
const FloatingProjectGraphics = () => {
  const codeSymbols = [
    { symbol: '</>', top: '10%', left: '5%', delay: 0, duration: 10, color: '#fbbf24' },
    { symbol: '{}', top: '25%', right: '8%', delay: 1, duration: 12, color: '#a855f7' },
    { symbol: '<>', top: '60%', left: '8%', delay: 2, duration: 11, color: '#fb923c' },
    { symbol: '( )', top: '80%', right: '12%', delay: 0.5, duration: 9, color: '#22d3ee' },
    { symbol: '[]', top: '40%', right: '5%', delay: 1.5, duration: 13, color: '#ef4444' },
  ];

  return (
    <>
      {/* Floating Code Symbols */}
      {codeSymbols.map((item, index) => (
        <motion.div
          key={`code-${index}`}
          className="absolute font-mono font-bold text-5xl pointer-events-none opacity-10"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
            color: item.color,
          }}
          animate={{
            y: [0, -50, 0],
            x: [0, 25, 0],
            rotate: [0, 15, -15, 0],
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

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(251, 191, 36, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Animated Circuit Connections */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        {[...Array(8)].map((_, i) => {
          const startX = (i * 12.5) + '%';
          const endX = ((i + 1) * 12.5) + '%';
          return (
            <motion.path
              key={`circuit-${i}`}
              d={`M ${startX} 0 L ${startX} 50% L ${endX} 50% L ${endX} 100%`}
              stroke="url(#projectGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.3,
              }}
            />
          );
        })}
        <defs>
          <linearGradient id="projectGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#a855f7" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#fb923c" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>

      {/* Floating Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{
            background: `linear-gradient(135deg, #fbbf24, #a855f7)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -120, 0],
            opacity: [0, 0.6, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Rotating Gradient Circles */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`gradient-circle-${i}`}
          className="absolute rounded-full pointer-events-none blur-3xl"
          style={{
            width: `${400 + i * 200}px`,
            height: `${400 + i * 200}px`,
            background: `radial-gradient(circle, ${
              i === 0 ? 'rgba(251, 191, 36, 0.1)' :
              i === 1 ? 'rgba(168, 85, 247, 0.1)' :
              'rgba(251, 146, 60, 0.1)'
            } 0%, transparent 70%)`,
            top: `${20 + i * 25}%`,
            left: `${10 + i * 30}%`,
          }}
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </>
  );
};

const Projects = () => {
  const [inView, setInView] = useState(false);
  const [hoveredProject, setHoveredProject] = useState(null);
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
      id="projects"
      className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center px-6 md:px-12 py-24"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(255, 225, 0, 0.09) 0%, transparent 70%)",
          zIndex: 0
        }}
      />

      {/* Enhanced Floating Graphics */}
      <FloatingProjectGraphics />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: ANIMATION_CONFIG.duration, delay: ANIMATION_CONFIG.headerDelay }}
          className="text-center mb-16"
        >
          <h2
            className="text-5xl md:text-6xl font-extrabold mb-6"
            style={{
              background: "linear-gradient(90deg, #fde047, #facc15, #fb923c, #a855f7)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              display: "inline-block"
            }}
          >
            Completed Projects
          </h2>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            A showcase of innovative projects demonstrating expertise in AI, web development, 
            game development, and cutting-edge technologies with real-world impact.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-12">
          {projectsData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{
                duration: ANIMATION_CONFIG.duration,
                delay: ANIMATION_CONFIG.cardStartDelay + (index * ANIMATION_CONFIG.cardStagger)
              }}
              className="relative"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Project Image/Card with Enhanced Graphics */}
                <motion.div
                  className="relative rounded-3xl overflow-hidden group"
                  style={{ perspective: "1000px" }}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image Container */}
                  <div className="relative h-[400px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl overflow-hidden border border-slate-700">
                    {/* Animated Scan Lines */}
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(251, 191, 36, 0.03) 2px, rgba(251, 191, 36, 0.03) 4px)',
                      }}
                      animate={{
                        backgroundPosition: ['0px 0px', '0px 100px'],
                      }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />

                    {/* Placeholder for image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>

                    {/* Hover overlay with gradient */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Feature badges at bottom */}
                    <div className="absolute bottom-6 left-6 right-6 flex gap-4">
                      {project.featureDetails.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ y: 20, opacity: 0 }}
                          animate={hoveredProject === project.id ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
                          transition={{ delay: idx * 0.1, duration: 0.3 }}
                          className="flex-1 bg-black/60 backdrop-blur-md rounded-xl p-4 border border-yellow-500/30"
                        >
                          <h4 className="text-yellow-400 font-bold text-sm mb-1">{feature.title}</h4>
                          <p className="text-gray-300 text-xs">{feature.subtitle}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Animated corners */}
                    <motion.div
                      className="absolute top-0 left-0 w-16 h-16 border-l-4 border-t-4 rounded-tl-3xl"
                      style={{ borderColor: project.color }}
                      initial={{ opacity: 0, width: 0, height: 0 }}
                      animate={hoveredProject === project.id ? { opacity: 1, width: "64px", height: "64px" } : { opacity: 0, width: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute bottom-0 right-0 w-16 h-16 border-r-4 border-b-4 rounded-br-3xl"
                      style={{ borderColor: project.color }}
                      initial={{ opacity: 0, width: 0, height: 0 }}
                      animate={hoveredProject === project.id ? { opacity: 1, width: "64px", height: "64px" } : { opacity: 0, width: 0, height: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    />
                  </div>
                </motion.div>

                {/* Project Details */}
                <div className="space-y-6">
                  {/* Project Number */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: ANIMATION_CONFIG.cardStartDelay + (index * ANIMATION_CONFIG.cardStagger) + 0.1 }}
                  >
                    <span className="text-yellow-400 text-lg font-bold">{project.number}</span>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: ANIMATION_CONFIG.cardStartDelay + (index * ANIMATION_CONFIG.cardStagger) + 0.2 }}
                    className="text-4xl md:text-5xl font-bold"
                    style={{
                      background: "linear-gradient(90deg, #fde047, #facc15, #fb923c, #a855f7)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      display: "inline-block"
                    }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: ANIMATION_CONFIG.cardStartDelay + (index * ANIMATION_CONFIG.cardStagger) + 0.3 }}
                    className="text-yellow-400 text-sm"
                  >
                    {project.date}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: ANIMATION_CONFIG.cardStartDelay + (index * ANIMATION_CONFIG.cardStagger) + 0.4 }}
                    className="text-gray-300 text-base leading-relaxed"
                  >
                    {project.description}
                  </motion.p>

                  {/* Tech Tags */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: ANIMATION_CONFIG.cardStartDelay + (index * ANIMATION_CONFIG.cardStagger) + 0.5 }}
                    className="flex flex-wrap gap-3"
                  >
                    {project.tags.map((tag, idx) => (
                      <motion.span
                        key={idx}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-6 py-1 rounded-full text-sm font-medium border-2 border-yellow-500 text-yellow-400 bg-yellow-500/10 hover:bg-yellow-500/20 transition-colors"
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  {/* Action Buttons - ENHANCED */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ delay: ANIMATION_CONFIG.cardStartDelay + (index * ANIMATION_CONFIG.cardStagger) + 0.6 }}
                    className="flex gap-4 pt-4"
                  >
                    {/* View Project Button with Enhanced Effects */}
                    <div className="relative">
                      <motion.a
                        href={project.demoLink}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-base bg-gradient-to-r from-yellow-400 to-orange-500 text-black transition-all duration-300 shadow-lg hover:shadow-yellow-400/50 overflow-hidden group"
                      >
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400"
                          initial={{ x: '-100%' }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                        <span className="relative z-10">View Project →</span>
                      </motion.a>
                      
                      {/* Golden Reflection Glow */}
                      <motion.div
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-8 rounded-full blur-xl"
                        style={{
                          background: 'radial-gradient(ellipse, rgba(234, 179, 8, 0.6) 0%, rgba(234, 179, 8, 0.3) 40%, transparent 70%)',
                        }}
                        animate={{
                          opacity: [0.4, 0.7, 0.4],
                          scale: [0.9, 1.1, 0.9],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </div>

                    {/* Technical Details Button */}
                    <motion.a
                      href={project.detailsLink}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full font-bold text-base border-2 border-yellow-400 text-yellow-400 hover:bg-yellow-400/10 transition-all duration-300 overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-yellow-400/10"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10">Technical Details</span>
                    </motion.a>
                  </motion.div>
                </div>
              </div>

              {/* Divider line with glow */}
              {index < projectsData.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ delay: ANIMATION_CONFIG.cardStartDelay + (index * ANIMATION_CONFIG.cardStagger) + 0.8, duration: 0.8 }}
                  className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent mt-12 origin-left"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
