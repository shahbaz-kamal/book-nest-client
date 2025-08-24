import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  //   const [isDarkmode, setIsDarkMode] = useState(
  //     prefersDarkScheme.matches ? true : false
  //   );
  const [theme, setTheme] = useState(
    prefersDarkScheme.matches ? "dark" : "light"
  );
  const [activeTheme, setActiveTheme] = useState(theme);
  //   const getSystemTheme = () => {
  //     return prefersDarkScheme ? "dark" : "light";
  //   };
  useEffect(() => {
    const html = document.documentElement;
    let appliedTheme = theme;
    if (theme === "system") {
      appliedTheme = prefersDarkScheme.matches ? "dark" : "light";
    }
    if (appliedTheme === "dark") {
      html.classList.add("dark");
      html.setAttribute("data-theme", "dark");
    } else {
      html.classList.remove("dark");
      html.setAttribute("data-theme", "light");
    }

    setActiveTheme(appliedTheme);
    console.log("From theme =>", theme);
    console.log("From applied theme =>", appliedTheme);
  }, [theme, prefersDarkScheme]);
  console.log(prefersDarkScheme.matches);

  return (
    <div className="relative">
      {/* //content */}
      <div>{theme === "light" ? <Sun></Sun> : <Moon></Moon>}</div>
      {/* dropdown content */}
      <div className="absolute">
        <p onClick={() => setTheme("light")}>Light</p>
        <p onClick={() => setTheme("dark")}>Dark</p>
        <p onClick={() => setTheme("system")}>System</p>
      </div>
    </div>
  );
};

export default ThemeToggle;
