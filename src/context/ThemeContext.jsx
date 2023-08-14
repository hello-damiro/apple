'use client';

import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
const ThemeContextUpdate = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export function useThemeUpdate() {
  return useContext(ThemeContextUpdate);
}

export function ThemeProvider({ children }) {
  const [themeValue, setThemeValue] = useState('');

  return (
    <ThemeContext.Provider value={themeValue}>
      <ThemeContextUpdate.Provider value={setThemeValue}>{children}</ThemeContextUpdate.Provider>
    </ThemeContext.Provider>
  );
}
