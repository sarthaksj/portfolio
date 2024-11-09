"use client";

import { useTheme } from "@/context/theme-context";
import { Icon } from "@iconify/react";
import React from "react";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="right-5 bottom-5 fixed flex justify-center items-center border-white bg-white dark:bg-gray-950 bg-opacity-80 shadow-2xl backdrop-blur-[0.5rem] border border-opacity-40 rounded-full w-[3rem] h-[3rem] hover:scale-[1.15] active:scale-105 transition-all"
      onClick={toggleTheme}
    >
      {theme === "light" ? <Icon icon="bi:sun" /> : <Icon icon="bi:moon" />}
    </button>
  );
}
