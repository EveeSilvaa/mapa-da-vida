import { createContext, useState, useEffect } from "react";
import { useTheme } from "next-themes";

interface ThemeContextType {
  theme: string;
  setTheme: (theme: string) => void;
}
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>(theme || "light");

  useEffect(() => {
    if (theme) {
      setCurrentTheme(theme);
    }
  }, [theme]);

  const handleSetTheme = (newTheme: string) => {
    setTheme(newTheme);
    setCurrentTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme: currentTheme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}