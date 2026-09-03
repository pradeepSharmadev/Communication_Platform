import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return true; // Dark is the default
  });

  useEffect(() => {
    const root = document.documentElement;

    root.classList.toggle("dark", dark);
    root.classList.toggle("light", !dark);

    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

  return (
    <button
      type="button"
      onClick={() => setDark((value) => !value)}
      aria-label="Toggle theme"
      className="
        flex h-9 w-9 items-center justify-center
        transition-all duration-200
        hover:border-primary/40
        hover:text-primary
      "
    >
      <span className="material-symbols-outlined text-[20px]">
        {dark ? "light_mode" : "dark_mode"}
      </span>
    </button>
  );
};

export default ThemeToggle;
