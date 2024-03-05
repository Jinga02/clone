/** @format */

import { createContext, useContext, useEffect, useState } from "react";
import React from "react";
import Youtube from "../api/Youtube";
import jsonYoutube from "../api/jsonYoutube";

const YoutubeApiContext = createContext();

// const youtube = new Youtube();
const youtube = new jsonYoutube();

export default function YoutubeApiProvider({ children }) {
  // 다크모드
  const [darkMode, setDarkMode] = useState(() => {
    const localStorageTheme = localStorage.getItem("theme");
    return localStorageTheme === "dark" ? localStorageTheme : "light";
  });

  const updateDarkMode = (darkMode) => {
    if (darkMode === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const handleTheme = () => {
    const newTheme = darkMode === "dark" ? "light" : "dark";
    setDarkMode(newTheme);
    updateDarkMode(newTheme);
  };

  useEffect(() => {
    updateDarkMode(darkMode);
  }, [darkMode]);

  return (
    <YoutubeApiContext.Provider value={{ youtube, handleTheme }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
