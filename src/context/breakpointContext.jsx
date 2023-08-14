'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

const BreakpointContext = createContext('sm');

export function useBreakpoint() {
  return useContext(BreakpointContext);
}

const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
};

export function BreakpointProvider({ children }) {
  const [windowWidth, setWindowWidth] = useState(640);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('onload', handleResize);
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const currentBreakpoint = Object.keys(breakpoints).reduce((acc, key) => {
    if (windowWidth >= breakpoints[key]) {
      return key;
    }
    return acc;
  }, 'sm');

  return <BreakpointContext.Provider value={currentBreakpoint}>{children}</BreakpointContext.Provider>;
}
