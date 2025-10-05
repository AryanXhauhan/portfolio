// src/components/Contact.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";

// Premium Floating Contact Graphics - NO EMOJIS
const FloatingContactGraphics = () => {
  return (
    <>
      {/* Animated Wave Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-15">
        {[...Array(5)].map((_, i) => (
          <motion.path
            key={`wave-${i}`}
            d={`M 0 ${200 + i * 100} Q ${250} ${150 + i * 100} ${500} ${200 + i * 100} T ${1000} ${200 + i * 100} T ${1500} ${200 + i * 100} T ${2000} ${200 + i * 100}`}
            stroke={`url(#waveGradient${i})`}
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: [0.3, 0.6, 0.3],
              translateX: [0, -500, 0]
            }}
            transition={{
              pathLength: { duration: 2, ease: "easeInOut" },
              opacity: { duration: 4, repeat: Infinity },
              translateX: { duration: 20 + i * 2, repeat: Infinity, ease: "linear" }
            }}
          />
        ))}
        <defs>
          {[...Array(5)].map((_, i) => (
            <linearGradient key={`grad-${i}`} id={`waveGradient${i}`} x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#fb923c" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fbbf24" stopOpacity="0.3" />
            </linearGradient>
          ))}
        </defs>
      </svg>

      {/* Orbiting Connection Nodes */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={`node-${i}`}
          className="absolute w-3 h-3 rounded-full bg-yellow-400 pointer-events-none"
          style={{
            top: '50%',
            left: '50%',
            boxShadow: '0 0 20px rgba(251, 191, 36, 0.8)',
          }}
          animate={{
            x: [
              0,
              Math.cos((i * Math.PI * 2) / 8) * 250,
              Math.cos((i * Math.PI * 2) / 8 + Math.PI) * 250,
              0
            ],
            y: [
              0,
              Math.sin((i * Math.PI * 2) / 8) * 250,
              Math.sin((i * Math.PI * 2) / 8 + Math.PI) * 250,
              0
            ],
            scale: [1, 1.5, 1],
            opacity: [0.3, 1, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.5,
          }}
        />
      ))}

      {/* Network Connection Lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        {[...Array(15)].map((_, i) => {
          const startX = (Math.random() * 100) + '%';
          const startY = (Math.random() * 100) + '%';
          const endX = (Math.random() * 100) + '%';
          const endY = (Math.random() * 100) + '%';
          return (
            <motion.line
              key={`line-${i}`}
              x1={startX} y1={startY}
              x2={endX} y2={endY}
              stroke="url(#networkGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.5, 0]
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          );
        })}
        <defs>
          <linearGradient id="networkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#fb923c" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Pulsing Rings */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={`ring-${i}`}
          className="absolute rounded-full border pointer-events-none"
          style={{
            width: `${400 + i * 200}px`,
            height: `${400 + i * 200}px`,
            top: '50%',
            left: '50%',
            marginLeft: `-${200 + i * 100}px`,
            marginTop: `-${200 + i * 100}px`,
            borderColor: `rgba(251, 191, 36, ${0.2 - i * 0.04})`,
            borderWidth: '2px',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.5, 0.2],
            rotate: i % 2 === 0 ? 360 : -360,
          }}
          transition={{
            scale: { duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 8 + i * 2, repeat: Infinity },
            rotate: { duration: 40 + i * 10, repeat: Infinity, ease: "linear" }
          }}
        />
      ))}

      {/* Floating Energy Particles */}
      {[...Array(30)].map((_, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute w-1 h-1 rounded-full pointer-events-none"
          style={{
            background: i % 2 === 0 ? '#fbbf24' : '#fb923c',
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            boxShadow: `0 0 10px ${i % 2 === 0 ? '#fbbf24' : '#fb923c'}`,
          }}
          animate={{
            y: [0, -150, 0],
            x: [0, Math.random() * 100 - 50, 0],
            opacity: [0, 1, 0],
            scale: [0, 2, 0],
          }}
          transition={{
            duration: 12 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 8,
          }}
        />
      ))}

      {/* Rotating Geometric Shapes */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={`shape-${i}`}
          className="absolute pointer-events-none border-2 border-yellow-400/20"
          style={{
            width: `${60 + i * 20}px`,
            height: `${60 + i * 20}px`,
            top: `${15 + i * 15}%`,
            left: `${10 + i * 15}%`,
            borderRadius: i % 3 === 0 ? '50%' : i % 3 === 1 ? '0%' : '20%',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            rotate: { duration: 20 + i * 5, repeat: Infinity, ease: "linear" },
            scale: { duration: 6 + i, repeat: Infinity, ease: "easeInOut" },
            opacity: { duration: 4 + i, repeat: Infinity },
          }}
        />
      ))}

      {/* Data Stream Effect */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.circle
            key={`stream-${i}`}
            cx={`${(i * 5) % 100}%`}
            cy="50%"
            r="2"
            fill="#fbbf24"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              cy: ['50%', '0%', '100%', '50%'],
              opacity: [0, 1, 1, 0],
              scale: [0, 1.5, 1.5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              delay: i * 0.4,
            }}
          />
        ))}
      </svg>

      {/* Gradient Mesh Background */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={`mesh-${i}`}
          className="absolute rounded-full pointer-events-none blur-3xl"
          style={{
            width: `${600 + i * 300}px`,
            height: `${600 + i * 300}px`,
            background: `radial-gradient(circle, ${
              i === 0 ? 'rgba(251, 191, 36, 0.08)' :
              i === 1 ? 'rgba(251, 146, 60, 0.08)' :
              'rgba(234, 179, 8, 0.08)'
            } 0%, transparent 70%)`,
            top: `${20 + i * 25}%`,
            left: `${15 + i * 30}%`,
          }}
          animate={{
            x: [0, 200, 0],
            y: [0, 150, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{
            duration: 30 + i * 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 3,
          }}
        />
      ))}
    </>
  );
};

