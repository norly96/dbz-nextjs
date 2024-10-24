"use client";

import { useEffect, useState } from "react";

export const ToggleDarkMode = () => {
  const [dark, setDark] = useState<boolean>(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const darkModeHandler = () => {
    const newDarkMode = !dark;
    setDark(newDarkMode);

    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={darkModeHandler}
      className="border-2 px-2 border-black rounded-md dark:border-white"
    >
      {dark ? (
        <h2 className="text-white ">MODO CLARO</h2>
      ) : (
        <h2 className="text-black ">MODO OSCURO</h2>
      )}
    </button>
  );
};
