import React, { useCallback, useEffect } from "react";
import { BiMoon, BiSun } from "react-icons/bi";
import { useTheme } from "next-themes";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const setAndStoreTheme = useCallback(
    (theme: "light" | "dark") => {
      window.localStorage.colorTheme = theme;
      setTheme(theme);
    },
    [setTheme]
  );

  useEffect(() => {
    if (!window.localStorage.colorTheme) {
      setAndStoreTheme(window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    }
  }, [setAndStoreTheme]);

  const handleToggle = () => {
    setAndStoreTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <button
      type="button"
      aria-label="Toggle dark mode"
      className="group rounded-full border-2 border-pink-700 px-3 py-2 font-medium text-pink-700 shadow-lg shadow-zinc-800/5 transition-all dark:border-pink-500 dark:bg-transparent md:hover:bg-pink-700 md:hover:text-white md:hover:shadow-md dark:md:hover:bg-pink-500"
      onClick={handleToggle}
    >
      <BiSun className="h-6 w-6 fill-pink-700 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700 dark:hidden dark:fill-teal-50 dark:stroke-teal-500 dark:group-hover:fill-teal-50 dark:group-hover:stroke-teal-600" />
      <BiMoon className="hidden h-6 w-6 fill-pink-500 stroke-zinc-500 transition group-hover:fill-teal-50 dark:block dark:group-hover:stroke-zinc-400" />
    </button>
  );
}