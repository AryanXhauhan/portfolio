import React from "react";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { services } from "../constants";
import profileImage from '../assets/profile.JPG';

// Premium Floating About Graphics
const FloatingAboutGraphics = () => {
  const techIcons = [
    { emoji: '👨‍💻', top: '12%', left: '5%', delay: 0, duration: 10 },
    { emoji: '🎯', top: '28%', right: '8%', delay: 1, duration: 12 },
    { emoji: '💻', top: '55%', left: '6%', delay: 2, duration: 11 },
    { emoji: '🚀', top: '75%', right: '10%', delay: 0.5, duration: 9 },
    { emoji: '⚡', top: '40%', right: '5%', delay: 1.5, duration: 13 },
    { emoji: '🌟', top: '18%', left: '88%', delay: 0.8, duration: 10 },
  ];

  return (
    <>
      {/* Floating Tech Icons */}
      {techIcons.map((item, index) => (
        <motion.div
          key={`tech-icon-${index}`}
          className="absolute text-5xl pointer-events-none opacity-10"
          style={{
            top: item.top,
            left: item.left,
            right: item.right,
          }}
          animate={{
            y: [0, -50, 0],
            rotate: [0, 20, -20, 0],
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

      {/* Orbiting Circles Around Center */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`orbit-${i}`}
          className="absolute rounded-full border-2 pointer-events-none"
          style={{
            width: `${250 + i * 150}px`,
            height: `${250 + i * 150}px`,
            top: '50%',
            left: '50%',
            marginLeft: `-${125 + i * 75}px`,
            marginTop: `-${125 + i * 75}px`,
            borderColor: i % 2 === 0 ? 'rgba(168, 85, 247, 0.1)' : 'rgba(251, 191, 36, 0.1)',
          }}
          animate={{
            rotate: i % 2 === 0 ? 360 : -360,
          }}
          transition={{
            duration: 30 + i * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Floating Particles */}
      {[...Array(25)].map((_, i) => (
        <motion.div
          key={`about-particle-${i}`}
          className="absolute w-2 h-2 rounded-full pointer-events-none"
          style={{
            background: `linear-gradient(135deg, ${
              i % 3 === 0 ? '#a855f7' : i % 3 === 1 ? '#fbbf24' : '#f97316'
            }, transparent)`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -120, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Animated Connecting Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        {[...Array(8)].map((_, i) => {
          const startX = (i * 12.5) + '%';
          const endX = ((i + 1) * 12.5) + '%';
          return (
            <motion.path
              key={`connection-${i}`}
              d={`M ${startX} 20% Q ${endX} 50% ${startX} 80%`}
              stroke="url(#aboutGradient)"
              strokeWidth="2"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.5 }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          );
        })}
        <defs>
          <linearGradient id="aboutGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#fbbf24" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#f97316" stopOpacity="0.6" />
          </linearGradient>
        </defs>
      </svg>

      {/* Gradient Blobs */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`blob-${i}`}
          className="absolute rounded-full pointer-events-none blur-3xl"
          style={{
            width: `${500 + i * 200}px`,
            height: `${500 + i * 200}px`,
            background: `radial-gradient(circle, ${
              i === 0 ? 'rgba(168, 85, 247, 0.15)' :
              i === 1 ? 'rgba(251, 191, 36, 0.15)' :
              'rgba(249, 115, 22, 0.15)'
            } 0%, transparent 70%)`,
            top: `${15 + i * 30}%`,
            left: `${5 + i * 35}%`,
          }}
          animate={{
            x: [0, 150, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25 + i * 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 3,
          }}
        />
      ))}

    
    </>
  );
};

const cardVariants = {
  hidden: { opacity: 0, x: 80 },
  visible: { opacity: 1, x: 0 },
};

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[200px] w-full cursor-pointer">
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className="green-pink-gradient p-[1.5px] rounded-[20px] shadow-xl transition-all hover:scale-105 relative overflow-hidden group"
    >
      {/* Card Shine Effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
        initial={{ x: '-100%' }}
        whileHover={{ x: '100%' }}
        transition={{ duration: 0.6 }}
      />
      
      <div className="bg-gradient-to-r from-[#16182b] to-[#1a1d2a] rounded-[20px] py-9 px-7 min-h-[250px] flex flex-col items-center justify-center relative">
        {/* Dot Pattern */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle, #a855f7 1px, transparent 1px)`,
            backgroundSize: '20px 20px',
          }}
        />
        
        <motion.img 
          src={icon} 
          alt={title} 
          className="w-14 h-14 object-contain mb-3 relative z-10"
          whileHover={{
            rotate: [0, -10, 10, -10, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 0.5 }}
        />
        <h3 className="text-white text-base font-semibold text-center relative z-10">{title}</h3>
      </div>
    </motion.div>
  </Tilt>
);

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.3 } },
};

const AboutSection = () => (
  <section 
    id="about"
    className="relative w-full min-h-screen bg-black overflow-hidden flex flex-col items-center justify-center px-6 py-20"
  >
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: "radial-gradient(circle at center, rgba(26, 5, 66, 0.68) 0%, transparent 60%)",
        zIndex: 0,
      }}
    />

    {/* Enhanced Floating Graphics */}
    <FloatingAboutGraphics />

    <div className="relative z-10 max-w-6xl w-full">
      {/* Header Section */}
      <motion.div 
        className="mb-8 text-white"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-6xl font-extrabold mb-4">
          <span 
            style={{
              background: 'linear-gradient(90deg, #ffef9fff, #ba81ffff, #f97316)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'inline-block'
            }}
          >
            About Me
          </span>
        </h2>

        <h3 
          className="text-3xl font-bold mb-4"
          style={{
            background: 'linear-gradient(90deg, hsla(48, 100%, 84%, 1.00), #ff7300ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block'
          }}
        >
          Aryan Chauhan
        </h3>

        <p className="text-lg text-purple-300 font-semibold mb-8">
          Tech Entrepreneur · Software Engineer · Content Creator
        </p>
      </motion.div>

      {/* First paragraph on left + Profile image on right */}
      <div className="flex flex-col md:flex-row justify-start items-start gap-6 mb-8 text-white">
        <motion.div 
          className="flex-1 max-w-2xl"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg leading-relaxed text-gray-200">
            I am a B.Tech Computer Science undergraduate with a strong track record in building AI-driven SaaS products, fintech trading systems, and scalable web applications.
            <br /><br />
            As the founder of <span className="text-yellow-400 font-bold">AruTradeX</span> and <span className="text-purple-400 font-bold">AruAlgo</span>, I have successfully taken multiple products from initial concept through to monetization.
            <br /><br />
            Driven by a passion for fintech innovation and product-led growth, I have hands-on experience across full-stack development, cloud infrastructure, algorithmic trading, and modern financial technologies.
            <br /><br />
            In just <span className="text-orange-300 font-bold">three months</span>, I generated over <span className="text-orange-400 font-bold">₹4 lakhs</span> in revenue by developing and selling proprietary algorithmic trading indicators on <span className="text-yellow-400 font-bold">TradingView</span>, including <span className="text-purple-400 font-bold">AruAlgo v6 Pro</span>, <span className="text-purple-400 font-bold">v6.6 Pro</span>, and <span className="text-purple-400 font-bold">v6.7 Elite</span>. Through <span className="text-yellow-300 font-bold">Instagram marketing</span>, I built a community of <span className="text-orange-300 font-bold">2,000+</span> active traders while achieving <span className="text-yellow-400 font-bold">60-90% live market accuracy</span> across all indicators.
          </p>
        </motion.div>

        <motion.div 
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div
            className="relative rounded-3xl shadow-2xl overflow-hidden group"
            style={{ width: 350, height: 432 }}
          >
            {/* Animated Border Glow */}
            <motion.div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(45deg, #fbbf24, #f97316, #a855f7, #fbbf24)',
                backgroundSize: '400% 400%',
              }}
              animate={{
                backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            {/* Image with Inner Border */}
            <div className="absolute inset-[4px] rounded-3xl overflow-hidden">
              <img
                src={profileImage}
                alt="profile"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
          </div>
        </motion.div>
      </div>

      {/* Remaining paragraphs */}
      <motion.div 
        className="space-y-6 leading-relaxed text-gray-200 text-lg mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <p>
          Alongside entrepreneurship and engineering, I actively share insights and strategies as a <span className="text-yellow-400 font-bold">content creator</span>, helping others capitalize on <span className="text-yellow-300 font-bold">algorithmic trading</span> and <span className="text-orange-300 font-bold">technology trends</span>. Through my <span className="text-purple-400 font-bold">Instagram</span> and <span className="text-purple-400 font-bold">Telegram channels</span>, I regularly publish <span className="text-orange-300 font-bold">educational content</span> covering trading strategies, risk management, and market analysis.
        </p>
      </motion.div>

      {/* Education Section */}
      <motion.div 
        className="mb-12 max-w-md"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <h4 
          className="font-bold mb-4 text-3xl"
          style={{
            background: 'linear-gradient(90deg, #ffefaeff, #fb923c)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            display: 'inline-block'
          }}
        >
          Education
        </h4>

        <motion.div 
          className="bg-[#18181b] rounded-xl p-6 border-2 border-yellow-600 shadow-lg text-white relative overflow-hidden group"
          whileHover={{ scale: 1.02, borderColor: '#fbbf24' }}
          transition={{ duration: 0.3 }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-yellow-600/10 to-orange-600/10 opacity-0 group-hover:opacity-100"
            transition={{ duration: 0.3 }}
          />
          
          <strong className="relative z-10">B.Tech Computer Science & Engineering</strong>
          <p className="text-gray-300 mt-1 relative z-10">Graphic Era Hill University</p>
        </motion.div>
      </motion.div>

      {/* Service Cards */}
      <motion.div
        className="flex flex-wrap justify-center gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
