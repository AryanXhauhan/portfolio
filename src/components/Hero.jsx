import { motion } from "framer-motion";
import { useState } from "react";
import Particles from "@tsparticles/react";

const codeSnippets = [
  `const innovation = () => {\n  return 'ai + creativity';\n};`,
  `const greet = () => console.log('Welcome to luxury dev!');`,
];

const floatingPositions = [
  { top: "12%", left: "4%", delay: 1 },
  { top: "72%", right: "12%", delay: 1.8 },
];

const floatingRects = [
  { top: "14%", left: "72%", rotate: 15, delay: 0.6 },
  { top: "64%", right: "75%", rotate: -12, delay: 1.4 },
];

const sparkleShapes = [
  { top: "25%", left: "75%", size: 8, delay: 0.8 },
  { top: "55%", left: "80%", size: 6, delay: 1.6 },
  { top: "75%", right: "10%", size: 10, delay: 2.4 },
  { top: "30%", left: "20%", size: 7, delay: 3.2 },
];

const floatingCircles = [
  { top: "15%", right: "15%", size: 20, delay: 1.0 },
  { top: "45%", left: "85%", size: 16, delay: 2.0 },
  { top: "70%", left: "5%", size: 18, delay: 3.0 },
];

// Enhanced Background Graphics Component
const EnhancedBackgroundGraphics = () => {
  return (
    <>
      {/* Animated Grid Pattern */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(212, 175, 55, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(212, 175, 55, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />

      {/* Flowing Energy Streams */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
        {[...Array(6)].map((_, i) => (
          <motion.path
            key={`stream-${i}`}
            d={`M ${i * 200} 0 Q ${i * 200 + 100} ${300 + i * 50} ${i * 200} ${600} T ${i * 200} ${1200}`}
            stroke="url(#streamGradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1, 0],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          />
        ))}
        <defs>
          <linearGradient id="streamGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
            <stop offset="50%" stopColor="#8b5cf6" stopOpacity="1" />
            <stop offset="100%" stopColor="#d4af37" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>


      {/* Floating Tech Nodes */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, #d4af37, #8b5cf6)',
            boxShadow: '0 0 15px rgba(212, 175, 55, 0.6)',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Animated Light Beams */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        {[...Array(8)].map((_, i) => {
          const angle = (i * 360) / 8;
          return (
            <motion.line
              key={`beam-${i}`}
              x1="50%" y1="50%"
              x2={`${50 + 45 * Math.cos((angle * Math.PI) / 180)}%`}
              y2={`${50 + 45 * Math.sin((angle * Math.PI) / 180)}%`}
              stroke="url(#beamGradient)"
              strokeWidth="3"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          );
        })}
        <defs>
          <linearGradient id="beamGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#d4af37" stopOpacity="0" />
            <stop offset="50%" stopColor="#d4af37" stopOpacity="1" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Pulsing Corner Accents */}
      {[
        { top: 0, left: 0, rotate: 0 },
        { top: 0, right: 0, rotate: 90 },
        { bottom: 0, left: 0, rotate: -90 },
        { bottom: 0, right: 0, rotate: 180 },
      ].map((pos, i) => (
        <motion.div
          key={`corner-${i}`}
          className="absolute w-40 h-40 pointer-events-none"
          style={{
            ...pos,
            background: 'radial-gradient(circle at center, rgba(212, 175, 55, 0.2), transparent 70%)',
            transform: `rotate(${pos.rotate}deg)`,
          }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: i * 0.5,
          }}
        />
      ))}


      {/* Dynamic Data Points */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={`datapoint-${i}`}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            background: i % 2 === 0 ? '#d4af37' : '#8b5cf6',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 2, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 4,
          }}
        />
      ))}

      {/* Gradient Mesh Blobs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`blob-${i}`}
          className="absolute rounded-full pointer-events-none blur-3xl"
          style={{
            width: `${400 + i * 150}px`,
            height: `${400 + i * 150}px`,
            background: `radial-gradient(circle, ${
              i % 2 === 0 
                ? 'rgba(212, 175, 55, 0.1)' 
                : 'rgba(139, 92, 246, 0.1)'
            } 0%, transparent 70%)`,
            top: `${10 + i * 25}%`,
            left: `${15 + i * 20}%`,
          }}
          animate={{
            x: [0, 150, 0],
            y: [0, 100, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 25 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2,
          }}
        />
      ))}
    </>
  );
};

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-2xl font-bold text-yellow-400">
            Aryan Chauhan
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 text-gray-300 font-semibold">
            <a href="#about" className="hover:text-yellow-400 transition-colors">
              About
            </a>
            <a href="#projects" className="hover:text-yellow-400 transition-colors">
              Projects
            </a>
            <a href="#skills" className="hover:text-yellow-400 transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-yellow-400 transition-colors">
              Experience
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition-colors">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-yellow-400 text-2xl"
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black/95 border-t border-gray-800"
          >
            <div className="flex flex-col gap-4 px-6 py-4 text-gray-300 font-semibold">
              <a
                href="#about"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </a>
              <a
                href="#projects"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="hover:text-yellow-400 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Light gradient overlay in center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at center, rgba(26, 5, 66, 0.68) 0%, transparent 60%)",
          zIndex: 0,
        }}
      />

      {/* ENHANCED BACKGROUND GRAPHICS */}
      <EnhancedBackgroundGraphics />

      <Particles
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
            },
            modes: { repulse: { distance: 100 }, push: { quantity: 4 } },
          },
          particles: {
            color: { value: "#d4af37" },
            links: {
              color: "#d4af37",
              distance: 120,
              enable: true,
              opacity: 0.25,
              width: 1,
            },
            move: { enable: true, speed: 1 },
            number: { density: { enable: true, area: 800 }, value: 46 },
            opacity: { value: 0.35 },
            shape: { type: "circle" },
            size: { random: true, value: 3 },
          },
        }}
        className="absolute inset-0"
      />

      {/* Minimal Sparkle Elements */}
      {sparkleShapes.map(({ top, left, right, size, delay }, idx) => (
        <motion.div
          key={`sparkle-${idx}`}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            delay,
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute"
          style={{
            top,
            left,
            right,
            width: size,
            height: size,
            background: "radial-gradient(circle, #d4af37 0%, rgba(212, 175, 55, 0.5) 50%, transparent 100%)",
            borderRadius: "50%",
            filter: "blur(1px)",
          }}
          aria-hidden="true"
        />
      ))}

      {/* Floating Circles */}
      {floatingCircles.map(({ top, left, right, size, delay }, idx) => (
        <motion.div
          key={`circle-${idx}`}
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0.1, 0.25, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{
            delay,
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute rounded-full border border-purple-400/30"
          style={{
            top,
            left,
            right,
            width: size,
            height: size,
            background: "rgba(139, 92, 246, 0.1)",
          }}
          aria-hidden="true"
        />
      ))}

      {codeSnippets.map((snippet, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 0.95,
            y: [0, 8, 0],
          }}
          transition={{
            delay: floatingPositions[i].delay,
            opacity: { duration: 0.8 },
            y: {
              duration: 3.5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            },
          }}
          className="absolute bg-[#18181b] border border-[#423b51] rounded-xl p-5 w-[273px] shadow-2xl font-mono text-[#8b5cf6]"
          style={{
            top: floatingPositions[i].top,
            left: floatingPositions[i].left,
            right: floatingPositions[i].right,
          }}
        >
          <div className="flex space-x-2 mb-3">
            <span className="w-3 h-3 rounded-full bg-[#ff605c]" />
            <span className="w-3 h-3 rounded-full bg-[#ffbd44]" />
            <span className="w-3 h-3 rounded-full bg-[#00ca56]" />
          </div>
          <pre className="text-sm leading-snug whitespace-pre-wrap">{snippet}</pre>
        </motion.div>
      ))}

      {/* Floating outlined rectangles */}
      {floatingRects.map(({ top, left, right, rotate, delay }, i) => (
        <motion.div
          key={`rect-${i}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5, rotate, scale: [1, 1.08, 1] }}
          transition={{ delay, duration: 8, repeat: Infinity }}
          className="absolute border-2 border-gradient-to-r from-[#d4af37] to-[#8b5cf6] rounded-lg w-32 h-20"
          style={{ top, left, right }}
          aria-hidden="true"
        />
      ))}

      {/* Center Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-5">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-purple-400 to-yellow-600 leading-tight"
        >
          Aryan Chauhan
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-7 text-[#ded4cf] text-2xl max-w-3xl leading-normal"
        >
          Full Stack Developer & AI Engineer
          <br />
          Elevating digital experiences with <span className="text-[#FA8115] font-bold">AI-driven innovations</span>, <span className="text-purple-400 font-bold">cloud-native architectures</span>, and <span className="text-yellow-400 font-bold">scalable luxury interfaces</span>.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-12 flex justify-center gap-6"
        >
          <a href="#projects">
            <button className="px-8 py-4 bg-gradient-to-r from-purple-300 to-orange-300 text-black rounded-full font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg">
              Explore Projects
            </button>
          </a>
          <a href="#contact">
            <button className="px-8 py-4 border-2 border-[#FA8115] text-[#FA8115] rounded-full font-bold text-lg hover:bg-[#FA8115] hover:text-black transition-all duration-300">
              Contact Me
            </button>
          </a>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }}
        className="absolute bottom-10 w-full flex justify-center items-center"
      >
        <a href="#about" className="relative">
          <div className="w-6 h-10 border-2 border-yellow-400 rounded-full flex justify-center items-center">
            <motion.div
              animate={{ y: [0, 11, 0] }}
              transition={{ duration: 1.7, repeat: Infinity, repeatType: "loop" }}
              className="w-1 h-2 rounded-full bg-gradient-to-br from-yellow-600 to-purple-400 mb-1"
            />
          </div>
          <span className="absolute w-full flex justify-center text-xs text-gray-400 -bottom-4">Scroll</span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
