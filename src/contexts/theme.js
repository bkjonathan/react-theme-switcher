import { createContext, useContext } from "react";

// Context for managing theme state across the application
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

// Provider component to wrap the application or components that need theme context
export const ThemeProvider = ThemeContext.Provider;

// Custom hook to use the theme context
export default function useTheme() {
  return useContext(ThemeContext);
}
