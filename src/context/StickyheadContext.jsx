'use client';

import React, { createContext, useContext, useState } from 'react';

const StickyheadContext = createContext();
const StickyheadContextUpdate = createContext();

export function useStickyhead() {
  return useContext(StickyheadContext);
}

export function useStickyheadUpdate() {
  return useContext(StickyheadContextUpdate);
}

export function StickyheadProvider({ children }) {
  const [stickyheadValue, setStickyheadValue] = useState(false);

  return (
    <StickyheadContext.Provider value={stickyheadValue}>
      <StickyheadContextUpdate.Provider value={setStickyheadValue}>{children}</StickyheadContextUpdate.Provider>
    </StickyheadContext.Provider>
  );
}
