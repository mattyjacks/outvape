"use client";

import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from "react";

export type ThemeId = "default" | "crimson" | "cotton" | "matrix" | "brutalist";

export interface ThemeDef {
  id: ThemeId;
  label: string;
  colors: [string, string, string];
}

export const THEMES: ThemeDef[] = [
  { id: "default",   label: "Vape Black",    colors: ["#000000", "#00ff6a", "#ffffff"] },
  { id: "crimson",   label: "Crimson",        colors: ["#ffffff", "#e3000f", "#000000"] },
  { id: "cotton",    label: "Cotton Candy",   colors: ["#ffb3de", "#a020f0", "#000000"] },
  { id: "matrix",    label: "Matrix",         colors: ["#00cc44", "#ffffff", "#000000"] },
  { id: "brutalist", label: "Brutalist",      colors: ["#ffffff", "#000000", "#e3000f"] },
];

interface ThemeCtx {
  theme: ThemeId;
  setTheme: (t: ThemeId) => void;
}

const ThemeContext = createContext<ThemeCtx>({ theme: "default", setTheme: () => {} });

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ThemeId>("default");

  useEffect(() => {
    const saved = sessionStorage.getItem("ov-theme") as ThemeId | null;
    if (saved) setThemeState(saved);
  }, []);

  const setTheme = useCallback((t: ThemeId) => {
    setThemeState(t);
    sessionStorage.setItem("ov-theme", t);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
