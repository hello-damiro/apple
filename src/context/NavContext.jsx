'use client';

import React, { createContext, useContext, useState } from 'react';

const NavContext = createContext();
const NavContextUpdate = createContext();

export function useNav() {
  return useContext(NavContext);
}

export function useNavUpdate() {
  return useContext(NavContextUpdate);
}

export function NavProvider({ children }) {
  const [navValue, setNavValue] = useState(false);

  return (
    <NavContext.Provider value={navValue}>
      <NavContextUpdate.Provider value={setNavValue}>{children}</NavContextUpdate.Provider>
    </NavContext.Provider>
  );
}
