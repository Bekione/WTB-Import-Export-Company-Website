"use client"

import { useEffect } from "react";

const ScrollProgressIndicator = () => {
  useEffect(() => {
    const updateProgressBar = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;
      const scrollPercent = `${
        (scrollTop / (scrollHeight - clientHeight)) * 100
      }%`;
      const progressBar = document.querySelector(".scroll-progress-indicator");
      progressBar.style.setProperty("--progress-length", scrollPercent);
    };

    document.addEventListener("scroll", updateProgressBar);

    return () => {
      document.removeEventListener("scroll", updateProgressBar);
    };
  }, []);

  return <div className="scroll-progress-indicator scroll-progress-indicator h-0.2 w-[var(--progress-length)] rounded-tr-full rounded-br-full fixed top-0 left-0 z-50 transition duration-200 ease-in-out; bg-gradient-to-r from-[var(--progress-bar-color)] to-white" />;
};

export default ScrollProgressIndicator;
