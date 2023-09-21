"use client";

import { Header } from "./components/header/index";
import { Body } from "./components/feed_1";
import { Body_2 } from "./components/feed_2";
import { Body_3 } from "./components/feed3/index";
import { DarkModeButton } from "./components/darkModeButton";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <body
      className={`h-auto w-full flex max-[1080px]:w-100vw ${
        isDarkMode
          ? "bg-black"
          : "bg-gradient-to-r from-[#9FB4E9] to-[#C6D5FC]]"
      } overflow-x-hidden`}
    >
      <div>
        <DarkModeButton isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Header isDarkMode={isDarkMode} />
        <Body isDarkMode={isDarkMode} screenWidth={screenWidth}/>
        <Body_2 isDarkMode={isDarkMode} screenWidth={screenWidth}/>
        <Body_3 isDarkMode={isDarkMode} screenWidth={screenWidth}/>
      </div>
    </body>
  );
}
