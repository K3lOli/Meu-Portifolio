"use client";

import { Header } from "./components/header/index";
import { Body } from "./components/feed_1";
import { Body_2 } from "./components/feed_2";
import { Body_3 } from "./components/feed3/index";
import { DarkModeButton } from "./components/darkModeButton";
import { useEffect, useState } from "react";
import { div } from "three/examples/jsm/nodes/Nodes.js";

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

    // Adicionar um ouvinte de redimensionamento quando o componente for montado
    window.addEventListener("resize", updateWindowDimensions);

    // Chamar a função de atualização inicialmente
    updateWindowDimensions();

    // Remover o ouvinte de redimensionamento quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", updateWindowDimensions);
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
        
        {isLoading ? <div className="flex justify-center items-center h-screen w-screen">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-violet-900"></div>
        </div> : <div>
        <DarkModeButton isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
        <Header isDarkMode={isDarkMode} />
        <Body isDarkMode={isDarkMode} screenWidth={screenWidth} />
        <Body_2 isDarkMode={isDarkMode} screenWidth={screenWidth} />
        <Body_3 isDarkMode={isDarkMode} screenWidth={screenWidth} /></div>}
        
      </div>
    </body>
  );
}
