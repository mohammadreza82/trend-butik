import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import LightButton from '../../public/Assets/Website/light-mode-button.png';
import DarkButton from '../../public/Assets/Website/dark-mode-button.png';

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") || "light"
  );
  
  const element = document.documentElement;
  
  React.useEffect(() => {
    element.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="relative">
      <Image
        src={LightButton}
        alt=""
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        width={60}
        className={`cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10 ${
          theme === 'dark' ? 'opacity-0' : 'opacity-100'
        }`}
      />
      <Image
        src={DarkButton}
        alt=""
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        width={60}
        className="cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </div>
  );
};

export default DarkMode;