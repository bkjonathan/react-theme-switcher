import { createContext, useContext } from "react";

export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});

export const ThemeProvider = ThemeContext.Provider;

export default function useTheme() {
  return useContext(ThemeContext);
}
// export const ThemeProvider = ({ children }) => {
//   const darkTheme = () => {
//     document.documentElement.classList.add("dark");
//   };
//
//   const lightTheme = () => {
//     document.documentElement.classList.remove("dark");
//   };
//
//   return (
//     <ThemeContext.Provider value={{ darkTheme, lightTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
