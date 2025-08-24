import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
  const [showDropdown, setShowDropdown] = useState(false);
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
      <div
        className="text-light-text dark:text-dark-text"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        {theme === "light" ? <Sun className=""></Sun> : <Moon></Moon>}
      </div>
      {/* dropdown content */}
      {showDropdown && (
        <div className="absolute p-3 rounded-md border border-light-primary border-opacity-20 dark:border-dark-primary dark:border-opacity-20 bg-light-background/60 dark:bg-dark-background/60 top-10 right-0 z-50 flex flex-col gap-2   backdrop-blur-2xl">
          <p
            className={`${
              activeTheme === "light"
                ? `text-light-primary font-bold dark:text-dark-primary`
                : `text-light-text dark:text-dark-text`
            } `}
            onClick={() => {
              setTheme("light");
              setShowDropdown(false);
            }}
          >
            Light
          </p>
          <p
            className={`${
              activeTheme === "dark"
                ? `text-light-primary font-bold dark:text-dark-primary`
                : `text-light-text dark:text-dark-text`
            } `}
            onClick={() => {
              setTheme("dark");
              setShowDropdown(false);
            }}
          >
            Dark
          </p>
          <p
            className={`${
              (theme === "system" && activeTheme === "dark") ||
              (theme === "system" && activeTheme === "light")
                ? `text-light-primary font-bold dark:text-dark-primary`
                : `text-light-text dark:text-dark-text`
            } `}
            onClick={() => {
              setTheme("system");
              setShowDropdown(false);
            }}
          >
            System
          </p>
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
