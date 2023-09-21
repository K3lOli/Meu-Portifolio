"use client";

import { Header } from "./components/header/index";
import { Body } from "./components/feed_1";
import { Body_2 } from "./components/feed_2";
import { Body_3 } from "./components/feed3/index";
import { DarkModeButton } from "./components/darkModeButton";
import { useEffect, useState } from "react";
import { Footer } from "./components/footer";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  useEffect(() => {
    const updateWindowDimensions = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    updateWindowDimensions();

    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
    };
  }, []);

  return (
    <body
      className={`h-full w-full flex max-[1080px]:w-100vw ${
        isDarkMode
          ? "bg-black"
          : "bg-gradient-to-r from-[#9FB4E9] to-[#C6D5FC]]"
      } overflow-x-hidden`}
    >
      <div>
        {isLoading ? (
          <div className="flex h-screen w-screen items-center justify-center">
          
            <svg className="mr-3 h-20 w-20 animate-spin text-violet-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          
        </div>
        ) : (
          <div>
            <DarkModeButton
              isDarkMode={isDarkMode}
              setIsDarkMode={setIsDarkMode}
            />
            <Header isDarkMode={isDarkMode} />
            <Body isDarkMode={isDarkMode} screenWidth={screenWidth} />
            <Body_2 isDarkMode={isDarkMode} screenWidth={screenWidth} />
            <Body_3 isDarkMode={isDarkMode} screenWidth={screenWidth} />
            <Footer isDarkMode={isDarkMode} />
          </div>
        )}
      </div>
    </body>
  );
}
