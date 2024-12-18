"use client";

import { Header } from "./components/header/HeaderLink";
import { InitialApresentation } from "./components/InitialApresentation/InitialApresentation";
import { AboutMe } from "./components/AboutMe/AboutMe";
import { ShowCase } from "./components/ShowCase/ShowCase";
import { DarkModeButton } from "./components/switchThemeButton/SwitchThemeButton";
import { useEffect, useState } from "react";
import { Footer } from "./components/footer/footer";

export default function Page() {

  const [isDarkMode, setIsDarkMode] = useState(false);
  const [screenWidth, setScreenWidth] = useState<number>(0);
  const [isLoading, setIsLoading] = useState(true);

  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true)
  }, [])

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
    mounted &&
    <div
      className={`h-full w-full flex max-[1080px]:w-100vw ${isDarkMode
          ? "bg-black"
          : "bg-gradient-to-r from-[#9FB4E9] to-[#C6D5FC]]"
        } overflow-x-hidden`}
    >

      <div>
        <DarkModeButton
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
        />
        <Header isDarkMode={isDarkMode} />
        <InitialApresentation isDarkMode={isDarkMode} />
        <AboutMe isDarkMode={isDarkMode} />
        <ShowCase isDarkMode={isDarkMode} />
        <Footer isDarkMode={isDarkMode} />
      </div>
    </div>
  )
}
