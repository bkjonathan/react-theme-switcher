import "./App.css";
import { ThemeProvider } from "./contexts/theme.js";
import { useEffect, useState } from "react";
import ThemeBtn from "./components/ThemeBtn.jsx";
import Card from "./components/Card.jsx";

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => {
    // document.documentElement.classList.add("dark");
    setThemeMode("dark");
  };

  const lightTheme = () => {
    // document.documentElement.classList.remove("dark");
    setThemeMode("light");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);
  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <div className="flex flex-wrap min-h-screen items-center dark:bg-gray-600">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
