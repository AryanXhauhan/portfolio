// src/components/Navbar.jsx
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { usePerformance } from "../context/PerformanceContext";

const PerformanceToggle = () => {
  const { performanceMode, togglePerformanceMode } = usePerformance();
  const [showTip, setShowTip] = useState(false);

  useEffect(() => {
    // Show tip on load if performanceMode is active (Eco Mode), and auto hide after 10 seconds
    const hasSeenTip = localStorage.getItem("hasSeenVisualModeTip");
    if (performanceMode && !hasSeenTip) {
      const timer = setTimeout(() => setShowTip(true), 2500);
      const hideTimer = setTimeout(() => {
        setShowTip(false);
      }, 12500);
      return () => {
        clearTimeout(timer);
        clearTimeout(hideTimer);
      };
    }
  }, [performanceMode]);

  const handleToggleClick = () => {
    togglePerformanceMode();
    setShowTip(false);
    localStorage.setItem("hasSeenVisualModeTip", "true");
  };

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={handleToggleClick}
        className={`relative flex items-center justify-between gap-2 px-3 py-1.5 rounded-full border-2 text-[11px] font-extrabold uppercase tracking-wide transition-all duration-300 ${
          performanceMode
            ? "border-green-500/40 bg-green-500/5 text-green-400 hover:border-green-400 hover:bg-green-500/10 shadow-[0_0_15px_rgba(74,222,128,0.1)]"
            : "border-purple-500/40 bg-purple-500/5 text-purple-400 hover:border-purple-400 hover:bg-purple-500/10 shadow-[0_0_15px_rgba(192,132,252,0.1)]"
        }`}
        title={performanceMode ? "Switch to Interactive Visual Mode (3D Earth & Particles)" : "Switch to Eco Fast Mode (Clean & Snappy)"}
      >
        {/* Icon */}
        {performanceMode ? (
          <svg className="w-3.5 h-3.5 text-green-400" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ) : (
          <svg className="w-3.5 h-3.5 text-purple-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
        
        {/* Label */}
        <span>{performanceMode ? "Eco Mode" : "Visual Mode"}</span>
        
        {/* Blink LED */}
        <span className={`relative flex h-1.5 w-1.5`}>
          {performanceMode && (
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          )}
          <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
            performanceMode ? "bg-green-400" : "bg-purple-400"
          }`} />
        </span>
      </button>

      {/* Floating Spark Tooltip Prompt */}
      {showTip && (
        <div className="absolute top-12 z-50 w-56 p-3 bg-gradient-to-br from-[#1c1917] to-[#0c0a09] border border-yellow-500/40 rounded-xl shadow-[0_10px_30px_rgba(234,179,8,0.15)] text-center animate-[bounce_2s_infinite]">
          {/* Arrow */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#1c1917] border-l border-t border-yellow-500/40 rotate-45" />
          
          <p className="text-[10px] text-yellow-400 font-bold leading-normal mb-1.5 flex items-center justify-center gap-1">
            <span>✨ Full 3D Visual Experience</span>
          </p>
          <p className="text-[9px] text-gray-300 font-medium leading-relaxed">
            Want full 3D interactive graphics & animations? Toggle <strong>Visual Mode</strong> above!
          </p>
          
          <button 
            onClick={() => {
              setShowTip(false);
              localStorage.setItem("hasSeenVisualModeTip", "true");
            }}
            className="mt-2 text-[9px] text-yellow-500/60 hover:text-yellow-400 font-bold uppercase tracking-wider underline cursor-pointer"
          >
            Got it!
          </button>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary/95 backdrop-blur-md border-b border-gray-800/40" : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          {/* Logo with initials */}
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 flex items-center justify-center font-bold text-black text-xl shadow-lg">
            AC
          </div>
          
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            ARYAN &nbsp;
            <span className='sm:block hidden'> | CHAUHAN</span>
          </p>
        </Link>

        {/* Desktop Menu with Performance Toggle */}
        <div className="hidden sm:flex items-center gap-6">
          <ul className='list-none flex flex-row gap-8 mr-2'>
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[17px] font-semibold cursor-pointer transition-colors`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
          <PerformanceToggle />
        </div>

        {/* Mobile Menu layout with Toggle */}
        <div className='sm:hidden flex flex-1 justify-end items-center gap-4'>
          <PerformanceToggle />

          <button
            className='text-yellow-400 text-3xl font-bold'
            onClick={() => setToggle(!toggle)}
          >
            {toggle ? "✕" : "☰"}
          </button>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-gray-800 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  } hover:text-yellow-400 transition-colors`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
