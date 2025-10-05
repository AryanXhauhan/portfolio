// src/components/CursorSparkle.jsx
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CursorSparkle = () => {
  const [sparkles, setSparkles] = useState([]);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let moveTimeout;
    let sparkleInterval;

    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      setIsMoving(true);

      // Clear previous timeout
      clearTimeout(moveTimeout);
      
      // Generate sparkles while moving
      const newSparkle = {
        id: Date.now() + Math.random(),
        x: e.clientX,
        y: e.clientY,
        angle: Math.random() * 360,
        distance: Math.random() * 80 + 40,
        size: Math.random() * 6 + 3,
        duration: Math.random() * 0.8 + 0.5,
      };
      
      setSparkles(prev => [...prev.slice(-20), newSparkle]);

      // Set cursor as stopped after 100ms
      moveTimeout = setTimeout(() => {
        setIsMoving(false);
      }, 100);
    };

    // Generate pulse sparkles when cursor is stopped
    sparkleInterval = setInterval(() => {
      if (!isMoving && cursorPosition.x !== 0) {
        const pulseSparkles = Array.from({ length: 8 }, (_, i) => ({
          id: Date.now() + i,
          x: cursorPosition.x,
          y: cursorPosition.y,
          angle: (i * 360) / 8,
          distance: Math.random() * 60 + 30,
          size: Math.random() * 5 + 2,
          duration: 1,
        }));
        setSparkles(prev => [...prev.slice(-20), ...pulseSparkles]);
      }
    }, 300);

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(moveTimeout);
      clearInterval(sparkleInterval);
    };
  }, [isMoving, cursorPosition]);

  // Remove sparkles after animation
  useEffect(() => {
    if (sparkles.length > 0) {
      const timer = setTimeout(() => {
        setSparkles(prev => prev.slice(1));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [sparkles]);

  return (
    <>
       {/* Custom Cursor Dot - INSTANT UPDATE (NO ANIMATION) */}
      <motion.div
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          x: '-50%',
          y: '-50%',
        }}
        transition={{ duration: 0 }} 
      >
        {/* Center Glow */}
        <motion.div
          className="w-3 h-3 rounded-full"
          style={{
            background: 'radial-gradient(circle, #a855f7 0%, #8b5cf6 50%, transparent 100%)',
            boxShadow: '0 0 15px #a855f7, 0 0 30px #8b5cf6',
          }}
          animate={{
            scale: isMoving ? [1, 1.5, 1] : [1, 1.8, 1],
            opacity: isMoving ? [1, 0.6, 1] : [0.8, 1, 0.8],
          }}
          transition={{
            duration: isMoving ? 0.3 : 0.8,
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Sparkle Particles */}
      <AnimatePresence>
        {sparkles.map((sparkle) => {
          const endX = sparkle.x + Math.cos((sparkle.angle * Math.PI) / 180) * sparkle.distance;
          const endY = sparkle.y + Math.sin((sparkle.angle * Math.PI) / 180) * sparkle.distance;

          return (
            <motion.div
              key={sparkle.id}
              className="fixed pointer-events-none z-[9998]"
              initial={{
                x: sparkle.x,
                y: sparkle.y,
                scale: 1,
                opacity: 1,
              }}
              animate={{
                x: endX,
                y: endY,
                scale: 0,
                opacity: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{
                duration: sparkle.duration,
                ease: 'easeOut',
              }}
              style={{
                width: sparkle.size,
                height: sparkle.size,
              }}
            >
              {/* Sparkle Shape - Diamond/Star */}
              <div
                className="w-full h-full"
                style={{
                  background: `radial-gradient(circle, #a855f7 0%, #8b5cf6 40%, transparent 70%)`,
                  boxShadow: '0 0 10px #a855f7',
                  clipPath: 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)',
                }}
              />

              {/* Particle Trail */}
              <motion.div
                className="absolute inset-0 w-full h-full rounded-full"
                style={{
                  background: 'radial-gradient(circle, #8b5cf6 0%, transparent 60%)',
                  filter: 'blur(2px)',
                }}
                initial={{ scale: 1, opacity: 0.8 }}
                animate={{ scale: 2, opacity: 0 }}
                transition={{ duration: sparkle.duration }}
              />
            </motion.div>
          );
        })}
      </AnimatePresence>
    </>
  );
};

export default CursorSparkle;
