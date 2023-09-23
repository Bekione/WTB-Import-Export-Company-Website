"use client";

import { useState } from "react";

const TelegramIcon = () => {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const fill = isHovered ? "#FFFFFF" : "#2C3333";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={21}
      height={21}
      viewBox="0 0 100 100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      fill={fill}
      transition="fill 400ms"
    >
      <path d="M5.4 1.9C3.7 3 1.8 5.3 1.1 7.1.4 9.3 0 23.2 0 50.7 0 84.6.2 91.6 1.5 94c3.2 6.2 1.8 6 48.8 6h42.9l3.4-3.4 3.4-3.4V51.1c0-36.4-.2-42.6-1.6-45.2C95.5.2 94.1 0 49.3 0 11 0 8.3.1 5.4 1.9zm77.4 21.8c1.1 2.1-10 56.6-11.9 58.9-.6.8-1.6 1.4-2.2 1.4-.5 0-5-2.9-9.8-6.5-4.9-3.6-9.3-6.5-9.7-6.5-.4 0-2.8 2-5.2 4.5-6.6 6.7-7.4 6.3-11.3-6.2l-3.4-10.8-8.9-2.9c-9.3-3-11.1-4.3-9.1-6.3 1.5-1.5 66.4-27.1 68.9-27.2 1-.1 2.1.7 2.6 1.6z" />
      <path d="M51 44.6C40.8 51 32.4 56.3 32.2 56.5c-.5.5 4 14.9 4.9 15.9.5.6.9-.5.9-2.6 0-2 .4-4.8.9-6.1.5-1.3 7.7-8.4 16-15.7 12.6-11.1 16.6-15.1 14.9-15-.2 0-8.6 5.2-18.8 11.6z" />
    </svg>
  );
};
export default TelegramIcon;
