import React, { createContext, useContext, useState, useEffect } from "react";

const PerformanceContext = createContext();

export const PerformanceProvider = ({ children }) => {
  const [performanceMode, setPerformanceMode] = useState(() => {
    // Default to true (performance/eco mode active) if not explicitly set
    const saved = localStorage.getItem("performanceMode");
    return saved !== null ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem("performanceMode", JSON.stringify(performanceMode));
  }, [performanceMode]);

  const togglePerformanceMode = () => {
    setPerformanceMode((prev) => !prev);
  };

  return (
    <PerformanceContext.Provider value={{ performanceMode, togglePerformanceMode }}>
      {children}
    </PerformanceContext.Provider>
  );
};

export const usePerformance = () => {
  const context = useContext(PerformanceContext);
  if (context === undefined) {
    throw new Error("usePerformance must be used within a PerformanceProvider");
  }
  return context;
};