const Contact = () => {
  const formRef = useRef();
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Aryan Chauhan",
          from_email: form.email,
          to_email: "aryanchauhancodex@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you! I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Oops! Something went wrong. Please try again.");
        }
      );
  };

  // SVG Icons (keeping your existing icons)
  const EmailIcon = () => (
    <svg className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
    </svg>
  );

  const LocationIcon = () => (
    <svg className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
    </svg>
  );

  const PhoneIcon = () => (
    <svg className="w-10 h-10 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
    </svg>
  );

  const GithubIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  );

  const LinkedInIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );

  const InstagramIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
    </svg>
  );

  const TwitterIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
    </svg>
  );

  const contactInfo = [
    {
      icon: <EmailIcon />,
      label: "Email",
      value: "aryanchauhancodex@gmail.com",
      link: "mailto:aryanchauhancodex@gmail.com"
    },
    {
      icon: <EmailIcon />,
      label: "Email",
      value: "aryanofficial40040@gmail.com",
      link: "mailto:aryanofficial40040@gmail.com"
    },
    {
      icon: <LocationIcon />,
      label: "Location",
      value: "Dehradun, Uttarakhand",
      link: null
    },
    {
      icon: <PhoneIcon />,
      label: "Phone",
      value: "+91 9084459904",
      link: "tel:+919084459904"
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <GithubIcon />,
      url: "https://github.com/AryanXhauhan",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/aryanchauhan1122/",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      url: "https://www.instagram.com/ishaanxhauhaan/",
    },
    {
      name: "Twitter",
      icon: <TwitterIcon />,
      url: "https://x.com/aaryanxhauhan",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
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

      {/* Ultra Premium Floating Graphics */}
      <FloatingContactGraphics />

      <div className="relative z-10 max-w-7xl w-full mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="text-gray-400 text-sm uppercase tracking-wider mb-4"
          >
            Get in touch
          </motion.p>
          
          <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
            <span
              style={{
                background: "linear-gradient(90deg, #fde047, #facc15, #fb923c)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text"
              }}
            >
              Contact Me
            </span>
          </h2>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? Drop me a message and I'll get back to you soon.
          </p>
        </motion.div>

        {/* Form + Earth Canvas Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 items-start mb-16">
          {/* Contact Form - ENHANCED */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-8 rounded-2xl border-2 border-gray-800 hover:border-yellow-500/50 transition-all duration-300 overflow-hidden group"
          >
            {/* Form Background Pattern */}
            <motion.div
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{
                backgroundImage: 'radial-gradient(circle, rgba(251, 191, 36, 0.05) 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />

            {/* Corner Glow Effects */}
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 bg-yellow-400/20 rounded-full blur-3xl"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl"
              animate={{
                opacity: [0.2, 0.4, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            />

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 relative z-10"
            >
              {/* Name Input */}
              <div className="flex flex-col">
                <label className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  required
                  className="bg-[#0a0a0a] py-4 px-6 text-white rounded-lg outline-none border-2 border-gray-800 focus:border-yellow-500 transition-all font-medium placeholder:text-gray-600 hover:border-gray-700"
                />
              </div>

              {/* Email Input */}
              <div className="flex flex-col">
                <label className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  required
                  className="bg-[#0a0a0a] py-4 px-6 text-white rounded-lg outline-none border-2 border-gray-800 focus:border-yellow-500 transition-all font-medium placeholder:text-gray-600 hover:border-gray-700"
                />
              </div>

              {/* Message Textarea */}
              <div className="flex flex-col">
                <label className="text-white font-semibold mb-3 text-sm uppercase tracking-wide">
                  Your Message
                </label>
                <textarea
                  rows={7}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What would you like to say?"
                  required
                  className="bg-[#0a0a0a] py-4 px-6 text-white rounded-lg outline-none border-2 border-gray-800 focus:border-yellow-500 transition-all font-medium placeholder:text-gray-600 resize-none hover:border-gray-700"
                />
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={{ scale: 1.02, boxShadow: "0 0 40px rgba(251, 191, 36, 0.5)" }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-gradient-to-r from-yellow-400 to-orange-500 hover:from-yellow-300 hover:to-orange-400 text-black font-bold py-4 px-8 rounded-full transition-all duration-300 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden group"
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-orange-400"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">{loading ? "Sending..." : "Send Message"}</span>
                
                {/* Golden Reflection Glow */}
                {!loading && (
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
                )}
              </motion.button>
            </form>
          </motion.div>

          {/* Earth Canvas */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="xl:h-auto md:h-[550px] h-[350px]"
          >
            <EarthCanvas />
          </motion.div>
        </div>

        {/* Contact Info Cards - ENHANCED */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12"
        >
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link || undefined}
              target={info.link ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -5 }}
              className={`relative bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] p-6 rounded-xl border-2 border-gray-800 hover:border-yellow-500 transition-all duration-300 overflow-hidden group ${!info.link && 'cursor-default'}`}
            >
              {/* Card Shine Effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-transparent"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />

              <div className="mb-3 relative z-10">{info.icon}</div>
              <p className="text-gray-400 text-sm mb-2 relative z-10">{info.label}</p>
              <p className="text-white font-semibold text-sm break-words relative z-10">{info.value}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* Social Links - ENHANCED */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center gap-6"
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.15, 
                rotate: 5,
                boxShadow: "0 0 30px rgba(251, 191, 36, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
              className="relative w-14 h-14 rounded-full bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border-2 border-gray-800 hover:border-yellow-400 flex items-center justify-center text-white hover:text-yellow-400 transition-all duration-300 shadow-lg overflow-hidden group"
              title={social.name}
            >
              {/* Ripple Effect */}
              <motion.div
                className="absolute inset-0 bg-yellow-400/20 rounded-full"
                initial={{ scale: 0, opacity: 0.5 }}
                whileHover={{ scale: 2, opacity: 0 }}
                transition={{ duration: 0.6 }}
              />
              
              <span className="relative z-10">{social.icon}</span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
